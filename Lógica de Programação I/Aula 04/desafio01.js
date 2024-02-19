/* Desafio 1
- Verificação de Números Pares e Ímpares (If e Ternário)

● Escreva um programa que recebe um número como entrada e verifica
se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
ímpar. */

const numero = 7;

/* Resposta com If/Else

if (numero % 2 == 0) {
     console.log("É par");
} else {
     console.log("É ímpar");
} */

/* Resposta com Condicional Ternário */

const ehPar = numero % 2 == 0 ? "É par" : "É impar";

console.log(ehPar);