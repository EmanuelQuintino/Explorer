// Solicite 2 números e apresente a soma, subtração, multiplicação, divisão, resto da divisão
// Depois apresente se o valor da soma é par ou ímpar
// Por fim, diga se os dois números são iguais ou não.

let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o sugundo número: "))


const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const res = numberOne % numberTwo

alert(`A soma de ${numberOne} e ${numberTwo} = ${numberOne + numberTwo}`)

alert(`A subtração de ${numberOne} e ${numberTwo} = ${sub}`)

alert(`A multiplicação de ${numberOne} e ${numberTwo} = ${mul}`)

alert(`A divisão de ${numberOne} e ${numberTwo} = ${div}`)

alert(`O resto da divisão de ${numberOne} e ${numberTwo} = ${res}`)

if (sum % 2 == 0) {
    alert(`A soma de ${numberOne} e ${numberTwo} é PAR = ${numberOne + numberTwo}`)
}
else {
    alert(`A soma de ${numberOne} e ${numberTwo} é ÍMPAR = ${numberOne + numberTwo}`)
}

if (numberOne == numberTwo) {
    alert(`Os números ${numberOne} e ${numberTwo} são iguais.`)
}
else {
    alert(`Os números ${numberOne} e ${numberTwo} são diferentes.`)
}