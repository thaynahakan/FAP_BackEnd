/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */

const readline = require('readline-sync');

let n1 = readline.questionFloat("Digite o seu primeiro numero: ");
let n2 = readline.questionFloat("Digite o seu segundo numero: ");

let  operacao = readline.questionInt("Digite a operacao: ")

function calculadora (n1,n2,operacao) {
	switch(operacao) {
	case 1: //soma
		return n1 + n2;
	case 2: //subtracao
		return n1 - n2;
	case 3: // multiplicação
		return n1 * n2;
	case 4: //divisão
		return n1 / n2;
	default: // Operação inválida
		return 0;

	}
}

console.log(calculadora(n1, n2, operacao));