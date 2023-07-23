// criar elemento
var el = document.createElement("h3")
el.classList = 'testando_classe'

var texto = document.createTextNode('Este é o texto')
el.appendChild(texto)
console.log(el)

// selecionar o elemento da troca
var title = document.querySelector('#title')
console.log(title)

// selecionar o pai do el
// var div = document.querySelector('div.text')
var pai = title.parentNode

console.log(pai)

// trocar os elementos
pai.replaceChild(el, title)
// replaceChild(1° elementro que vai entrar, 2° elemento a ser substituido)