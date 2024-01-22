const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const menorQue1000 = p => p.preco < 1000;

console.log(produtos.filter(menorQue1000))


// console.log(function(e) {
//     if(e.preco > 1000 && e.fragil === true){
//         return e
//     }else {
//         return false
//     }
// })

const elCaro = (e) => {
    return e.preco > 10
}

const elFragil = (e) => {
    return e.fragil 
}

console.log(produtos.filter(elCaro).filter(elFragil))