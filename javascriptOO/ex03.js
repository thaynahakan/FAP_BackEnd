// A atividade que faremos é a da “calculadora de média”. Para isso, você deve criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console. Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. Por fim, exiba esse valor no console usando a função console.log().

// Solicita ao usuário para inserir três notas
const readline = require('readline-sync'); 
const notas = [];

for (let i = 0; i < 3; i++) {
    const nota = parseFloat(readline.question(`Insira a nota ${i + 1} (entre 0 e 10):`));
    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida. Por favor, insira uma nota entre 0 e 10.");
        break;
    }
    notas.push(nota);
}

// Calcula a média das notas e exibe o resultado
if (notas.length === 3) {
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    console.log("A média das notas é:", media);
}