// toLowerCase e toUpperCase
var frase = "Esta é a frase que vamos manipular"

var fraseCaixaAlta = frase.toUpperCase()
console.log(fraseCaixaAlta)

console.log(fraseCaixaAlta.toLowerCase())


//trim
var nome= '       Raphael      '
var nomeSemEspaco = nome.trim()
console.log(nomeSemEspaco)

// split
console.log(frase.split(" "))

var tags = "PHP, JavaScript, HTML, CSS"
console.log(tags.split(", "))

// lastIndexOf
var frasedois = "Eu quero a última palavra teste desta frase teste"
console.log(frasedois.indexOf("teste"))
console.log(frasedois.lastIndexOf("teste"))