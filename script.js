    import { Boid } from "./boid.js";

    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // 🧠 resize handler
    window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    });

    // 🕹️ input control
    const keys = {
    left: false,
    right: false,
    up: false,
    glide: false
    };

    window.addEventListener("keydown", e => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") keys.left = true;
    if (e.code === "ArrowRight" || e.code === "KeyD") keys.right = true;
    if (e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space") keys.up = true;
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") keys.glide = true;
    });

    window.addEventListener("keyup", e => {
    if (e.code === "ArrowLeft" || e.code === "KeyA") keys.left = false;
    if (e.code === "ArrowRight" || e.code === "KeyD") keys.right = false;
    if (e.code === "ArrowUp" || e.code === "KeyW" || e.code === "Space") keys.up = false;
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") keys.glide = false;
    });

    // 🪶 boid setup
    const boid = new Boid(width / 2, height / 2);

    // 🎯 game loop
    function update() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, width, height);

    boid.update(keys, width, height);
    boid.draw(ctx);

    requestAnimationFrame(update);
    }

    update();
