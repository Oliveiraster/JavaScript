var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão']

var listaUl = document.createElement('ul')

var body = document.querySelectorAll('body')

console.log(body[0])

body[0].appendChild(listaUl)

var listaNoBody = document.getElementsByTagName('ul')
console.log(listaNoBody[0])

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li')
    console.log(lista[i])
    if( i % 2 == 0){
    liFor.classList.add('classTeste')}

    var textli = document.createTextNode(lista[i])

    liFor.appendChild(textli)

    listaNoBody[0].appendChild(liFor)
}