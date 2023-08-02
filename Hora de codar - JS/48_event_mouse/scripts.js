var title = document.querySelector("#title")

title.addEventListener("mouseover" , function(){
    this.style.backgroundColor = "yellow"
})

title.addEventListener("mouseout", function(){
    this.style.backgroundColor = 'white'
})

title.addEventListener("mouseover" , function(){
    let p = document.querySelector(".hide")
    p.style.display = 'block'
})
title.addEventListener("mouseout" , function(){
    let p = document.querySelector(".hide")
    p.style.display = 'none'
})
