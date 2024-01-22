const nums = [1,2,3,4,5]

//For com próposito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10

let somaDez = nums.map(soma10)
console.log(somaDez)

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let valorConvertido = nums.map(paraDinheiro)
console.log(valorConvertido)

//Usando mais de 1 map de uma vez.

resultado = nums.map(soma10).map(paraDinheiro)
console.log(resultado)