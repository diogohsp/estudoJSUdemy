// let e const

{
    var a = 2
    let b = 3
    console.log('Log dentro do Bloco:', a)
    console.log('Log dentro do Bloco:', b)
}

console.log('Log fora do Bloco:', a)
// console.log('Log fora do Bloco:', b) //retornara que B não foi definido

//Tempalte String

const produto = "iPad"
console.log(`${produto} é caro!`)

//Destructuring

const [l, e, ...tras] = "Diogo"
console.log([l,e,tras])

const [x, y] = [1,2,3]
console.log(x,y)

// const [x, ,y] = [1,4,5]
// console.log(x,y) // retorna 1 5

const {idade: i, nome} = {nome: 'Ana', idade: 22}
console.log(i, nome)