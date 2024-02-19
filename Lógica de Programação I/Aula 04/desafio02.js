/* Desafio 2

- Verificação de Nota

● Crie um programa que recebe uma nota como entrada e atribui uma
mensagem com base na nota. Use as seguintes regras:

- Se a nota for maior ou igual a 90, imprima "Aprovado com
mérito".

- Se a nota for maior ou igual a 70 e menor que 90, imprima
"Aprovado".

- Se a nota for menor que 70, imprima "Reprovado". */

const nota = 71;

if (nota >= 90) {
    console.log("Aprovado com mérito");
} else if (nota >= 70 && nota < 90) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}