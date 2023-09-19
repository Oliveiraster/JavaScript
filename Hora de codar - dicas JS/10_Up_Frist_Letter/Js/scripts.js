const texto = 'CONVERTER ESSE TEXTO PARA MAIUSCULO SÓ A PRIMEIRA LETRA.'

function UpFristLetter(){
    const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a){
        return a.toUpperCase()
    })

    return subst
}
console.log(UpFristLetter(texto))