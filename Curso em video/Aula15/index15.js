let num = [5, 8, 2, 9, 3]

for (var n = 0; n<= num.length; n++ ){
    console.log(num[n])
}
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}