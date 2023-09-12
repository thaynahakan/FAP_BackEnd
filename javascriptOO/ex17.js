const prompt = require(`prompt-sync`)(); 

try {
    // Solicitar ao usuário que forneça dois números
    const n1 = parseFloat(prompt("Digite o primeiro número:"));
    const n2 = parseFloat(prompt("Digite o segundo número:"));
  
    if (isNaN(n1) || isNaN(n2)) {
      throw new Error("Pelo menos um dos valores não é um número válido.");
    }
  
    // Realizar a divisão
    const resultado = n1 / n2;
  
    if (!isFinite(resultado)) {
      throw new Error("O resultado é infinito ou indeterminado.");
    }
  
    // Exibir o resultado
    console.log(`O resultado da divisão é: ${resultado}`);
  } catch (excecao) {
    // Tratamento da exceção
    console.error(`Ocorreu um erro: ${excecao.message}`);
  } finally {
    // Este bloco será sempre executado, independentemente de ocorrer uma exceção ou não.
    console.log("Execução finalizada.");
  }
  