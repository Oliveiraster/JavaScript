let btn = document.querySelector("#action-btn")
let div = document.querySelector("#container")

console.log(btn)
console.log(div)

btn.addEventListener('click', function(){
   if(div.style.display ==="none"){
    div.style.display = "block"
   } else{
    div.style.display = "none"
   }
})