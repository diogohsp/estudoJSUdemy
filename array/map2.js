const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome" : "Caderno", "preco": 13.90}',
    '{"nome" : "Kit de Lapis", "preco": 41.22}',
    '{"nome" : "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com os preços

const transformaEmObjeto = elemento => JSON.parse(elemento)

let precos = carrinho.map(transformaEmObjeto).map(e => e.preco)
console.log(precos)