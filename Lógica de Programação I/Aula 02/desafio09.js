/* Desafio 09

Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
mais baixa e a nota mais alta do conjunto.
const notas = [8, 9, 7, 5, 10, 6]; */

const notas = [8, 9, 7, 5, 10, 6];

/* A função .sort() não ordenou o array de números da forma esperada. O array após ordenação estava resultando em [10, 5, 6, 7, 8, 9] na saída.
Descobri que isso acontece porque a função .sort(), quando utilizada sem parâmetros, utiliza por padrão a tabela UNICODE para comparação e ordenamento (os elementos são ordenados de acordo com a sua conversão para texto e o texto comparado na pontuação UNICODE do texto convertido). 
Por esse motivo, foi necessário utilizar o seguinte parâmetro de comparação dentro da função:
.sort((a, b) => a - b); 

Fonte: https://encurtador.com.br/cmyCO */

const notasOrdenadas = notas.sort((a, b) => a - b);

console.log(notasOrdenadas); // adicionado apenas para verificação

notasOrdenadas.shift();

notasOrdenadas.pop();

console.log(notasOrdenadas); // adicionado apenas para verificação

const media = (notasOrdenadas[0] + notasOrdenadas[1] + notasOrdenadas[2] + notasOrdenadas[3]) / notasOrdenadas.length;

console.log(media);