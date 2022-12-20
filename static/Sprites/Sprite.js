// Imports
import canvas from '../canvas.js'
import c from '../context.js'

// Global Variables
const gravity = 0.2

// Sprite
class Sprite {
    constructor({ name, position, velocity, color }) {
        this.name = name
        this.position = position
        this.velocity = velocity
        this.color = color
        this.height = 150
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else {
            this.velocity.y += gravity
        }
    }
}

// Exports
export default Sprite