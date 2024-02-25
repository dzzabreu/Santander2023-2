/* Projeto Final do Módulo Lógica de Programação

Proposta de Projeto Escolhida: Projeto 1 (ToDo List)

- O que?

Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de
lista de tarefas (ToDo List).

- Requisitos

Dentre as funcionalidades, espera-se que seja possível:

- Adicionar uma tarefa (Create)
- Listar todas as tarefas salvas (Read)
- Editar uma tarefa salva (Update)
- Remover uma tarefa salva (Delete)
- Obter uma tarefa, através de um parâmetro (id)
- Observações

Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um
array para armazenar a lista das tarefas cadastradas. */

/* Considerações pessoais sobre o projeto:

Foi muito desafiador para mim, mas fiquei bastante orgulhosa no final. Utilizei const e let, arrays e seus métodos, objetos, condicionais If e Ternário, laços de repetição For, entre outras coisas. Aproveitei e uni com os conhecimentos de HTML e CSS do módulo anterior para criar uma Lista de Tarefas bonitinha.

Apliquei também alguns conceitos que vi pela primeira vez em pesquisas para desenvolver esse projeto(o "toggle", por exemplo). Quebrei muito a cabeça, no início tentei tirar leite de pedra e fazer completamente sozinha, mas não teve como e pedi a ajuda de Deus, do GPT, da internet e da documentação (assim como no kahoot kkk).

Aprendi bastante, mas é claro que ainda estou longe de dominar e preciso continuar estudando e treinando.

Agradeço ao professor Bruno pelas aulas e outras orientações (guardei no coração aquela de não se preocupar em fazer um código feio no início, me senti mais leve kkk)

Foi um prazer chegar à conclusão desse projeto. :D 

Segue o código do projeto abaixo: */

// Armazena elementos HTML nas variáveis

const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

// Sessão: CREATE

// Função para criar um novo elemento de lista (<li>)
function criaLi() {
  const li = document.createElement("li");
  return li;
}

// Função para criar uma nova tarefa
function criaTarefa(textoInput, concluida = false) {
  const li = criaLi();
  const span = document.createElement("span");
  span.innerText = textoInput; // Adicionando texto dentro do span
  li.appendChild(span); // Adicionando o span dentro do li
  tarefas.appendChild(li); // Adicionando as li dentro de tarefas
  limpaInput(); // função para limpar o input após adicionar tarefa
  criarBotaoConcluir(li); // Adicionando botão de concluir ao item de tarefa
  criaBotaoApagar(li); // Adicionando botão de apagar ao item de tarefa

  // Aplica estilo de riscado se a tarefa estiver concluída
  if (concluida) {
    li.classList.add("concluida");
    span.style.textDecoration = "line-through";
    span.style.fontStyle = "italic";
  }

  salvarTarefas(); // Salvar a tarefa no Local Storage
}

// Associa o clique do botão ao evento de adicionar uma tarefa
btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

// Associa a tecla "Enter" pressionada ao evento de adicionar uma tarefa
inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

// SESSÃO: READ

// Função para salvar as tarefas no Local Storage (salva o texto e o status da tarefa em um array de objetos)
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.querySelector("span").innerText; // Obtendo texto dentro do span
    listaDeTarefas.push({                                     // e adicionar ao array de objetos
      texto: tarefaTexto,
      concluida: tarefa.classList.contains("concluida"),
    });
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array de tarefas em uma string JSON
  localStorage.setItem("tarefas", tarefasJSON);  // Salva a string JSON no armazenamento local com a chave 'tarefas'
}

// SESSÃO: UPDATE

// Função para adicionar as tarefas salvas de volta à lista quando a página é recarregada
function adicionaTarefasSalvas() {
  const tarefasSalvas = localStorage.getItem("tarefas");
  if (tarefasSalvas) {
    const listaDeTarefas = JSON.parse(tarefasSalvas);
    listaDeTarefas.forEach(tarefa => {
      criaTarefa(tarefa.texto, tarefa.concluida); // Passa o status de concluída diretamente para a função criaTarefa
    });
  }
}

// Chama a função para adicionar as tarefas salvas ao carregar a página
adicionaTarefasSalvas();

// Função para criar e adicionar um botão "Concluir' a cada tarefa
function criarBotaoConcluir(li) {
  const botaoConcluir = document.createElement("button");
  botaoConcluir.innerText = "Concluir";
  botaoConcluir.setAttribute("class", "concluir");
  botaoConcluir.setAttribute("title", "Concluir esta tarefa");
  li.appendChild(botaoConcluir);
}

// SESSÃO: DELETE

// Função para criar e adicionar um botão "Apagar" a cada tarefa
function criaBotaoApagar(li) {
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

// Associa o clique nos respectivos botões a um comando de apagar a tarefa ou modificar o status da tarefa para concluído
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }

  if (el.classList.contains("concluir")) {
    e.preventDefault();
    const parentLi = el.parentElement;
    parentLi.classList.toggle("concluida");

    const spanTarefa = parentLi.querySelector("span");
    spanTarefa.style.textDecoration = parentLi.classList.contains("concluida")
      ? "line-through"
      : "none";
    spanTarefa.style.fontStyle = parentLi.classList.contains("concluida")
      ? "italic"
      : "normal";

    salvarTarefas();
  }
});
