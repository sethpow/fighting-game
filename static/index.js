// Imports
import player from './Sprites/Player/Player.js'
import enemy from './Sprites/Enemy/Enemy.js'
import canvas from './canvas.js'
import c from './context.js'


// Canvas Properties
canvas.width = 1024
canvas.height = 576
c.fillRect(0,0, canvas.width, canvas.height)


// Animation
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()