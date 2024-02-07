/* Desafio 06
Crie um objeto chamado aluno com as propriedades nome, nota1, e nota2.
Calcule a média das notas.
Verifique se a média é maior ou igual a 7 usando operadores de comparação. */

const aluno = {
    nome: "Amanda",
    nota01: 10,
    nota02: 5
}

const media = (aluno.nota01 + aluno.nota02) / 2;

console.log(media);

console.log(media >= 7);