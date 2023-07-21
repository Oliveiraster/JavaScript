var persona= {
    nome: 'Raphael',
    idade: 31,
    falar: function(){
        console.log('Olá...')
    } ,
    soma: function(a,b){
        
        console.log( a + b)
    }
}
console.log(persona.nome)
persona.falar()
persona.soma(5,2)