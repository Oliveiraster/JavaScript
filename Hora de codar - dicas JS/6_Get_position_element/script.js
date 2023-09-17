//selecionar elemento
var box = document.querySelector("#box")
console.log(box)

//verificar coordenadas e tbm psocição
var coord = box.getBoundingClientRect()
console.log(coord)

if(coord.x === 100){
    box.style.backgroundColor = "green"
}
