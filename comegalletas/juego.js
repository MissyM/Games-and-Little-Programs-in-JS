var puntos = 0
var segundos = 3
function inicia() {
	setTimeout( fin, segundos * 1000)
}

function posicion() {
	var enemigo = document.getElementById("enemigo")
	enemigo.style.position= "absolute"

	x = Math.floor(Math.random()*500+1)
	y = Math.floor(Math.random()*500+1)

	enemigo.style.left = x + "px"
	enemigo.style.top = y + "px" 

puntos++

}
function fin() {
	alert ("GAME OVER -Puntos:" + puntos)
}