const readline = require("readline");

let nome = readline("Digite o seu nome completo: ");
let ano_nascimento;

do {
  ano_nascimento = readline("Digite o seu ano de nascimento:");
  ano_nascimento = parseFloat(ano_nascimento);
} while (isNaN(ano_nascimento) || ano_nascimento < 1922 || ano_nascimento > 2021);

let atual = 2022 - ano_nascimento;

console.log(nome + ", esse ano você completa " + atual + " anos.");