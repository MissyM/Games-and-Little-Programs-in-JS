/* El reto consiste en crear un programa que recibe un conjunto de datos
sobre pesos de un compuesto químico, donde los que estén por debajo de 100
gr son datos errados. El propósito es pasar los datos correctos a kg y obtener
su promedio.  */

var data_with_error = [ 1000,100, 200, 300, 400, 10, 20 ]

data = data_with_error.filter( d => d > 100 )
consolo.log( data )
kg = data.map( d => d / 1000)
console.log(kg)
prom = kg.reduce((p, el) => (p + el) / kg.lenght)
console.log(prom)