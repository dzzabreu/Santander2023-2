/* Desafio 4

- Verificação de Triângulo

● Crie um programa que recebe três comprimentos de lados de um
triângulo como entrada e determina se eles formam um triângulo
equilátero (Todos os lados são iguais), isósceles (Dois lados
são iguais) ou escaleno (Se nada é igual). Imprima a
classificação do triângulo. */

const base = parseInt(prompt("Digite o comprimento da base do triângulo"));

const lado1 = parseInt(prompt("Digite o comprimento da aresta direita do triângulo"));

const lado2 = parseInt(prompt("Digite o comprimento da aresta esquerda do triângulo"));

if (base === lado1 && base === lado2) {
    console.log("Este é um triângulo equilátero.");
} else if (base === lado1 || base === lado2 || lado1 === lado2) {
    console.log("Este é um triângulo isósceles.");
} else {
    console.log("Este é um triângulo escaleno.");
}