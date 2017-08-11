function pipe (fns, x) {
  let res = x
  for (var i = 0; i < fns.length; i++) {
    res = fns[i](res)
  }
  return res
}
