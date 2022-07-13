// Capture 10 itens para uma lista de supermercado.
// Imprima-os separando por vírgula.

let itens = []

for (let item = 0; item < 10; item++) {
    itens[item] = prompt(`Item número ${item + 1}: `)
}

alert(itens)