function pipe() {
    let fns = arguments
    return n=>{
        let result = n
        for (var i = 0; i < fns.length; i++) {
            result = fns[i](result)
        }
        return result
    }
}
