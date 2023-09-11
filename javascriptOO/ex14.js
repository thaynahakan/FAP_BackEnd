class Estudante {
    constructor(nome, idade, salario, completo){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.completo = false;
    }
}

const pessoa1 = new Estudante("José", 19, 1900, true);
const pessoa2 = new Estudante("David", 22, 2500, false);
const pessoa3 = new Estudante("Maria", 25, 3400, true);
const pessoa4 = new Estudante("Igor", 18, 2100, false);

console.log(pessoa1)