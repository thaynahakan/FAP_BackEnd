class Pessoa {
    constructor (nome, idade){
      this.nome = nome ;
      this.idade = idade;
      this.filho = null;
    } 
  }
  // vi que dava pra colocar em filho o this.Filho = null; que seria dizer que por padrão a pessoa não teria filhos incicialmente.
  const pessoa1 = new Pessoa ("Beyonce", 42);
  const pessoa2 = new Pessoa ("Rihannah", 22);
  
  // para atribuir um filho a essa pessoa seria necessário apenas dar um valor ao filho e atribuir a pessoa.
  
  pessoa1.filho = pessoa2; // aqui estabeleci que Rihannah é filha de Beyonce
  
  // Aqui vai imprimir os valores.
  console.log(`Nome: ${pessoa1.nome}, ${pessoa1.idade} anos, mãe de: ${pessoa1.filho.nome}`);
  // filho é um objeto do tipo Pessoa, então para acessar o nome do filho, você deve usar pessoa1.filho.nome.
  
  // devolverá = Nome: Beyonce, 42 anos, mãe de: Rihannah