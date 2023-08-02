document.addEventListener('keydown', 
function(e){
    let div = document.querySelector('.teste')
    div.textContent = `apertou ${e.key}`
    console.log(e)
})
document.addEventListener('keyup', 
function(e){
    let div = document.querySelector('.teste')
    div.textContent = `Soltou ${e.key}`
    console.log(e)
})