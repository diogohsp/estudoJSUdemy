//rest é o spead em uma ocasião de juntar os parametros

function total(...numeros){
    total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))