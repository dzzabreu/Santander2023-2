/* Desafio 04

Escolha um número e imprima sua tabuada de 1 a 10 utilizando um loop
for.
Saída: N X 1 = 10 */

const numero = parseInt(prompt("Digite um número para visualizar sua tabuada de 1 a 10."));

let tabuada = "";

for (i = 1; i < 11; i++) {
    
    tabuada = numero + " x " + i;
    console.log(tabuada, "=", numero * i);
};

