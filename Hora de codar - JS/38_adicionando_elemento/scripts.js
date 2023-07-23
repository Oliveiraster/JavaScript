// criar elemento
var el = document.createElement("div")
el.classList = "div-criada"
console.log(el)
var container = document.querySelector("div#container")

// inserindo elemneto filho
container.appendChild(el)

// inserindo antes - inserBefor
var el2 = document.createElement("div")
el2.classList = "div-before"

container.insertBefore(el2, el)