// Criar uma função que receba argumentos infinitos
function somaInfinita(){
    console.log(arguments) //objeto com todos os argumentos
    var args = [].slice.call(arguments,0)
    console.log(args)
    var soma = 0
    for(var i = 0; i< args.length ; i++){
        soma+= args[i]
    }
    return soma
}

console.log(somaInfinita(1,2,3))
console.log(somaInfinita(32,12,22,33))
