const userObj = {
    id: 1,
    name: 'Diogo',
    nickname: 'diogo-mcdonalds',
    email: 'diogo@email.com',
    address: {
        street: 'rua'
    }
}

// COM SPREAD
console.log({ ...userObj })

// SEM SPREAD
console.log(userObj.id)
console.log(userObj.name)
console.log(userObj.nickname)
console.log(userObj.email)
console.log(userObj.address.street)