window.addEventListener("blur", function(){
    console.log("Mudou de pagina!")
})


// 2 opção

var hidden, visibilityChange
if(typeof document.hidden != "undefined"){
    hidden = "hidden"
    visibilityChange = "visibilitychange"
} else if(typeof document.mozHidden != "undefined"){
    hidden = "mozHidden"
    visibilityChange = "mozvisibilitychange"
} else if(typeof document.msHidden != "undefined"){
    hidden = "msHidden"
    visibilityChange = "msvisibilitychange"
} else if(typeof document.webkitHidden != "undefined"){
    hidden = "webkitHidden"
    visibilityChange = "webkitvisibilitychange"
}