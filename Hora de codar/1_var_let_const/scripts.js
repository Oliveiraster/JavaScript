let nome = 'Pedro'
const numero = 1

function dizerNome(){
    var nome = 'João'
    console.log(`O nome é ${nome}`)
}

if(true){
    let nome = 'Salete'
    const numero = 2
    console.log(nome)
    console.log(numero)
}
console.log(nome)
console.log(numero)
dizerNome()

for(let i = 0; i < 3; i++){
    let nome = 'Anisio ' + i
    const numero = 3
    console.log(nome)
    console.log(numero)
}


// Var == variavel global 
// let == variavel local (faz escopo)
// const == variavel Constante (imutável)