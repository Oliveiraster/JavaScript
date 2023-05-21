var lista = [10, 30, 20, 40]
//let n = 4
/*if (n> 100 || n <= 0){
    alert('Por favor digite um valor entre 1 e 100')
} else {
    if (lista.indexOf(Number(n)) != -1){
            console.log(`O valor ${n} já esta na lista!`)
    } else {
        lista.push(n)
            //mostrar.innerHTML = 'OK'
    }
    }  */

var soma = 0 
for (let s = 0; s < lista.length ; s++){
    soma += lista[s]
        console.log(lista[s])
}
console.log(soma)