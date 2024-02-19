/* Desafio 3

- Soma de Números Pares

● Desenvolva um programa que peça ao usuário para inserir números
inteiros. Use um loop while para calcular a soma dos números
pares inseridos pelo usuário. Pare a entrada quando o usuário
inserir 0 e exiba a soma total. */

let somaPares = 0;
let numero;

do {
    numero = parseInt(prompt("Digite apenas números inteiros. Obs.: Ao final, digite 0 para obter a soma dos números pares digitados."));

    if (numero % 2 === 0) {
         somaPares = somaPares + numero;
         
     } else {
         somaPares = somaPares + 0;
     }

} while (numero !== 0);

console.log("Soma dos pares é:", somaPares);