var container = document.querySelector('#container')
var p = document.querySelector('#container p')
var button = document.querySelector('#container button')

function removep(){
    container.removeChild(p)
    container.removeChild(button)
    setTimeout(() => {
        container.appendChild(p)
        container.appendChild(button)
    },1000)
}

function removeT(){
    let button = document.querySelector('div button.T')
    let title = document.querySelector('div #title')
    let div = document.querySelector('div.text')
    button.remove()
    title.remove()
    setTimeout(() => {
        div.appendChild(title)
        div.appendChild(button)
    },1000)
}