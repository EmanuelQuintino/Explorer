// Solicite 2 números e apresente a soma deles
// Depois apresente as outras operações simples

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
