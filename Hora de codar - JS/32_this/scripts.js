const teste = 5;

console.log(teste)

let persona= {
    nome: 'Raphael',
    idade: 31,
    falar: function(){
        console.log('Olá...')
    },
    dizerNome: function(){
        console.log(`O meu nome é ${this.nome}`)
    },
    profissão: 'Desenvolvedor',
    niver: function(){
        this.idade += 1
    }
}
persona.dizerNome()

console.log(this.teste)
console.log(persona.idade)
persona.niver()
console.log(persona.idade)
