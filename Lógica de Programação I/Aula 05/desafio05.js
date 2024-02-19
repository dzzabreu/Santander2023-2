/* Desafio 5

- Jogo de Adivinhação com Limite

● Modifique o jogo de adivinhação do Desafio 4 para limitar o
número de tentativas. Se o usuário não adivinhar o número dentro
de um determinado número de tentativas (por exemplo, 5
tentativas), o programa deve encerrar e informar o número
correto. */

//Função para gerar um número inteiro randômico de acordo com um intervalo

function numAleatorioNoIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
//Programa

const numAlvo = numAleatorioNoIntervalo(1, 100);
const tentativas = 5; // limite de tentativas

let contador = 0; // contador de tentativas
let chute;
  
do {
    chute = parseInt(prompt("Adivinhe o número escolhido do intervalo de 1 a 100."));

    if (chute < numAlvo && contador < tentativas - 1) { // Dica + limitador de nº dicas

        console.log("Dica: Tente um número maior.");

    } else if (chute > numAlvo && contador < tentativas - 1){ // Dica + limitador de nº dicas

        console.log("Dica: Tente um número menor.");

    };

    contador++;

} while (chute !== numAlvo && contador < tentativas); // limitador de tentativas

console.log(chute === numAlvo && contador < tentativas ? "Você acertou! A resposta é:" : "Suas chances acabaram. :( A resposta é:", numAlvo);