/* Instruções JavaScript 
Com os conceitos aprendidos, crie um programa de calculadora que
receba dois valores, que devem ser salvos em variáveis;
o usuário deve colocar qual operador ele vai utilizar por meio dos simbolos aritméticos;
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado;
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. */
 
const prompt = require(`prompt-sync`)();

let n1 = parseInt(prompt("Digite o primeiro valor: "));
let n2 = parseInt(prompt("Digite o segundo valor: "));

let operador = prompt("Digite o operador desejado (*, +, -,/): ");

let sobra;
let resultado;

switch (operador){
  case "+":
    resultado = n1 + n2;
    break;
  case "-":
    resultado = n1 - n2;
    break;
  case "*":
    resultado = n1 * n2;
    break;
  case "/":
    resultado = n1 / n2;
    sobra = n1 % n2;
    break;
  default:
    console.log("Operador inválido");
}

if (operador === "/" && sobra !== undefined) {
  console.log(`Resultado: ${resultado.toFixed(2)}, Sobra: ${sobra} `);
} else if (resultado !== undefined) {
  console.log(`Resultado: ${resultado.toFixed(2)}`)
}