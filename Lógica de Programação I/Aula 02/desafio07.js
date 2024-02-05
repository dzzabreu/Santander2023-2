/* Desafio 07

Dado um array idades, encontre o índice do primeiro elemento que seja maior ou
igual a 18.
const idades = [15, 22, 17, 20, 30, 12]; */

const idades = [15, 22, 17, 20, 30, 12];

const primeiroElemento = idades.find(o => o >= 18);

console.log(primeiroElemento);

console.log(idades.indexOf(primeiroElemento));