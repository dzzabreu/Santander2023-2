/* Desafio 07

Ache a lógica: 1 1 2 3 5 8 13

Agora, sua tarefa é criar um programa que recebe um número inteiro N
como entrada e retorna os primeiros N termos da sequência.

Exemplo: 
Entrada: 6 Saída: [1, 1, 2, 3, 5, 8]
Entrada: 14 Saída: [1, 1, 2, 3, 5, 8, 13, …, 377] */


const N = parseInt(prompt("Digite o número de elementos da sequência."));

let sequencia = [1, 1]

for (let i = 2; i < N; i++){
    
    sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
}

console.log(sequencia);

