// Imports
import player from './Sprites/Player/Player.js'
import enemy from './Sprites/Enemy/Enemy.js'


// Canvas & Context
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


// Canvas Properties
canvas.width = 1024
canvas.height = 576
c.fillRect(0,0, canvas.width, canvas.height)


// Players
console.log(player);


// Enemies
console.log(enemy);
