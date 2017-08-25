
var express = require('express')
//Aplicacion express
var app = express();
var http = require('http').Server(app)

//Servidor HTTP
var io = require('socket.io')(http)
var simsimi = require('./simsimi')

io.on('connection', socket => {
	console.log('Usuario conectado')

	socket.on('mensajes', msgObj => {
		console.log('Mensaje recibido', msg)
		socket.broadcast.emit('mensajes', msg) //Envía el mensaje a todos los sockets que se conecten
		//Simsim responde
		if (msgObj.msg.match(/simsimi/) >= 0) {
			simsimi(msgObj.msg, resSim => {
				var respusta = {
					nombre: 'simsimi',  
					msg: msgObj.nombre +'  '+ resSim, 
				}
			socket.broadcast.em
				
				
			})
		}
	})


	socket.on('disconnect', () => {
		console.log('Usuario desconectado')
	})
})

app.use(express.static('public'))

app.get('/api/usuarios', function (req, res) {
  res.send('Hello World!');
});


http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
