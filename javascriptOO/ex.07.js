/*Crie um código com um objeto chamado "Banco". Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:

Buscar saldo deve retornar o valor atual do saldo;
Para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
Para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
O número da conta deve retornar o número da conta.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que os outros desenvolvedores possam analisá-lo. */


const prompt = require(`prompt-sync`)(); // Importando o módulo de entrada do usuário

// Definindo a função construtora Banco
class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    }

    buscarConta() {
        console.log(`O númerinho da continha é: ${this.conta}\n`);
    }

    buscarSaldo() {
        console.log(`Seu saldinho atual é: ${this.saldo}\n`);
    }

    deposito(deposito) {
        this.saldo += deposito;
    }

    saque(saque) {
        if (saque > this.saldo) {
            console.log("Melhore bicha, tu não tem nem saldo pra isso.");
        } else {
            this.saldo -= saque;
            console.log("PARABÉNS, essa alma precisava mesmo de um dinheiro. Deus te elimine ✡")
        }
    }
}
// Adicionando métodos ao protótipo da classe Banco

console.log('-'.repeat(30));
console.log(" ❀ BANCO DA FLOR ✿");
console.log('-'.repeat(30));

const conta = prompt("Informe sua conta: ");
const saldo = 0;
const tipo = prompt("Informe o tipo da sua conta: ");
const agencia = prompt("Informe sua agencia: ");
console.log('-'.repeat(30));


const minhaConta = new Banco(conta, saldo, tipo, agencia); // Inicializando com o saldo fornecido
let continuar = true;

while (continuar) {
    const operacao = prompt("Qual operação você deseja realizar (1 - Depósito / 2 - Saque / 3 - Saldo / 4 - Sair)? ");

    switch (operacao) {
        case "1":
            const valorDeposito = parseFloat(prompt("Informe o valor para depósito: "));
            minhaConta.deposito(valorDeposito);
            break;
        case "2":
            const valorSaque = parseFloat(prompt("Informe o valor para saque: "));
            minhaConta.saque(valorSaque);
            break;
        case "3":
            minhaConta.buscarSaldo();
            break;
        case "4":
            console.log("❀ Obrigada por acessar o banco Flor ✿");
            continuar = false;
            break;
        case "5":
            banco.buscarConta();
            break;
        default:
            console.log("Operação inválida. Por favor, escolha '1', '2', '3' ou '4'.");
            break;
    }
}