/* Desafio 6

- Verificação de Idade que é permitido dirigir (If e Ternário)

● Crie um programa que verifica a idade de uma pessoa e determina
se ela pode dirigir ou não. Se a pessoa tiver 18 anos ou mais,
ela pode dirigir; caso contrário, não pode. */

/* Resposta com If

const idade = parseInt(prompt("Digite sua idade para saber se você pode dirigir:"));

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.");
}

*/

// Resposta com Ternário

const idade = parseInt(prompt("Digite sua idade para saber se você pode dirigir:"));

const podeDigirir = idade >= 18 ? console.log("Você pode dirigir.") : console.log("Você não pode dirigir.");