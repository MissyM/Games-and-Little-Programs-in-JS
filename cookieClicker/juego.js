var galletas = 0


var inventario = [0,0,0] // Cuantas galletas, abuelitas, bitchains tenemos
var bitcoinsProduce = [1,2,4]
var precioProducto = [100,200.400]

var FPS = 30 // Fotogramas por segundo

//Función que me sirve para incrementar las galletas al principio
function clic() {
	galletas++
}
//Actualice la cantidad de galletas
function render(){
	document.getElementById("counter").innerHtml = "galletas"
}


//------------------------------------------



setInterval(function(){

}, 1000/FPS)
