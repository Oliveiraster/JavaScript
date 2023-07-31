function exibir(num){
    console.log(`A operação resultou em:${num}`)
}

function soma( a, b, cb){
    var op = a + b
    cb(op)
}

function negar(num){
    console.log(`O valor mostrado sera da forma que definir na function ${num}`)
}

function mult(a,b,callback){
    var op = a * b
    callback(op)
}

soma(2,4,exibir)
mult(2,5,negar)