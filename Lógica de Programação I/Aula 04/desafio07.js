/* Desafio 7

- Verificação de Números Pares e Ímpares

● Escreva um programa que recebe um número como entrada e verifica
se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
ímpar. (Usar switch Case) */

const numero = parseInt(prompt("Digite um número:"));

console.log(numero); // apenas para visualização do valor recebido

switch (true) {

    case ((numero % 2) === 0):
        console.log("É par.");
        break;            

    case ((numero % 2) > 0):
        console.log("É ímpar.");
        break;

    default:
        console.log("Digite um número válido.");
        break;

}
