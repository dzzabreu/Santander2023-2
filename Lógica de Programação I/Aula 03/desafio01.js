/* Desafio 01
Crie um mapa para representar uma lista de compras
const listaDeCompras = new Map()
1. Adicione itens à lista de compras com a quantidade desejada
Maçã - 5
Banana - 3
Leite - 4
Pão - 10
2. Verifique se um item específico está na lista de compras
3. Verifique a quantidade de um item específico da lista
4. Modifique a quantidade de um item específico da lista
5. Remova um item específico da lista */

const listaDeCompras = new Map();

//Adicionando
listaDeCompras.set("Maçã", "5");
listaDeCompras.set("Banana", "3");
listaDeCompras.set("Leite", "4");
listaDeCompras.set("Pão", "10");

console.log(listaDeCompras);

// Verificar item

console.log("Tem banana na lista? " + listaDeCompras.has("Banana"));
console.log("Tem uva na lista? " + listaDeCompras.has("Uva"));

// Verificar quantidade

console.log("Quantidade de pães: " + listaDeCompras.get("Pão"));

// Modificar quantidade

listaDeCompras.set("Leite", "11");

console.log(listaDeCompras);

// Remover item

listaDeCompras.delete("Maçã");

console.log(listaDeCompras);

