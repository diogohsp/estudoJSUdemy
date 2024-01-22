// Função em JS é First-Class Object (Citizens)
//High-order function

//criar de forma literal
function fun1() {
    
}

//Armazenar função em um array 

const array = [function(a,b){return a + b}]
console.log(array[0](2,3))

//Armazenar função em um atributo de objeto

const obj = {}

obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar uma função como parâmetro

function run(fun){
    fun()
}

run(function(){console.log('executando')})

//Uma função pode retornar ou conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b +c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(4)