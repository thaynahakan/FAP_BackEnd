let num = [3, 7, 9, 1, 0]
// Um esboço que a questão pede seria:
// Usando Filas o primeiro elemento a ser inserido é o primeiro a ser removido.
function removerFila(num) { 
  return num.shift();
}// Fila sairia por ordem : 3, 7, 9, 1, 0

// Usando Pilhas o último elemento inserido é o primeiro a ser removido.
function removerPilha(num) {
  return num.pop();
} // Pilha sairia por ordem: 0, 1, 9, 7, 3

// Usando Listas não tem uma ordem fixa de remoção como uma fila ou uma pilha.
function removerLista(num) {
  return lista.pop();
} // Lista por ordem: 0, 1, 9, 7, 3
// a função pop é usada para retirar o ultimo elemento da lista. Podem ser usadas outras formas, mas foi essa a que eu escolhi.

// Não finalizei o código de propósito pois era mais pra fins demonstrativos das funções.