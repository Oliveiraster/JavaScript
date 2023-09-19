const btn = document.querySelector("#send")

btn.addEventListener("click", function(e){
    e.preventDefault()

    const name = document.querySelector("#name")
    
    const valor = name.value
    console.log(valor)
})