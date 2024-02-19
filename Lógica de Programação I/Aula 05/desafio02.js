/* Desafio 2

- Números Primos

● Crie um programa que peça ao usuário para inserir um número e
use um loop while para verificar se o número é primo ou não. Um
número primo é aquele que só é divisível por 1 e por ele mesmo.
Imprima se o número é primo ou não. */

const numero = parseInt(prompt("Digite um número."));

let ehPrimo = true;

let divisor = 2;

while (divisor < numero && ehPrimo) {
    
    if (numero % divisor === 0) {

        ehPrimo = false;
    }

    divisor++;
};

console.log(numero > 1 && ehPrimo ? numero + " é um número primo." : numero + " não é um número primo.");

    

