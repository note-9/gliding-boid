export class Boid {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.4;
        this.lift = -1;
        this.drag = 0.98;
        this.glideFactor = 0.3;

        // tail physics
        this.tail = [];
        this.tailLength = 20;
    }

    update(keys, width, height) {
        // controls
        if (keys.left) this.vx -= 0.4;
        if (keys.right) this.vx += 0.4;
        if (keys.up) this.vy += this.lift;
        if (keys.glide) this.vy *= this.glideFactor;

        // apply gravity + drag
        this.vy += this.gravity;
        this.vx *= this.drag;
        this.vy *= this.drag;

        // position update
        this.x += this.vx;
        this.y += this.vy;

        // bounds
        if (this.y > height - 20) {
        this.y = height - 20;
        this.vy = 0;
        }
        if (this.y < 0) this.y = 0;
        if (this.x < 0) this.x = 0;
        if (this.x > width) this.x = width;

        // update tail
        this.tail.unshift({ x: this.x, y: this.y });
        if (this.tail.length > this.tailLength) this.tail.pop();
    }

    draw(ctx) {
        // draw tail
        ctx.beginPath();
        for (let i = 0; i < this.tail.length - 1; i++) {
        const p1 = this.tail[i];
        const p2 = this.tail[i + 1];
        const alpha = 1 - i / this.tail.length;
        ctx.strokeStyle = `rgba(0, 200, 255, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();

        // draw boid
        ctx.beginPath();
        ctx.fillStyle = "#00FFFF";
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fill();
    }
}