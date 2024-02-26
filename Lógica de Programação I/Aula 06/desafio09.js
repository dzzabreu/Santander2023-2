/* Desafio 09

Criar um algoritmo de ordenação de arrays;

novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]

09.01 - Método que faz isso (Achar o método que ordena os arrays) */

/* Lembro que já tinha feito um desafio parecido só com os métodos de manipulação de arrays no início do módulo e, de forma bem simples, solucionei o desafio atual dessa forma:

const novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

novoArray.sort()

console.log(novoArray);

Porém fiquei em dúvida se era realmente só isso que estava sendo cobrado nesse desafio. Por via das dúvidas, modifiquei o código e adicionei uma função para utilizar esse novo conhecimento que foi ensinado nas últimas aulas. Segue abaixo: */

function ordenarArray(array) {
    return array.slice().sort((a, b) => a - b);
};

// acrescentei o método .slice() sem parâmetro para manipular uma cópia do array e não perder o array original

const novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

console.log(ordenarArray(novoArray));
