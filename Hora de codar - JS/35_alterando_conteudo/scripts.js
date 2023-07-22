// selecioner elemento
var title = document.querySelector('#title')

//innerHTML
function inHtml(){
    title.innerHTML = 'Testando o texto  alterado!'
    setTimeout(() => {title.innerHTML = 'Título principal' },1000)
}
//textContent => mais utilizado, recomentando e performatico

var subtitle = document.querySelector('.subtitle')
function teCont(){
    subtitle.textContent = 'Testando o textContent'
    setTimeout(() => {subtitle.innerHTML = 'Este é o segundo título' },1000)
}