/* Desafio 03
Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
determinante dessa matriz usando a fórmula matemática de determinante. */

const matriz = [
    [5, 2],
    [3, 4]
];

const determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

console.log(determinante);