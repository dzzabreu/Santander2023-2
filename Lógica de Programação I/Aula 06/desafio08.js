/* Desafio 08

Crie um programa que pede ao usuário para inserir uma palavra e
conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
e estruturas condicionais if para realizar a contagem.

(Não precisa considerar acentos. Ex.: aviao) */

const palavra = prompt("Digite uma palavra.").toLowerCase().normalize("NFD").split("");

/* .toLowerCase() é um método que deixa as letras minúsculas.
   .normalize("NFD") é um método que retira acentos e caracteres especiais.
   .split("") é um método que transforma os caracteres de uma string em elementos de um array.*/

const vogais = ["a", "e", "i", "o", "u"]

let contador = 0;

for (const letras of palavra) {

    if (vogais.includes(letras)) {
        
        /* método .includes() verifica se alguma letra do array de palavras está inclusa no array vogais */
        contador+=1;
    }
}

console.log(contador);
