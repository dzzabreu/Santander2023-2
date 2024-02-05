/* Desafio 08

Dado um array idades, encontre o índice do último elemento que sejam maior ou
igual a 18.
const idades = [15, 22, 17, 20, 30, 12]; */

const idades = [15, 22, 17, 20, 30, 12];

idades.reverse(); // iverter o array para que o último elemento pedido passe a ser o primeiro

const ultimoElemento = idades.find(o => o >= 18); // encontrar o primeiro elemento que atende ao critério

console.log(ultimoElemento); // mostrar o elemento solicitado, apenas para verificar

idades.reverse(); // voltar ao array na ordem original

console.log(idades.lastIndexOf(ultimoElemento)); // buscar o índice do elemento encontrado no array original