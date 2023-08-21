/* Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.*/

let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));

let media = (nota1 + nota2 + nota3)/3;


let resultado = (media >= 7)? 'Passou' : 'Reprovou otária';

console.log(`Resultado: ${resultado} ; Nota: ${media}.`);

// Segunda parte : Aluno  escreve duas notas e quer saber quanto precisa tirar na terceira avaliacao.

let av1 = parseFloat(prompt("Digite a primeirinha notinha: "));
let av2 = parseFloat(prompt("Digite a segundinha notinha: "));

let minima = 21 - (av1 + av2); 

let resultados = (minima >= 10)? 'TA COMPLICADO AMORE...': 'Da PrA pAsSaR eIn ;D'
console.log(`Voce precisa, demonio, de: ${minima} pontos! ${resultados}`)