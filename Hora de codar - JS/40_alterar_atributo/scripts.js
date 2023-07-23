// Adicionar Atributo
var title = document.querySelector('#title')
title.setAttribute('class', 'testando tributo')
// (1° atributo a ser inserido, 2° nomeclatura do atributo)
console.log(title)

var btn = document.querySelector('.T')
btn.setAttribute('disabled' , 'disabled')

// Remover Atributos
var div = document.querySelector('div#container')
div.removeAttribute('id')
console.log(div)