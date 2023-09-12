/* Uma competição de tiro ao alvo recebeu as inscrições de cinco participantes: João, Pedro, Luiza, Marcela e Yuri. Na competição, eles obtiveram, respectivamente, as seguintes pontuações individuais: 50, 120, 70, 10 e 34. Com base nos conceitos de coleções (Set, Map, Lista, Pilha) em JavaScript, escreva um código para armazenar essas informações na coleção mais apropriada e de forma que o nome do participante e a sua pontuação estejam em umamesma estrutura. */

// Criar um Map para armazenar as informações dos participantes
const pontuacoes = new Map();

// Adicionar os participantes e suas pontuações ao Map
pontuacoes.set('João', 50);
pontuacoes.set('Pedro', 120);
pontuacoes.set('Luiza', 70);
pontuacoes.set('Marcela', 10);
pontuacoes.set('Yuri', 34);

// Exemplo de como acessar as informações
console.log(`Pontuação de Pedro: ${pontuacoes.get('Pedro')}`);
console.log(`Pontuação de Marcela: ${pontuacoes.get('Marcela')}`);
