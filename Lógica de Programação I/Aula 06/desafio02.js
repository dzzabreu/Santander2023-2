/* Desafio 02

Crie um objeto representando uma pessoa com nome, idade e cidade.
Utilize um loop for-in para imprimir no console todas as
propriedades e os valores do objeto. */

const pessoa = {
    nome: "Andrezza",
    idade: 27,
    cidade: "Maceió"
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
};