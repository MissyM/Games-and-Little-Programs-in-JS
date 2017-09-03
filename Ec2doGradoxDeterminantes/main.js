//Este programa resuelve sistemas de ecuaciones de orden 2 a travez del método de determinantes

var arr = [
  [[1,2],[3,1],[0,12]],
  [[0,2],[3,2],[3,12]],
  [[1,1],[3,1],[1,12]],
	[[1,1],[1,1],[1,1]],
]

var det = m2x2 => m2x2[0][0] * m2x2[1][1] - m2x2[1][0] * m2x2[0][1] 

var res2x2 = m => ({
  x: det([m[2], m[1]]) / det([m[0], m[1]]),
  y: det([m[0], m[2]]) / det([m[0], m[1]]),
})

var res = arr.map(res2x2)
console.log(res)