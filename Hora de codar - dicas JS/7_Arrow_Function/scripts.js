//Arrow function
//(a,b) =>{
//    return a + b
//}

// (a,b) => a + b

let a = 5
let b = 10
//Varios argumentos
let c = (n1,n2) => n1 + n2
console.log(c(a,b))

let d = (x,y) =>{
    let op
    if(x >= 5){
        op = x *y
    } else {
        op = x / y
    }

    return op
}
console.log(d(a,b))

// um argumento
let frase = "O Raphael é um ótimo dev."
let fraseArray = (frase) => frase.split(' ')
console.log(fraseArray(frase))

//Caso de Uso
let roupas = [
    {produto: 'Camisa', preco: 25, cor:'Amarelo'},
    {produto: 'Calça', preco: 80, cor:'Azul'},
    {produto: 'Jaqueta', preco: 100, cor:'Preto'},
    {produto: 'Camiseta', preco: 15, cor:'Rosa'},
    {produto: 'Calção', preco: 20, cor:'Azul'}
]

let precoMaiorQue50 = roupas.filter((roupa) => {
    return roupa.preco >= 50
})
console.log(precoMaiorQue50)
/*for(let i = 0; i < precoMaiorQue50.length; i++){
    console.log(precoMaiorQue50[i])
}*/

precoMaiorQue50.map((preco) => {
    console.log(` ${preco.produto} de cor ${preco.cor} esta no valor de R$${preco.preco}`)
})

// Não Usar Arrow Functions

let pessoa = {
    nome: "Matheus",
    //Maneira Errada!
    /*sayName:() => {
        console.log(this.name) 
    }*/
    // Maneira Correta
    sayName() {
        console.log(this.nome5)
    }
}
pessoa.sayName()

let btn = document.querySelector("#btn")
console.log(btn)
//Maneira Errada
/*btn.addEventListener('click', () => {
    this.classList.toggle('classe')
})*/

//Maneira Correta
btn.addEventListener('click', function() {
    this.classList.toggle('classe')
})