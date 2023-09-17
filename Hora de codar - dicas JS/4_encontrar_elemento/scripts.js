let profissoes = ["medico", "Desenvolvedor", "Advogado", "Design"]
console.log(profissoes.includes("medico"))

if(profissoes.includes("Desenvolvedor")){
    console.log("sim, existe este elemento")
    console.log(profissoes.indexOf("Desenvolvedor"))
}

console.log(profissoes.includes("pedreiro"))