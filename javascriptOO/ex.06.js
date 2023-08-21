/* Crie um programa que contenha os seguintes tipos de funções:

Uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
Uma função tradicional com parâmetros e um retorno de valor;
Uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora. */

function mensagem() {
    console.log("CaraMaum que morde a onda vela.");
};

function somacao(a,b) {
    return a + b;
}

const diminuicao = (a,b) => a - b ;

let a = 6;
let b = 6;

mensagem()
console.log(somacao(a,b))
console.log(diminuicao(a,b))