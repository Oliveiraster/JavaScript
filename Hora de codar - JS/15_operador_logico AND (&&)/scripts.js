var idade = 16
var nome = 'João'

if (nome == 'João' && idade == 16){
    console.log(`O ${nome} pode entrar na aula de esgrima`)
} else {
    console.log(`O ${nome} não é o João`)
}

if(1==1 && 3>2 && true){
    console.log('Passou')
}

if(1 == 1 && 3 > 5 && true){
    console.log('Passou 2')
} else if(nome === 'João' && idade >=16){
    console.log('Passou João')
}