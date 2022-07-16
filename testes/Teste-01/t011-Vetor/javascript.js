var num = [4, 1, 7]
num[3] = 5           /*Adiciona na area 3*/
num.push(8)          /*Adiciona sempre no final*/

console.log(num)
num.sort()
console.log(`A lista em ordem ${num}`)                 /*Deixa em Ordem numerica*/
console.log(`O numero de elemento é: ${num.length}`)   /*Retorna o numero de elementos*/
console.log()


/* for (c=0; c<num.length; c++) {
     console.log(`Posição ${c}, Valor ${num[c]}`)}
*/

for (c in num) {
    console.log(`Posição ${c}, Valor ${num[c]}`)
}