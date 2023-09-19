const desc = document.querySelector("#desc")

desc.addEventListener("keypress", function(e){
    const inputLength = desc.value.length
    const maxChars = 20
    
    if(inputLength >= maxChars){
        e.preventDefault()
    }

})