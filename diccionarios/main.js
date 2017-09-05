// RPC: Remote procedure call

var instList = [
  ['alert', 'Hola!'],
	['log', 'Hola! log'],
  [
    'applyMath',
    [1,2,3,4],
    [
      ['inc', 10],
      ['dec', 2],
    ],
  ],
]

var funciones = {
  inc: (x, a) => x + a,
  dec: (x, a) => x - a,
}

var comandos = {
  alert: msj => alert(msj),
  log: msj => console.log(msj),
  applyMath: (numeros, fns) => {
    var resultado = numeros
    for (var i = 0; i < fns.length; i++) {
      resultado = resultado.map(x => funciones[fns[i][0]](x, fns[i][1]))
    }
    console.log(resultado)
  },
}

function execute (inst) {
  comandos[inst[0]](inst[1], inst[2])
}

function executeList (list) {
  //console.log(list)
  for (var i = 0; i < list.length; i++) {
    execute(list[i])
  }
}

executeList(instList)
