let lista = [2, 5, 2, 9]

console.log(lista)

let num = lista.indexOf(2)
if (num == -1) {
    console.log(`O valor não foi encontrado`)
}
else {
    console.log(`O valor esta na posição ${num}`)
}