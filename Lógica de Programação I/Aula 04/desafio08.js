/* Desafio 8

- Conversão de Notas em Conceitos

● Faça um programa que peça ao usuário para digitar uma letra e
verifique se é uma vogal ou uma consoante utilizando o comando
switch case. Se o usuário digitar uma vogal (a, e, i, o, u), o
programa deve exibir a mensagem "É uma vogal". Se o usuário
digitar uma consoante, o programa deve exibir a mensagem "É uma
consoante". */

const letra = prompt("Digite uma letra para saber se é consoante ou vogal:").toLowerCase(); // recebe letra e padroniza em minúscula

console.log(letra);

switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":

        console.log("É uma vogal.");
        break;

    default:

        console.log("É uma consoante.");
        break;
}