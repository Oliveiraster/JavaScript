function primeiraFuncao(){
    console.log('Hello World the function')
}
primeiraFuncao()

function dizerNome(nome){
    console.log(`O nome é : ${nome}`)
}

dizerNome('Raphael')

var banco= ['Raphael', 'Jefferson', 'Ary', 'José', 'Fabio']

/*for(var i = 0; i < banco.length; i++){
    console.log(`O ${i+1}° nome é ${banco[i]}`)
    
}*/
for(var i = 0; i < banco.length; i++){
    console.log(dizerNome(banco[i]))
    // pq do undefined apos cada log chamando a função
}

function soma(a, b){
    var soma = a + b
    return soma
}

var somaUm = soma(2,5)
console.log(somaUm)

var somaDois = soma(5,5)
console.log(somaDois)

console.log(soma(4,5))
