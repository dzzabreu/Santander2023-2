/* Desafio 01

Utilizando um loop for, calcule a soma dos números de 1 a 10 e
imprima o resultado.

(1+2=3+3=6+4=10+5=15) */

let soma = 0;
let equacao = "";

for (i = 1; i <= 10; i++) {
    soma = soma + i;
    equacao = equacao + "+" + i;
}

console.log(equacao, "=", soma);