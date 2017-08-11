function promedio (notas) {
  var n = 0, prom 
  for (var i = 0; i < notas.length; i++) {
    n += notas[i] 
  }
  prom = n / notas.length
  return prom
}