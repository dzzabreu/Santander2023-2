/* Desafio 10 - Super Desafio

Fazer um simulador de rolagem de dados, que receba como input N
dados de 6 lados e mostre as rolagens individuais e a soma dos
valores

Entradas:

Quantidade de dados: 2 */

// Solução:

// Entrada do número de dados informado pelo usuário
const N = parseInt(prompt("Informe quantos dados deseja rolar no simulador."));

// Função de rolar o dado (gera um número inteiro randômico de acordo com o intervalo)
function rolarDado(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Loop para rolar e obter o resultado dos N dados solicitados pelo usuário, além de somá-los

let i = 0;
let dados = [];
let somaDados = 0;

while (i < N) {
    dados[i] = rolarDado(1, 6);
    console.log("Resultado do dado " + (i + 1) + ": " + dados[i]);
    somaDados = somaDados + dados[i];
    i++;
       
};

console.log("O somatório dos resultados é:", somaDados);

