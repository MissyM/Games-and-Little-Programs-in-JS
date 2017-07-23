
// Obtenemos los elementos del DOM
var radioElm = document.getElementById("radio")
var resultAreaElm = document.getElementById("resultArea")
var resultCircunferenciaElm = document.getElementById("resultCircunferencia")
var btnCalcularElm = document.getElementById("btnCalcular")

var calcularArea = radio => Math.PI*Math.pow(radio,2)
var calcularCircunferencia = radio => Math.PI * 2 * radio


// Cálculo del área y la circunferencia

btnCalcularElm.addEventListener("click", () => {
	resultAreaElm.innerHTML = "Area: " + calcularArea(radioElm.value) 
	resultCircunferenciaElm.innerHTML = "Circunferencia: " + calcularCircunferencia(radioElm.value)

})


