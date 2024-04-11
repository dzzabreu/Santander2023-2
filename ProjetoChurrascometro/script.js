// Função para salvar os dados no armazenamento local
function salvarDadosLocalStorage(chavesValores) {
    // Itera sobre cada par chave-valor fornecido
    chavesValores.forEach(parChaveValor => {
        const [chave, valor] = parChaveValor;
        // Salva a chave e o valor no armazenamento local
        localStorage.setItem(chave, valor);
    });
}

// Salvar dados do Passo 01
function salvarPasso01() {
    // Array contendo pares chave-valor dos dados do Passo 01
    const dadosPasso01 = [
        ['homens', document.getElementById('homens').value],
        ['mulheres', document.getElementById('mulheres').value],
        ['criancas', document.getElementById('criancas').value],
        ['adultosBebem', document.getElementById('adultosBebem').value]
    ];
    // Salva os dados do Passo 01 no armazenamento local
    salvarDadosLocalStorage(dadosPasso01);
}

// Salvar dados do Passo 02
function salvarPasso02() {
    // Array contendo pares chave-valor dos dados do Passo 02
    const dadosPasso02 = [
        ['nome', document.getElementById('nome').value],
        ['email', document.getElementById('email').value],
        ['cep', document.getElementById('cep').value]
    ];
    // Salva os dados do Passo 02 no armazenamento local
    salvarDadosLocalStorage(dadosPasso02);
}

/*

function salvarPasso01() {
    // Obter os valores dos campos
    const homens = document.getElementById('homens').value;
    const mulheres = document.getElementById('mulheres').value;
    const criancas = document.getElementById('criancas').value;
    const adultosBebem = document.getElementById('adultosBebem').value;

    // Salvar os valores no armazenamento local
    localStorage.setItem('homens', homens);
    localStorage.setItem('mulheres', mulheres);
    localStorage.setItem('criancas', criancas);
    localStorage.setItem('adultosBebem', adultosBebem);
};

function salvarPasso02() {
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;

    // Salvar os valores no armazenamento local
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('cep', cep);
};

*/

// Função para carregar os dados do armazenamento local
function carregarDadosPasso01() {
    // Verificar se os dados estão armazenados localmente
    if (localStorage.getItem('nome')) {
        // Carregar os valores dos campos
        document.getElementById('homens').value = localStorage.getItem('homens');
        document.getElementById('mulheres').value = localStorage.getItem('mulheres');
        document.getElementById('criancas').value = localStorage.getItem('criancas');
        document.getElementById('adultosBebem').value = localStorage.getItem('adultosBebem');
    }
};

// Chamar a função para carregar os dados quando a página for carregada
window.addEventListener('DOMContentLoaded', carregarDadosPasso01);


// Funções para "mudança de página" dentro do mesmo arquivo HTML

// Função para mostrar uma seção e salvar a seção ativa no localStorage
function mostrarDiv(divId) {
    // Oculta todas as seções
    document.querySelectorAll('.secao').forEach(secao => {
        secao.classList.add('ocultaSecao');
    });

    // Mostra a seção desejada
    const div = document.getElementById(divId);
    div.classList.remove('ocultaSecao');

    // Salva a seção ativa no localStorage
    salvarSecaoAtiva(divId);
}

// Função para salvar a seção ativa no localStorage
function salvarSecaoAtiva(divId) {
    localStorage.setItem('secaoAtiva', divId);
}

// Função para carregar a seção ativa do localStorage quando a página é carregada
window.addEventListener('DOMContentLoaded', () => {
    const secaoAtiva = localStorage.getItem('secaoAtiva');
    if (secaoAtiva) {
        mostrarDiv(secaoAtiva);
    } else {
        // Se não houver uma seção ativa armazenada, mostrar a primeira seção por padrão
        mostrarDiv('passo-1');
    }
});


// Função para resetar as entradas do Passo 01
function resetarDadosPasso01() {

    if (document.getElementById('nome')) {
        // reseta inputs
        document.getElementById('homens').value = '';
        document.getElementById('mulheres').value = '';
        document.getElementById('criancas').value = '';
        document.getElementById('adultosBebem').value = '';
        
        // reseta dados no armazenamento local
        localStorage.removeItem('homens');
        localStorage.removeItem('mulheres');
        localStorage.removeItem('criancas');
        localStorage.removeItem('adultosBebem');
    }

};


// Configura botão "Calcular" no Passo 1
document.querySelector('#passo-1 button').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado

    salvarPasso01();

    mostrarDiv("passo-2");

    calcularItensChurrasco();
});


// Configura botão "Cadastrar" para submissão do formulário do Passo 02
document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado

    // Verificar se a checkbox está marcada
    const autorizacaoCheckbox = document.getElementById('autorizacao');
    if (!autorizacaoCheckbox.checked) {
        // Se a checkbox não estiver marcada, exibir uma mensagem e retornar false para impedir o envio do formulário
        alert("Você precisa concordar em receber comunicações e ofertas personalizadas para enviar o formulário!");
        return false;
    }

    // salvar os dados na localStorage
    salvarPasso02();

    // resetar o formulário após clique de submissão
    document.getElementById('formCadastro').reset();

    // Exibir popup de confirmação
    alert("Formulário enviado com sucesso!");

    // esconderDiv("passo-2");
    mostrarDiv("passo-3");
    return true;
});


// Configura botão "Voltar" no Passo 2
document.querySelector('#voltarPasso1').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado

    mostrarDiv("passo-1");
});


// Configura botão "Pular para o resultado" no Passo 2
document.querySelector('#pularPasso3').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado

    mostrarDiv("passo-3");
});


// Configura botão "Novo Cálculo" no Passo 3
document.querySelector('#novoCalculo').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário de ser enviado

    mostrarDiv("passo-1");

    resetarDadosPasso01();
});


// Função para calcular os itens do churrasco e atualizar a tabela de resultados
function calcularItensChurrasco() {
    // Obter os valores dos campos do Passo 1
    const homens = parseInt(localStorage.getItem('homens')) || 0;
    const mulheres = parseInt(localStorage.getItem('mulheres')) || 0;
    const criancas = parseInt(localStorage.getItem('criancas')) || 0;
    const adultosBebem = parseInt(localStorage.getItem('adultosBebem')) || 0;
    const totalConvidados = homens + mulheres + criancas;

    // Atualizar as informações sobre os convidados
    document.getElementById('totalConvidados').getElementsByTagName('span')[0].textContent = totalConvidados;
    document.getElementById('quantidadeHomens').getElementsByTagName('span')[0].textContent = homens;
    document.getElementById('quantidadeMulheres').getElementsByTagName('span')[0].textContent = mulheres;
    document.getElementById('quantidadeCriancas').getElementsByTagName('span')[0].textContent = criancas;

    // Calcular a quantidade de carne
    const carneHomens = homens * 0.4;
    const carneMulheres = mulheres * 0.32;
    const carneCriancas = criancas * 0.2;
    const totalCarne = carneHomens + carneMulheres + carneCriancas;

    // Calcular a quantidade de pão de alho
    const paoDeAlho = (homens + mulheres) * 2 + criancas;

    // Calcular a quantidade de carvão
    const carvao = (homens + mulheres + criancas) * 1;

    // Calcular a quantidade de sal
    const sal = (homens + mulheres + criancas) * 0.04;

    // Calcular a quantidade de gelo
    const gelo = Math.ceil((homens + mulheres + criancas) / 10) * 5;

    // Calcular a quantidade de refrigerante
    const refrigerante = Math.ceil((homens + mulheres + criancas) / 5);

    // Calcular a quantidade de água
    const agua = Math.ceil((homens + mulheres + criancas) / 5);

    // Calcular a quantidade de cerveja
    const cerveja = adultosBebem * 3;

    // Atualizar a tabela de resultados com os valores calculados
    document.getElementById('totalCarne').textContent = totalCarne.toFixed(2) + ' KG';
    document.getElementById('paoDeAlho').textContent = paoDeAlho;
    document.getElementById('carvao').textContent = carvao + ' KG';
    document.getElementById('sal').textContent = sal.toFixed(2) + ' KG';
    document.getElementById('gelo').textContent = gelo + ' KG';
    document.getElementById('refrigerante').textContent = refrigerante + ' garrafas';
    document.getElementById('agua').textContent = agua + ' garrafas';
    document.getElementById('cerveja').textContent = cerveja + ' garrafas';
};

// Chamar a função para calcular os itens do churrasco quando a página for carregada
window.addEventListener('DOMContentLoaded', calcularItensChurrasco);


// transição de tema escuro para claro
document.getElementById('toggleTheme').addEventListener('click', function () {
    // Verificar se o tema atual é escuro
    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Salvar a preferência de tema no localStorage
    salvarPreferenciaTema(isDarkTheme ? 'light' : 'dark');
    
    // Se o tema for escuro, remover a classe dark-theme e adicionar a classe light-theme
    // Caso contrário, fazer o oposto
    if (isDarkTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme'); 
        this.textContent = 'Tema Escuro'; // Atualizar o texto do botão
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = 'Tema Claro'; // Atualizar o texto do botão
    }
});

// Função para salvar a preferência de tema no localStorage
function salvarPreferenciaTema(tema) {
    localStorage.setItem('preferenciaTema', tema);
}

// Função para carregar a preferência de tema do localStorage quando a página é carregada
function carregarPreferenciaTema() {
    const preferenciaTema = localStorage.getItem('preferenciaTema');
    if (preferenciaTema === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('toggleTheme').textContent = 'Tema Claro';
    }
}

// Chamar a função para carregar a preferência de tema quando a página for carregada
window.addEventListener('DOMContentLoaded', carregarPreferenciaTema);

