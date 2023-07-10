function clicar(){
    var ano = new Date().getFullYear()
    var anor = document.querySelector('#ano')
    var res = document.querySelector('div#foto')
    if (anor.value.length == 0|| (anor.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - anor.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'fotos')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 13){
                img.setAttribute('src', './imagem/crianca-h.jpg')
            } else if (idade<21){
                img.setAttribute('src', './imagem/jovem-h.jpg') 
            } else if(idade < 50){
                img.setAttribute('src', './imagem/homem-h.jpg')
            }else {
                img.setAttribute('src', './imagem/idoso-h.jpg')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                img.setAttribute('src', './imagem/crianca-m.jpg')
            } else if (idade<21){
                img.setAttribute('src', './imagem/jovem-m.jpg') 
            } else if(idade < 50){
                img.setAttribute('src', './imagem/Mulher-m.jpg')
            }else {
                img.setAttribute('src', './imagem/idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

   
}