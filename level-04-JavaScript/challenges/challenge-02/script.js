// Criar uma lista de alunos com Nome e Notas da primeira e segunda prova.
// Criar função para Calcular a Media
// Depois apresente o nome de cada aluno, sua media e SE ele passou ou foi reprovado

let studants = [
    {
        name: 'Emanuel',
        test1: 9.5,
        test2: 10
    },
    {
        name: 'Ana',
        test1: 8,
        test2: 7
    },
    {
        name: 'Letícia',
        test1: 4,
        test2: 5.5
    }
]

function calcAverage(test1, test2) {
    return (test1 + test2) / 2
}

for (const studant of studants) {

    let averageStudant = calcAverage(studant.test1, studant.test2)
    let situation = ''

    
    if (averageStudant >= 7) {
        situation = `Parabéns, ${studant.name}! Você foi aprovado(a).`
    }
    else {
        situation = `Não foi dessa vez ${studant.name}! Tente novamente.`
    }

    alert(`
        ${studant.name} teve média de: ${averageStudant}
        ${situation}`)
}