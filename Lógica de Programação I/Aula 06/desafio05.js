/* Desafio 05

Crie um objeto com valores numéricos e utilize um loop for-in para
calcular e imprimir a soma desses valores.

{ valor1: 10, valor2: 20, valor3: 30, valor4: 40 } */

const numeros = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
};

let soma = 0;

for (numero in numeros) {

    soma = soma + numeros[numero];    
};

console.log(soma);