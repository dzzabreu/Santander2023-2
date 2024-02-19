/* Desafio 5

- Verificação de Ano Bissexto

● Desenvolva um programa que receba um ano como entrada e verifica
se ele é bissexto ou não. Um ano bissexto é aquele que é
divisível por 4, exceto por anos que são divisíveis por 100, a
menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou
"Não é um ano bissexto" com base na entrada. (2000, 1996) */

const ano = parseInt(prompt("Digite um ano para descobrir se ele é bissexto:"));

if (ano % 4 === 0 && ano % 100 !== 0) {
    console.log(ano, "é ano bissexto.");
} else if (ano % 400 === 0) {
    console.log(ano, "é ano bissexto.");
} else {
    console.log(ano, "não é um ano bissexto.");
}