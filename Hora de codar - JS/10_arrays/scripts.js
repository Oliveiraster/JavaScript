// objeto => {} / array => []

var arr = [ 10, 'Raphael', true, {teste: 'ok', testa: 2}] 
console.log(arr)

var arr2 = [2,3,4,5,6,]
console.log(arr2)

console.log(arr[3].teste)
console.log(arr2[0])

arr[5] = 10
console.log(arr)

arr[0] = 'Testando'
console.log(arr)

console.log(typeof arr)