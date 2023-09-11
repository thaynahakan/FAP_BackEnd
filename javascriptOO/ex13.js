// Usando a linguagem JavaScript, desenvolva uma classe chamada Pessoa. Ela precisa possuir, pelo menos, dois objetos. Essa classe servirá como base para a classe
//Funcionário, a qual vai herdar os atributos e métodos da Pessoa. Além disso, inclua os atributos adicionais cargo e salário na classe Pessoa

// Classe Pessoa
class Pessoa {
    constructor(nome, idade, cargo, salario) {
      this._nome = nome;
      this._idade = idade;
      this._cargo = cargo;
      this._salario = salario;
    }
  
    // Métodos getters e setters para nome
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    // Métodos getters e setters para idade
    get idade() {
      return this._idade;
    }
  
    set idade(novaIdade) {
      this._idade = novaIdade;
    }
  
    // Métodos getters e setters para cargo
    get cargo() {
      return this._cargo;
    }
  
    set cargo(novoCargo) {
      this._cargo = novoCargo;
    }
  
    // Métodos getters e setters para salario
    get salario() {
      return this._salario;
    }
  
    set salario(novoSalario) {
      this._salario = novoSalario;
    }
  
    // Método para apresentar informações da Pessoa
    apresentar() {
      console.log(`Nome: ${this._nome}`);
      console.log(`Idade: ${this._idade}`);
      console.log(`Cargo: ${this._cargo}`);
      console.log(`Salário: R$ ${this._salario.toFixed(2)}`);
    }
  }
  
  // Classe Funcionario herda de Pessoa
  class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario, departamento) {
      super(nome, idade, cargo, salario); // Chamando o construtor da superclasse Pessoa
      this._departamento = departamento;
    }
  
    // Método getter e setter para departamento
    get departamento() {
      return this._departamento;
    }
  
    set departamento(novoDepartamento) {
      this._departamento = novoDepartamento;
    }
  
    // Método para apresentar informações do Funcionário (incluindo informações de Pessoa)
    apresentar() {
      super.apresentar(); // Chama o método da superclasse Pessoa
      console.log(`Departamento: ${this._departamento}`);
    }
  }
  
  // Exemplo de uso das classes
  const pessoa1 = new Pessoa("JoJo ToddynhU", 22, "Cantora", 20.000);
  const funcionario1 = new Funcionario("Pipokinha", 25, "Cantora do Prazer", 5500.00, "Cultura e Perdição");
  
  // Usando os métodos setters para definir valores
  pessoa1.nome = "Joan";
  funcionario1.salario = 6000.00;
  
  pessoa1.apresentar(); // Apresenta informações da Pessoa
  console.log("\n");
  funcionario1.apresentar(); // Apresenta informações do Funcionário, incluindo as informações de Pessoa
  