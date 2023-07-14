//destructuring com arrays
let arr = [1,2,3,4,5]
let[num1,num2,num3,num4,num5]= arr
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

// com objeto
const pessoa ={
    nome: "Raphael",
    profissao: "Desenvolvedor",
    idade: 31
}

let {nome: nomeVar, profissao: profissaoVar, idade: idadeVar } = pessoa
console.log(nomeVar)
console.log(profissaoVar)
console.log(idadeVar)

// com funções 
function teste(){
    return ["teste", 45]
}

let [varA, varB] = teste()
console.log(varA)
console.log(varB)

// ignorando elementos
let arrDois = [5, 10, 15]

let [cinco,,quinze] = arrDois
console.log(cinco)
console.log(quinze)

// strings
let novaString = 'Laranja'

const [z,x,v] = novaString

for (let i =0 ; i < [z,x,v].length; i++) {
    console.log([z,x,v][i])
}

// rest operator
let numero2 = [1,2,3,4,5,6,7,8,9]

const[um,...resto] = numero2

console.log(um)
console.log(resto)

// Cuidado
let obj2 = {
    x:10,
    z:20
}

let p,q

({x:p, z:q} = obj2)

console.log(p,q)