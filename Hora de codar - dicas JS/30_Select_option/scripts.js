var texto = "Ferrari"
var select = document.querySelector("#marcas")
console.log(select)

for(var i = 0; i < select.length; i++){

    if(select[i].text===texto){
        select.selectedIndex = i
        break
    }
}

console.log(select[3])