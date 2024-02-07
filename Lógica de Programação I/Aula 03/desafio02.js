/* Desafio 02
Crie uma agenda de contatos que armazene vários contatos em um array,
modelando o "contato" como um objeto: (Nome, telefone, email) (Não utilizar
Map) */

const agenda = {
    Contato01: {
        Nome: "André",
        Telefone: "82 99999-9999",
        Email: "andre@andre.com.br",
    },
    Contato02: {
        Nome: "Bárbara",
        Telefone: "82 98899-8899",
        Email: "barbara@barbara.com.br",
    },
    Contato03: {
        Nome: "Cláudio",
        Telefone: "82 99977-9977",
        Email: "claudio@claudio.com.br",
    }
}

// Array detalhando informações de todos os contatos
console.log(Object.values(agenda));

// Array detalhando informações do contato 01
console.log(Object.values(agenda.Contato01));