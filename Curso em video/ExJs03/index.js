function contador(){ 
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('#res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('Impossível Contar!')
    } else {
        if (p < 0){
            p = p * -1
        }
        res.innerHTML ='Contando: '
        if(i < f){
            for(var c=i; c<=f; c+=p) {
                console.log(`${c}`)
                res.innerHTML += `${c}🔜 `
            }
        }
        if(i > f){
            for(var c=i; c>=f; c-=p) {
                console.log(`${c}`)
                res.innerHTML += `${c}🔜 `
            }
        }
        res.innerHTML += ' 🖐 '
    }
}