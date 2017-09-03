var pedidosDia = [
{
	nombre: 'Mile',
	nota: 'Ena',
	precio: 5000,

}, 
{
	nombre: 'Mile',
	nota: 'Pollo asado',
	precio: 10000,	
},
{
	nombre: 'Mile',
	nota: 'Atún',
	precio: 3000,	
},
{
	nombre: 'Juan',
	nota: 'Paella',
	precio: 14000,	
},
{
	nombre: 'Juan',
	nota: 'Sancocho',
	precio: 16000,	
},
{
	nombre: 'Juan',
	nota: 'Carve',
	precio: 8000,	
},
]
//Obtener las notas de los pedidos de Mile
var notasMile = pedidosDia
	.filter(obj => obj.nombre === 'Mile')
	.map(pedidoMile => pedidoMile.nota)

//Obtener la suma de los precios de los pedidos de Juan

var preciosJuan = pedidosDia
	.filter(pedidoDia => pedidoDia.nombre === 'Juan')
	.reduce((suma, pedidoJuan) => suma + pedidoJuan.precio, 0)
