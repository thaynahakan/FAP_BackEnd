/* Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.
*/

let nome = prompt("Digite o seu nome completo: ");
let ano_nascimento;

do {
  ano_nascimento = prompt("Digite o seu ano de nascimento:");
  ano_nascimento = parseFloat(ano_nascimento);
} while (isNaN(ano_nascimento) || ano_nascimento < 1922 || ano_nascimento > 2021);

let atual = 2022 - ano_nascimento;

console.log(nome + ", esse ano você completa " + atual + " anos.");