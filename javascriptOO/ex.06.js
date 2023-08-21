/* Crie um programa que contenha os seguintes tipos de funções:

Uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
Uma função tradicional com parâmetros e um retorno de valor;
Uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. */

// função tradicional com a palavra reservada "Function" e sem nenhum parâmetro
function mensagem() {
    console.log("CaraMaum que morde a onda vela.");
};

// Função tradicional com parâmetros e retorno de valor
function somacao(a,b) {
    return a + b;
}

// Uma arrow function com parâmetros e que retorne um valor.
const diminuicao = (a,b) => a - b ;

let a = 6;
let b = 6;

// Desempacotando
mensagem() // Já retorna um print
console.log(somacao(a,b)) // precisa do console.log pra desempacotar.
console.log(diminuicao(a,b))