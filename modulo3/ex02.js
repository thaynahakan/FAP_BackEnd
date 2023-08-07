/*Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.*/
console.log(" Ficha de inscrição para o desfile : 'Totozinhos Fididos' :3")
const animais = parseInt(prompt("Quantos totózinhos você deseja cadastrar?"));
let lista = [] // lista vazia que será preenchida pelo for abaixo

//esse for é para cadastrar os animais, de acordo com a quantidade dada em animais.
for (let i = 0; i < animais; i++) { 
  console.log("---------------------------------")
  console.log(`Preencha os dados do ${i+1}º Totó. `) // Para fins estéticos e organizacional, pra pessoa saber quantos ja foram cadastrados
  const nome = prompt("Qual o nome?");
  const idade = parseInt(prompt("Qual a idade?"));
  const raca = prompt("Qual a raça?");
  lista.push([nome,idade,raca]); //envia para lista, quando colocamos [] faz com que possamos fazer uma separação melhor por blocos, cada vez que cadastrar um animal diferente ele terá um bloco só dele, ficará mais facil pra desempacotar com o proximo for.
};
console.log("Lista de cachorrinhos ʕ•́ᴥ•̀ʔっ♡")
//Esse for é para desempacotar os dados
for (let i = 0; i < lista.length; i++ ){
  console.log(`${i+1} Cachorrinho :3 `)
  console.log(`Nome: ${lista[i][0]}; \nIdade: ${lista[i][1]}; \nRaça: ${lista[i][2]}.`) //nessa parte quando coloco o i- ele fará referência ao array, e o segundo [] fará referência ao elemento que eu quero que seja impresso
  console.log("---------------------------------") // apenas estético
};