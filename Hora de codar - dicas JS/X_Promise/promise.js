// criançao de promessa
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Raphael'

    if(nome === 'Raphael'){
        resolve('Usuario encontrado!')
    } else {
        reject('Usuario não encontrado!')
    }
})

myPromise.then((data) => {
    console.log(data)
})


//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Raphael'

    if(nome === 'Raphael'){
        resolve('Usuario encontrado!')
    } else {
        reject('Usuario não encontrado!')
    }
})

myPromise2
    .then((data) => {
    return data.toLowerCase()
})
    .then((stringModificada) =>{
        console.log(stringModificada)
    })

//return the catch
const myPromise3 = new Promise((resolve, reject) => {
    const nome = 'Raphal'

    if(nome === 'Raphael'){
        resolve('Usuario encontrado!')
    } else {
        reject('Usuario não encontrado!')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => { // tratamendo do dado de erro dentro da promise
    console.log(`Aconteceu um erro: ${err}`)
})


//Resolvendo varias promessas

const p1 = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('P1 ok! Timeout')
    },2000)
})
const p2 = new Promise((resolve, reject) =>{
    resolve('P2 ok!')
})
const p3 = new Promise((resolve, reject) =>{
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    console.log(data)
})

//Varias promessas com corrida

const p4 = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('P4 ok! Timeout')
    },1000)
})
const p5 = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('P5 ok! Timeout')
    },500)
})
const p6 = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve('P6 ok! Timeout')
    },300)
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data) => {
    console.log(data)
})

//fetch request na API do gitHub
//fetch API

const userName = 'oliveiraster'
fetch(`https://api.github.com/users/${userName}`,{

    method: 'GET',
    hearders:{
        Accept: 'aplication/vnd.github.v3+jason',
    },
}) .then((response) =>{
    console.log(response)
    return response.json() 
}).then((data) => {
    const teste = document.querySelector('.teste')
    teste.innerHTML = `O nome do usuario é ${data.name}`
    console.log(`O nome do usuario é ${data.name}`)
}).catch((err) => {
    console.log(`aconteceu um erro : ${err}`)
})