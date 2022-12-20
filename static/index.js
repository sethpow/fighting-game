// Imports
import player from './Sprites/Player/Player.js'
import enemy from './Sprites/Enemy/Enemy.js'
import canvas from './canvas.js'
import c from './context.js'


// Canvas Properties
canvas.width = 1024
canvas.height = 576
c.fillRect(0,0, canvas.width, canvas.height)


// Players
player.draw()
console.log(player)


// Enemies
enemy.draw()
console.log(enemy)