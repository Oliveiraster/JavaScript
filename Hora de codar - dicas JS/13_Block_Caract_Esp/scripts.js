const brandInput = document.querySelector("#brand")

brandInput.addEventListener("keypress", function(e){

    if(!checkChar(e)){
        e.preventDefault()
        
    }
})

function checkChar(e){
    const char = String.fromCharCode(e.keyCode)

    //console.log(e.keyCode)
    //console.log(char)

    const pattern = '[a-zA-Z0-9]'
    if(char.match(pattern)){
        console.log(char)
        return true
        
    }
}