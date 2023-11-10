// Classe base para o sanduíche
class Sanduiche {
    // Construtor da classe
    constructor() {
        this.descricao = "Sanduiche";
    }

    // Método para calcular o custo do sanduíche
    custo() {
        return 0;
    }

    // Método para obter a descrição do sanduíche
    descricaoDoSanduiche() {
        return this.descricao;
    }
}

// Classe para um sanduíche específico: Frango Assado
class FrangoAssado extends Sanduiche {
    // Construtor da classe, invocando o construtor da classe base usando super()
    constructor() {
        super();
        this.descricao = "Sanduiche de Frango Assado";
    }

    // Sobrescreve o método custo para fornecer o custo do sanduíche de frango assado
    custo() {
        return 4.5;
    }
}

// Classe decoradora para adicionar Pepperoni a um sanduíche existente
class Pepperoni extends Sanduiche {
    // Construtor que recebe um sanduíche para decorar
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    // Adiciona o custo do Pepperoni ao custo do sanduíche base
    custo() {
        return this.sanduiche.custo() + 0.99;
    }

    // Adiciona a descrição do Pepperoni à descrição do sanduíche base
    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", Pepperoni";
    }
}

// Classe decoradora para adicionar Queijo Mussarela Ralado a um sanduíche existente
class QueijoMussarelaRalado extends Sanduiche {
    // Construtor que recebe um sanduíche para decorar
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    // Adiciona o custo do Queijo Mussarela Ralado ao custo do sanduíche base
    custo() {
        return this.sanduiche.custo() + 2.0;
    }

    // Adiciona a descrição do Queijo Mussarela Ralado à descrição do sanduíche base
    descricaoDoSanduiche() {
        return this.sanduiche.descricaoDoSanduiche() + ", Queijo Mussarela Ralado";
    }
}

// Criando uma instância de um sanduíche específico: Frango Assado
const meuSanduiche = new FrangoAssado();

// Criando uma instância de um sanduíche decorado com Queijo Mussarela Ralado e Pepperoni
const sanduicheDecorado = new QueijoMussarelaRalado(new Pepperoni(meuSanduiche));

// Imprimindo a descrição e o custo total do sanduíche decorado
console.log(`${sanduicheDecorado.descricaoDoSanduiche()} custa $${sanduicheDecorado.custo().toFixed(2)}.`);