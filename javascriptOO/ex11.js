const prompt = require(`prompt-sync`)(); 

function verificar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}


while (true) {
    const input = prompt('Digite o número: ');
    const numero = parseInt(input);

    if (!isNaN(numero)) {
        console.log(`O número que você digitou ${numero} é um número ${verificar(numero)}!`);
        break;
    } else {
        console.log('Entrada inválida. Por favor, digite um número inteiro.');
    }
} 