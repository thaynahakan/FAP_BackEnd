// Listas Vazias
let nomes = [];
let idades = [];
let cores = [];

// Loop de 10X para cada item. Corrigi o loop e os índices, menor que 10 está certo, pois o programa vai começar a rodar do 0,1,2,3... Se fosse <= 10 então seriam 11 números.
for (let i = 0; i < 10; i++) {
  const nome = prompt(`Insira o ${i + 1}ª Pessoa: `);
  nomes.push(nome);

  const idade = parseInt(prompt(`Insira a ${i + 1}ª Idade: `));
  idades.push(idade);

  const cor = prompt(`Insira a ${i + 1}ª Cor: `);
  cores.push(cor);
}

// imprimindo listas
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores:", cores);


// O (-1) no final, vai corrigir para o usuário o valor, porque o programa começa a ler do 0,1,2... Se digitar o valor que estamos acostumados vai dar certo.
let indicecor = parseInt(prompt("Digite o índice da cor que você quer mudar: "))-1;
let mudacor = prompt("Digite a nova cor que você deseja colocar no lugar:");
cores.splice(indicecor, 1, mudacor); // substitui o índice, um elemento, por mudacor

let indiceidade = parseInt(prompt("Digite o índice da idade que você quer mudar: "))-1; 
let mudaidade = parseInt(prompt("Digite a nova idade que você deseja colocar no lugar: "));
idades.splice(indiceidade, 1, mudaidade);
//imprimindo as listas atualizadas
console.log("Listas atualizadas <3 ");
console.log("Nomes:", nomes);
console.log("Idades:", idades);
console.log("Cores:", cores);