/* Desafio 01

Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
soma, subtração, multiplicação e divisão desses números. Armazene os
resultados em um array, sendo o
Index: 
0 = Soma
1 = subtração
2 = multiplicação
3 = divisão */

const numero1 = 6;

const numero2 = 4;

const soma = numero1 + numero2;

const subtracao = numero1 - numero2;

const multiplicacao = numero1 * numero2;

const divisao = numero1 / numero2;

const resposta = [soma, subtracao, multiplicacao, divisao];

console.log(resposta);