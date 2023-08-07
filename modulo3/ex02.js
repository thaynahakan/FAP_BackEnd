/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/
console.log(" Ficha de inscrição para o desfile : 'Totozinhos Fididos' :3")
const animais = parseInt(prompt("Quantos totózinhos você deseja cadastrar?"));
let lista = []

for (let i = 0; i < animais; i++) {
  console.log("---------------------------------")
  console.log(`Preencha os dados do, ${i+1}º `)
  const nome = prompt("Qual o nome?");
  const idade = parseInt(prompt("Qual a idade?"));
  const raca = prompt("Qual a raça?");
  lista.push([nome,idade,raca]);
};
console.log("Lista de cachorrinhos ʕ•́ᴥ•̀ʔっ♡")
for (let i = 0; i < lista.length; i++ ){
  console.log(`${i+1} Cachorrinho :3 `)
  console.log(`Nome: ${lista[i][0]}; \nIdade: ${lista[i][1]}; \nRaça: ${lista[i][2]}.`)
  console.log("---------------------------------")
};