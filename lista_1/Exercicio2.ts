import readlinesync = require("readline-sync");

const listaNumeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    let numero = readlinesync.questionInt('Digite ${i + 1} inteiro:');
    listaNumeros.add(numero);
}
console.log("\nLista dados Set:");
listaNumeros.forEach(numero => console.log(numero));

