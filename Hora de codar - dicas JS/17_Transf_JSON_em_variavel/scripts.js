 var json = '{"nome": "Raphael", "idade": 31, "profissao": "Desenvolvedor"}'

 console.log(json)
 console.log(typeof json)

 //JSON
 var obj = JSON.parse(json)
 console.log(obj)
 console.log(typeof obj)

 // obj para JSON

 var objparaJson = JSON.stringify(obj)
 console.log(objparaJson)
 console.log(typeof objparaJson)