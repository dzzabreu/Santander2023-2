/* Desafio 06

Faça um mecanismo de busca dentro de um array.
[1,2,3,4,5,6,7,8,9,10]

Achei o número 7 */

const entradaNumero = parseInt(prompt("Digite um número para buscar."));

const numeros = [1,2,3,4,5,6,7,8,9,10];

let buscador;

for (numero in numeros) {
    
    if (entradaNumero === numeros[numero])
    buscador = true;
}

console.log(buscador ? "Achei o número " + entradaNumero : "Não há esse número no array.");