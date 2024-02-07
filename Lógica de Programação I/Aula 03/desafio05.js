/* Desafio 05
Crie um objeto chamado pessoa com as propriedades nome, idade, e cidade.
Verifique se a pessoa tem 18 anos ou mais (Exibir apenas true ou false)
Verifique se a pessoa não é de uma cidade chamada "São Paulo" (True ou False) */

const pessoa = {
    Nome: "Andrezza",
    Idade: 27,
    Cidade: "Maceió"
}

console.log(pessoa.Idade >= 18);

console.log(pessoa.Cidade == "São Paulo");

