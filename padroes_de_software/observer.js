/*Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

implementar uma subclasse da classe Editor chamada TextEditor
aplicar o método insertLine , que recebe os parâmetros lineNumber e text
inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
aplicar o método removeLine , que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
instanciar um TextEditor e disparar o evento “open";
receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor
por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela. */

// Classe Observer que define o comportamento esperado por todos os observadores

const prompt = require("prompt-sync")();

// Classe Observer: Gerencia a lista de observadores e notifica-os sobre eventos
class Observer {
  constructor() {
    this.observers = [];
  }

  // Adiciona um novo observador à lista
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Notifica todos os observadores sobre um evento com dados associados
  notify(event, data) {
    this.observers.forEach((observer) => observer.update(event, data));
  }
}

// Classe Editor: Manipula o conteúdo do editor e notifica os observadores sobre as mudanças
class Editor {
  constructor() {
    this.content = []; // Armazena o conteúdo do editor (linhas de texto)
    this.observers = new Observer(); // Instância do Observer para gerenciar os observadores
  }

  // Insere uma linha de texto em uma posição específica
  insertLine(lineNumber, text) {
    this.content.splice(lineNumber - 1, 0, text); // Insere o texto na posição especificada
    this.observers.notify("insertLine", { lineNumber, text }); // Notifica os observadores sobre a inserção
  }

  // Remove uma linha de texto de uma posição específica
  removeLine(lineNumber) {
    this.content.splice(lineNumber - 1, 1); // Remove a linha da posição especificada
    this.observers.notify("removeLine", { lineNumber }); // Notifica os observadores sobre a remoção
  }

  // Método para indicar que o editor foi aberto
  open() {
    this.observers.notify("open"); // Notifica os observadores sobre a abertura do editor
  }

  // Método para salvar o conteúdo do editor
  save() {
    this.observers.notify("save", { content: this.content.join("\n") }); // Notifica os observadores sobre o salvamento do conteúdo
  }
}

// Subclasse TextEditor que estende a classe Editor
class TextEditor extends Editor {
  constructor() {
    super(); // Chama o construtor da classe pai (Editor)
  }
}

// Instância do editor de texto
const textEditor = new TextEditor();

// Adiciona um observador para capturar os eventos
textEditor.observers.addObserver({
  update(event, data) {
    console.log(`Event: ${event}`, data); // Exibe os eventos no console
  },
});

// Configura a entrada de texto pelo terminal
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Digite as linhas de texto. Digite 'EOF' para encerrar.");

// Evento acionado ao receber uma nova linha de texto
rl.on("line", (input) => {
  if (input.trim().toLowerCase() === "eof") {
    textEditor.save(); // Se a entrada for "EOF", salva o conteúdo e encerra o programa
    rl.close(); // Fecha a interface readline
  } else {
    textEditor.insertLine(textEditor.content.length + 1, input); // Insere a linha no editor de texto
  }
});

textEditor.open(); // Indica que o editor foi aberto
