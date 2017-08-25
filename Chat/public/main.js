var socket = io()

var nombre = document.getElementById('nombre')
var mensaje = document.getElementById('mensaje')
var button = document.getElementById('boton')
var cajaMensajes = document.getElementById('cajaMensajes')




boton.addEventListener('click', () => {
	var msg = {
		nombre: nombre.value,
		msg: mensaje.value,
	}
	socket.emit('mensajes', mensaje.value)
	agregarMensaje(msg)
	console.log(mensaje.value)
	mensaje.value = ''
})

socket.on('mensajes', msg => {
	console.log(msg)
})

function agregarMensaje (msg) {
	cajaMensajes.innerHTML += '<div>'
		+ msg.nombre + 'dice: ' + msg.msg
		+ '<div>' +cajaMensajes.innerHTML

}