export class Glider {
    constructor(game){
        this.game = game
        this.radius = 50
        this.stheta = 0
        this.etheta = 2 * Math.PI
        this.x = 100
        this.y = 100
    }
    update(){

    }
    draw(context){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, this.stheta, this.etheta)
        context.fillStyle = 'black'
        context.fill()
        context.stroke()
    }
}