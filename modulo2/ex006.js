/* Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
1. Soma
2. Subtração
3. Multiplicação
4. Divisão

Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. */

function calculadora (n1,n2,operação) {
	switch(operação) {
	case 1: //soma
		return n1 + n2;
	case 2: //subtração
		return n1 - n2;
	case 3: // multiplicação
		return n1 * n2;
	case 4: //divisão
		return n1 / n2;
	default: // Operação inválida
		return 0;

	}
}

console.log('peru teu cu.');