// INT ou FLOAT

var a = 10
var b = 1.8

console.log(typeof(a))
console.log(typeof b)


// % => pega o resto da divisão
function checkFloat(num){
    if(num % 1 === 0){
        console.log("É inteiro")
    } else {
        console.log('É Float')
    }
}

checkFloat(a)
checkFloat(b)

//isInterger
if(Number.isInteger(b)){
    console.log('É inteiro')
} else {
    console.log('É float')
}