// Solicitar Nome e Notas do Aluno e calcular a Media
// Depois apresente o nome do aluno sua media e SE ele passou ou foi reprovado

let name = prompt("Nome: ")
let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))

let situation = ''
const mediaAluno = (nota1 + nota2) / 2

if (mediaAluno >= 7) {
    situation = 'Aprovado(a)!'
}
else {
    situation = 'Reprovado(a)!'
}

alert(`${name} teve média de ${mediaAluno} e foi ${situation}`)

