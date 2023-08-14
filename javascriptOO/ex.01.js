// Estamos rodeados por dados no nosso cotidiano e, nas aulas, aprendemos sobre os seus diversos tipos. Agora, vamos criar variáveis do tipo boolean, Bigint, string e symbol. No primeiro momento, após declará-las, precisamos exibir seus conteúdos, que devem ser UNDEFINED. Em seguida, vamos deixar essas variáveis com valores nulos e imprimir. Por fim, cada uma deve receber um dos tipos como atribuição e os seus respectivos valores devem ser impressos na tela. 

let tipoBoolean;
let tipoBigint;
let tipoString;
let tipoSymbol;

// Exibindo os conteúdos (todos serão undefined)
console.log("Conteúdo das variáveis (undefined):");
console.log(tipoBoolean);
console.log(tipoBigint);
console.log(tipoString);
console.log(tipoSymbol);

// Atribuindo valores nulos
tipoBooleanoolean = null;
tipoBigint = null;
tipoString = null;
tipoSymbol = null;

// Exibindo os valores nulos
console.log("Valores nulos das variáveis:");
console.log(tipoBoolean);
console.log(tipoBigint);
console.log(tipoString);
console.log(tipoSymbol);

// Atribuindo diferentes tipos de valores
tipoBoolean = true;
tipoBigint = 666666666999999999;
tipoString= "relou, mundoh";
tipoSymbol = Symbol("id");

// Exibindo os valores atribuídos
console.log("Mostrando as variáveis:");
console.log(tipoBoolean);
console.log(tipoBigint);
console.log(tipoString);
console.log(tipoSymbol);