function calcular(){
    clearInterval
    var res = document.querySelector('#res')
    var nx = document.querySelector('#number')
    var n = Number(nx.value)
    var c = 1
    if (nx.value.length == 0 ){
        alert('[ERRO] Digite um valor valido!!')
    } else {
        res.style.textAling = 'Justify'
        res.innerHTML = `Tabela de ${n} <br>`
        while (c <= 10){
            console.log(`${c}`)
            var s = n * c
            res.innerHTML += `${n} x ${c} = ${s} <br>`
            c++
        }
    }
}