function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var hora = new Date().getHours()
    if (hora >= 0 && hora <12){
        img.src = 'img/bom-dia.jpg'
        document.body.style.background ='#fdd90b'
        msg.innerHTML = `Bom Dia !! agora são <strong>${hora}</strong> Hora(s)`
    } 
    else if (hora >= 12 && hora <=18){
        img.src = 'img/boa-tarde.jpg'
        document.body.style.background = '#39d4da'
        msg.innerHTML = `Boa Tarde !! agora são <strong>${hora}</strong> Hora(s)`
    }
    else{
        img.src = 'img/boa-noite.jpg'
        document.body.style.background = 'rgb(8, 50, 102)'
        msg.innerHTML = `Boa Noite !! agora são <strong>${hora}</strong> Hora(s)`
    }
}
