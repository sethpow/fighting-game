// Imports
import Sprite from '../Sprite.js'

// Location
const playerLocation = {
    x: 0,
    y: 0
}

// Movement
const playerVelocity = {
    x: 0,
    y: 0
}

// Player
const player = new Sprite({
    name: 'player',
    position: playerLocation,
    velocity: playerVelocity,
    color: 'blue'
})

// Exports
export default player