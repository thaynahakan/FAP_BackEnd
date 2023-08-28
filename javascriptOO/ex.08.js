/* Instruções
Vamos criar um array de objetos pessoa com, no mínimo, quatro itens. Cada um deles será composto por quatro propriedades: nome, idade, profissão e cidade.
Dessa forma, declare os objetos pessoa dentro do array e, depois, desenvolva um código que utlize for in e for of para que todos os objetos e propriedades sejam impressos.
Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo. */

const pessoas = [
  {
    nome: 'Mary Jane',
    idade: 500,
    profissao: 'Médica',
    cidade: 'Narnia'
  },
  {
    nome: 'Jaislla',
    idade: 27,
    profissao: 'Lindynha',
    cidade: 'Natalyna'
  },
  {
    nome: 'Riquelme',
    idade: 21,
    profissao: 'Lindynho',
    cidade: 'Natalyno'
  },
  {
    nome: 'Ana',
    idade: 28,
    profissao: 'Maravilhosynha',
    cidade: 'Do Sol'
  }
];

// Usando o loop for in para imprimir os objetos e suas propriedades
console.log('-'.repeat(30))
console.log('Desempacotando com for in:');
for (const indice in pessoas) {
console.log('-'.repeat(30))    
  console.log('Pessoa Mágica ' + indice);
  for (const propriedade in pessoas[indice]) {
    console.log(propriedade + ': ' + pessoas[indice][propriedade]);
  }
}
console.log('-'.repeat(30))
// Usando o loop for of para imprimir os objetos e suas propriedades
console.log('\nDesempacotando com for of:');
for (const pessoa of pessoas) {
console.log('-'.repeat(30))    
  console.log('Pessoa Mágica:');
  
  for (const propriedade in pessoa) {
    console.log(propriedade + ': ' + pessoa[propriedade]);
  }
}
console.log('-'.repeat(30))



