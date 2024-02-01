/* Desafio 04 - Verificar Elegibilidade para Desconto em Compra

Receba através do prompt:
● idade
● compraMinima.
● isNewClient

Deve retornar true se a pessoa for elegível para um desconto, o que ocorre
quando:
● A idade for maior ou igual a 60 anos.
● E a compra for maior ou igual a R$ 100.
● E se isNewClient for False

Entrada: 
idade: 65 - compraMinima: 100 - isNewClient: false => Saída: true
idade: 45 - compraMinima: 120 - isNewClient: true => Saída: false
idade: 45 - compraMinima: 120 - isNewClient: false => Saída: false
idade: 55 - compraMinima: 50 - isNewClient: false => Saída: false */

let idade = parseInt(prompt("Digite a sua idade:"));

let compraMinima = parseFloat(prompt("Digite o valor da sua compra"));

let isNewClient = prompt("Essa é a sua primeira compra aqui? Digite 'Sim' ou 'Não'.");

let desconto = (idade >= 60) && (compraMinima >= 100) && (isNewClient == "Não" || isNewClient == "não");

console.log("Tenho desconto? " + desconto);