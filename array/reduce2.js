const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas ?

const resposta = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => {
    console.log(resultado, bolsista)
    return resultado && bolsista
})

console.log('Todos os alunos são bolsistas? :', resposta)


//Desafio 2: algum aluno é bolsista ?

const resposta2= alunos.map(a => a.bolsista).reduce((resultado, bolsista) => {
    console.log(resultado, bolsista)
    return resultado || bolsista
    
})

console.log('Algum dos alunos é bolsista? :', resposta2)

const respostaAlternativa = alunos.every((aluno) => aluno.bolsista)
console.log('Todos os alunos são bolsistas? :', respostaAlternativa)

const respostaAlternativa2 = alunos.some((aluno) => aluno.bolsista)
console.log('ALgum dos alunos é bolsistas? :', respostaAlternativa2)