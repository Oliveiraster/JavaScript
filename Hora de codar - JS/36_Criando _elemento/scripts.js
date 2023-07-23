// Criando e inserindo elemento no body
var novoParagrafo = document.createElement("p")
console.log(novoParagrafo)

var texto = document.createTextNode("Este é o conteúdo do paragrafo")
novoParagrafo.appendChild(texto)

var body = document.querySelector("body")
body.appendChild(novoParagrafo)

// inserir em um container
var container = document.getElementById("container")

var el = document.createElement("span")

el.appendChild(document.createTextNode("texto do span"))
container.appendChild(el)
