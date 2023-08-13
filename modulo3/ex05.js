function linearSearch(array, procurado) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === procurado) {
            return i; // Retorna o índice onde o valor foi encontrado
        }
    }
    return -1; // Retorna -1 se o valor não foi encontrado no array
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const valor = 20;

const index = linearSearch(array, valor);

if (index !== -1) {
    console.log(`O valor ${valor} foi encontrado no índice ${index}.`);
} else {
    console.log(`O valor ${valor} não foi encontrado no array.`);
}