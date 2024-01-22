const users = [
    'String',
    {
        id: 1,
        name: 'Diogo'
    },
    {
        id: 2,
        name: 'Pedro'
    },
    {
        id: 3,
        name: 'Lucas'
    },
    {
        id: 4,
        name: 'Adriano'
    }
]

const [string, diogo, _, __, adriano] = users

console.log(users[0]) // String
console.log(users[4]) // Adriano

console.log(string)
console.log(adriano)