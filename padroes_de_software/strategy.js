/* Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são:

implementar uma interface Strategy com o método abstrato execute() . Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma , Subtração e Multiplicação de números inteiros;
o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar;
no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação. */


const prompt = require("prompt-sync")();

class OperationStrategy {
    execute(num1, num2) {} // // Método abstrato que será implementado pelas classes concretas
};

//// Classes concretas que implementam a Strategy para realizar operações
class Add extends OperationStrategy {
    execute(num1, num2) {
        return num1 + num2; //Realiza a adição entre os dois números.
    };
};

class Sub extends OperationStrategy {
    execute(num1, num2) {
        return num1 - num2; // Realiza a subtração dos dois números.
    };
};

class Mult extends OperationStrategy {
    execute(num1, num2) {
        return num1 * num2; //Realiza a multiplicação.
    };
};

//Classe calculator que usa o padrão Strategy
class Calculator {
    constructor (operationStrategy) {
        this.operationStrategy = operationStrategy;
    };

    setOperationStrategy(operationStrategy) {
        this.operationStrategy = operationStrategy;
    };

    calculate(num1, num2) {
        return this.operationStrategy.execute(num1, num2)
    };
};

const num1 = parseInt(prompt("Digite o primeiro número:"));
const num2 = parseInt(prompt("Digite o segundo número:"));
const operation = prompt("Digite a operação (+ Soma | - Subtracao | * Multiplicação):");

let strategy;
switch (operation) {
    case '+':
        strategy = new Add();
        break;
    case '-':
        strategy = new Sub();
        break;
    case '*':
        strategy = new Mult();
        break;
    default:
        console.log("Operação Inválida");
        ProcessingInstruction.exit
};

const calculator = new Calculator(strategy);  
const result = calculator.calculate(num1, num2);

console.log(`Resultado da operação: ${result}`);