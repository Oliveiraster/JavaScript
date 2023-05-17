var hora = new Date().getHours()
console.log(`Agora são exatamente ${hora} hrs`)
if (hora < 12){
    console.log('Bom dia!')
}
else if (hora >= 12) {
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!!')
}