
function clicar(){
    var pp = document.querySelector('#texto')
    var pais = (pp.value)
    var p = document.querySelector('#resposta')
    if (pais == 'Brasil') {
        p.innerHTML = '<p>consideramos você Brasileiro </p>'
    }
    else{
        p.innerHTML = '<p>Consideramos você Estrangeiro </p>'

    }
}
