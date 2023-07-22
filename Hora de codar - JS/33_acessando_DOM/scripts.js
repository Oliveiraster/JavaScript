// tag
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis[3])

// id
//var paragrafo = document.getElementById('paragrafo')
var paragrafo = document.querySelector('p#paragrafo')
console.log(paragrafo)

// class 
//var intesDaLista = document.getElementsByClassName('item')
//console.log(intesDaLista)
var itensLista = document.querySelectorAll('li.item')
console.log(itensLista[2])