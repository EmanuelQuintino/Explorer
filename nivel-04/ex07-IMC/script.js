// Faça um programa que execute o IMC de cada paciente em uma lista com:

/*
name: Maria
height: 160
weight: 55
*/

// Pesquise no google a fórmula para calcular IMC
// Imprima com loop:  O paciente X tem IMC: Y 

function calcIMC (height, weight) {
    let imc = weight / (height / 100 ) ** 2
    return imc.toFixed(2)
}

let listPatients = [
    {
        name: 'Maria',
        height: 160,
        weight: 55
    },
    {
        name: 'Ana',
        height: 160,
        weight: 55
    },
    {
        name: 'Pedro',
        height: 185,
        weight: 80
    },
]

for (let patient of listPatients) {
    let imc = calcIMC(patient.height, patient.weight)
    alert(`O paciente ${patient.name} tem IMC: ${imc} `)
}