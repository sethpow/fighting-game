// Imports
import Sprite from '../Sprite.js'

// Location
const enemyLocation = {
    x: 974,
    y: 0
}

// Movement
const enemyVelocity = {
    x: 0,
    y: 0
}

// Enemy
const enemy = new Sprite({
    name: 'enemy',
    position: enemyLocation,
    velocity: enemyVelocity,
    color: 'red'
})

// Exports
export default enemy