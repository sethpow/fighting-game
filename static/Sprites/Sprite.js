// Imports
import c from '../context.js'

// Sprite
class Sprite {
    constructor({ name, position, velocity, color }) {
        this.name = name
        this.position = position
        this.velocity = velocity
        this.color = color
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, 50, 150)
    }

    update() {
        this.draw()
        this.position.y += 10
    }
}

// Exports
export default Sprite