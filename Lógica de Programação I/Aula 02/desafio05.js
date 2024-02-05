/* Desafio 05

Dado um array numeros, crie um novo array que contenha apenas os números pares
do array original.
const numeros = [3, 8, 15, 21, 30, 37, 42]; */

const numeros = [3, 8, 15, 21, 30, 37, 42];

numeros.shift();

numeros.splice(1, 2);

numeros.splice(2, 1);

const numerosPares = numeros;

console.log(numerosPares);

