var points = 0
var seconds = 7

function start() {
	setTimeout(end, seconds * 1000)
}

function position(){
	var enemy = document.getElementById("enemy") // Obtenemos el elemento enemigo
	enemy.style.position="absolute" //Sale del flujo del documento

	x = Math.floor((Math.random()*500)+1)
	y = Math.floor((Math.random()*200)+1)

	enemy.style.left = x + "px"
	enemy.style.top = y + "px"

	points++
}

function end() {
	alert("Game Over! -Points " + points)
}