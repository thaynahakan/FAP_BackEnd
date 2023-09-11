class Pessoinha {
    constructor(nome, idade) {
      this._nome = nome;
      this._idade = idade;
    }
  
    // Método getter e setter para o nome
    get nome() {
      return this._nome;
    }
  
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    // Método getter e setter para a idade
    get idade() {
      return this._idade;
    }
  
    set idade(novaIdade) {
      if (novaIdade >= 0) {
        this._idade = novaIdade;
      } else {
        console.error("A idade não pode ser um valor negativo.");
      }
    }
  }
  
  // Exemplo de uso da classe Pessoa
  const pessoa1 = new Pessoinha ("João", 30);
  
  console.log(`Nome: ${pessoa1.nome}`); // Saída: Nome: João
  console.log(`Idade: ${pessoa1.idade}`); // Saída: Idade: 30
  
  pessoa1.nome = "Maria";
  pessoa1.idade = 25;
  
  console.log(`Nome: ${pessoa1.nome}`); // Saída: Nome: Maria
  console.log(`Idade: ${pessoa1.idade}`); // Saída: Idade: 25
  
  // Tentando definir uma idade negativa
  pessoa1.idade = -5; // Isso imprimirá um erro no console