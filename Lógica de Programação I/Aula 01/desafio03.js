/* Desafio 03 - Verificar Compatibilidade de Plataformas

Receba através do prompt dois argumentos:
● navegador
● sistemaOperacional

Deve retornar true se o navegador for "Chrome" ou "Firefox" e o sistema
operacional for "Windows" ou "Mac".

Entrada: 
navegador: Chrome - sistemaOperacional: Windows => Saída: true
navegador: Chrome - sistemaOperacional: Mac => Saída: true
navegador: Firefox - sistemaOperacional: Windows => Saída: true
navegador: Firefox - sistemaOperacional: Mac => Saída: true
navegador: Firefox - sistemaOperacional: Sony => Saída: false
navegador: Safari - sistemaOperacional: Mac => Saída: false */

let navegador = prompt("Digite o navegador que você usa:");

let sistemaOperacional = prompt("Digite o sistema operacional que você usa:");

let resposta = (navegador == "Chrome" || navegador == "Firefox") && (sistemaOperacional == "Windows" || sistemaOperacional == "Mac");

console.log(resposta);