/*Dois métodos comuns usados para manipular strings em JavaScript são split() e toUpperCase().

Método split(): Este método divide uma string em um array de substrings com base em um separador especificado.

Método toUpperCase(): Este método converte todos os caracteres de uma string em letras maiúsculas.

Aqui está um exemplo de uso do método split(): */

// Usando o método split() para dividir uma string em um array de palavras
const frase = "Olá, mundo! Bem-vindo à programação.";
const palavras = frase.split(" "); // Dividir a string usando espaço como separador

console.log(palavras);
// Saída: [ 'Olá,', 'mundo!', 'Bem-vindo', 'à', 'programação.' ]
/*Neste exemplo, a string frase foi dividida em um array de palavras usando o espaço como separador. Cada palavra é um elemento no array resultante palavras.

Aqui está um exemplo de uso do método toUpperCase():*/

// Usando o método toUpperCase() para converter uma string em letras maiúsculas
const texto = "Isso é um exemplo.";
const textoEmMaiusculas = texto.toUpperCase();

console.log(textoEmMaiusculas);
// Saída: ISSO É UM EXEMPLO.
/* Neste exemplo, a string texto foi convertida para letras maiúsculas usando o método toUpperCase(), e o resultado foi armazenado na variável textoEmMaiusculas. */