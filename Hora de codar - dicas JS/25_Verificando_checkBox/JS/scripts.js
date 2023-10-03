var checkBox = document.querySelectorAll(".checkbox")

var select = 0

var btn = document.querySelector("#send")

btn.addEventListener("click", function(e){

    e.preventDefault()

    select = 0

    checkBox.forEach(function(el){

        if(el.checked){
            select++
        
        }
    })
    console.log(select)
})