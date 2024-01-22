const userObj = {
    id: 1,
    name: 'Diogo',
    nickname: 'diogo-mcdonalds',
    email: 'diogo@email.com',
    address: {
        street: 'rua'
    },
    documento: {
        cpf: {
            numero: {
                digitos: '34232'
            }
        }
    }
}

// const user = await fetch('api/get-user-profile');
const { email, name, address: { street }, documento: { cpf: { numero: { digitos } } } } = userObj
console.log(digitos)


const numero = 'teste'



