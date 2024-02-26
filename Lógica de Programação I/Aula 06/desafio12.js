/* Desafio 12 - Super Desafio ++

Fazer um simulador de rolagem de dados, que receba como input N
dados e N lados e quantidade de tentativas e mostre as rolagens
individuais e a soma dos valores?

Entradas:
Quantidade de dados: 3
Quantidade de lados: 9
Quantidade de tentativas: 3 */

// Solução:

// Entrada do número de dados informado pelo usuário
const nDados = parseInt(prompt("Informe quantos dados deseja rolar no simulador."));

// Entrada do número de lados dos dados informado pelo usuário
const nLados = parseInt(prompt("Informe quantos lados deseja que os dados tenham."));

// Entrada do número de tentativas de rolagem dos dados
const tentativas = parseInt(prompt("Informe quantos vezes deseja rolar os dados."));

// Função de rolar o dado (gera um número inteiro randômico de acordo com o intervalo)
function rolarDado(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Loop para rolar os dados quantas vezes for solicitado com um loop interno que obtém em cada tentativa o resultado dos nDados com nLados solicitados pelo usuário, além de somá-los.

let tentativa = 1;

while (tentativa <= tentativas) {
    let i = 0;
    let dados = [];
    let somaDados = 0;

    console.log("Tentativa " + tentativa + ":");
    
    while (i < nDados) {
        dados[i] = rolarDado(1, nLados);
        console.log("Resultado do dado " + (i + 1) + ": " + dados[i]);
        somaDados = somaDados + dados[i];
        i++;
    };

    console.log("O somatório dos resultados é:", somaDados);
    tentativa++;
};