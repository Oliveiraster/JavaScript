// length 
var arr = [1,2,3,4,5]
console.log(arr.length)

// push => sempre adiciona no final
arr.push(6) 
console.log(arr)
arr.push('Serve para texto')
console.log(arr)

// pop => remove o ultimo item
arr.pop()
console.log(arr)

// unshift => adiciona no inicio da lista
arr.unshift(0)
arr.unshift('teste')
console.log(arr)

// shift => remove o primeiro item da lista
arr.shift()
console.log(arr) 

// acessar o ultimo elemento do array
console.log(arr[arr.length-1])

// isArray
console.log(Array.isArray(5))
console.log(Array.isArray(arr))