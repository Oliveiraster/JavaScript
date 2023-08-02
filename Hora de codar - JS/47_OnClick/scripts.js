var btn = document.querySelector('#btn')
console.log(btn)


btn.addEventListener("click", function(){
    console.log('clicou')
    console.log(this)
    this.style.backgroundColor = 'red'
    var subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'block'

})

var title = document.querySelector('#title')
title.addEventListener("click", function(){
    var subtitle = document.querySelector('.subtitle')
    subtitle.style.display = 'none'
    btn.style.backgroundColor = 'greenyellow'
})

// double click
var subtitle = document.querySelector(".subtitle")
subtitle.addEventListener("dblclick", function(){
    btn.style.color = 'blue'
})