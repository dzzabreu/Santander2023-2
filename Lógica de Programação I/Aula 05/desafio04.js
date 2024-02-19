/* Desafio 4

- Adivinhe o Número

● Crie um programa que gere um número aleatório entre 1 e 100. Em
seguida, peça ao usuário para adivinhar o número. Use um loop
while para continuar pedindo ao usuário que adivinhe até que ele
acerte o número. Forneça dicas informando se o número é maior ou
menor. */

//Função para gerar um número inteiro randômico de acordo com um intervalo

function numAleatorioNoIntervalo(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
//Programa

const numAlvo = numAleatorioNoIntervalo(1, 100);
let chute;
  
do {
    chute = parseInt(prompt("Adivinhe o número escolhido do intervalo de 1 a 100."));

    if (chute < numAlvo) {

        console.log("Dica: Tente um número maior.");

    } else {

        console.log("Dica: Tente um número menor.");

    };

} while (chute !== numAlvo);
  
console.log('Você acertou!');