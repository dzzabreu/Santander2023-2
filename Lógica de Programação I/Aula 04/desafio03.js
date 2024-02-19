/* Desafio 3

- Determinação do Maior Número

● Escreva um programa que receba três números como entrada e
determina o maior deles. Imprima o número mais alto. */

const num1 = 13;

const num2 = 15;

const num3 = 17;

if (num1 >= num2 && num1 >= num3) {
    console.log("O maior número é:", num1);
} else if (num2 >= num3) {
    console.log("O maior número é:", num2);
} else {
    console.log("O maior número é:", num3);
}