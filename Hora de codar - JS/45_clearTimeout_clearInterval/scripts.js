// ClearTimeout na prática
var x = 0

var myTimer = setTimeout(function(){
    console.log(' O x Zero')
}, 1500)

x = 5 

if(x>0){
    clearTimeout(myTimer)
    console.log('O x passou de Zero')
}

//clearSetInterval na prática
var myInterval = setInterval(() => {
    console.log('Imprimindo interval')
},500)

setTimeout(() => {
    console.log('não precisamos mais repetir!')
    clearInterval(myInterval)
}, 1600)