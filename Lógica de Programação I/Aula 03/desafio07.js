/* Desafio 07
Crie um mapa chamado frutas onde as chaves são nomes de frutas e os valores
são seus preços.
Verifique se a maçã é mais cara que a banana
Verifique se a pêra não custa o mesmo que a uva. */

const frutas = new Map();  // cria o mapa

frutas.set("Maçã", 2.0);  // adiciona os pares de chave e valor
frutas.set("Pêra", 1.0);
frutas.set("Uva", 5.0);
frutas.set("Laranja", 3.0);
frutas.set("Banana", 1.5);

console.log(frutas.get("Maçã") > frutas.get("Banana"));  // comparações solicitadas

console.log(frutas.get("Pêra") == frutas.get("Uva"));

console.log("A maçã é mais cara que a banana?", frutas.get("Maçã") > frutas.get("Banana"));

