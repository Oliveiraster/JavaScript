let lista = []
function clicar(){
    let mostrar = document.querySelector('#resp')
    let num = document.querySelector('#num')
    let n = Number(num.value)
    if (n> 100 || n <= 0){
        alert(`O valor ${n} não esta entre 1 e 100.
insira um valor valido!`)
        num.value = ' '
    } else {
        if (lista.indexOf(Number(n)) != -1){
            alert(`O valor ${n} já esta na lista!`)
            num.value = ' '
        } else {
            lista.push(n)
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionadao.`
            mostrar.appendChild(item)
            num.value = ' '
        }
    }  
}
console.log(lista)

function fim(){
    let soma = 0 
    for (let s = 0; s < lista.length ; s++){
        soma += lista[s]
    }
    let res = document.querySelector('#res')
    res.innerHTML = `<p>Ao todo temos ${lista.length} cadastrado. <br>
O maior numero digitado foi ${Math.max(...lista)}. <br>
O menor numero digitado foi ${Math.min(...lista)}. <br>
A soma de todos os valores é ${soma}.<br>
A média dos valores é ${soma/lista.length}.</p>`
} 