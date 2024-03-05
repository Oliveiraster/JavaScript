// sintaxe 
/*function primeiraFuncao(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log('Esperou isso aqui')
            resolve()
        }, 2000)
    })
}

async function segundaFunction(){
    console.log('iniciou')
    await primeiraFuncao()
    console.log('Terminou')
}

segundaFunction() */

// aplicação

function getUser(id){
    return fetch(`http://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function shoeUserName(id){
    const user = await getUser(id)
    console.log(`O nome do usuario é: ${user.data.first_name}`)
}
shoeUserName(12)