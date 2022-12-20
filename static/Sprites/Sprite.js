// Imports
import c from '../context.js'

// Sprite
class Sprite {
    constructor(name, position, color) {
        this.name = name
        this.position = position
        this.color = color
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, 50, 150)
    }
}

// Exports
export default Sprite