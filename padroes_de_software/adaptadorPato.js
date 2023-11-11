// Interface para Galinha
const Galinha = {
    cacarejar: function () {
        console.log("Cócóricó!");
    },
    botarOvo: function () {
        console.log("Galinha botou um ovo.");
    }
};

// Objeto para representar uma Galinha Comum
const GalinhaComum = Object.create(Galinha);

// Interface para Pato
const Pato = {
    grasnar: function () {
        console.log("Quack! Quack!");
    },
    voar: function () {
        console.log("Pato voando.");
    }
};

// Objeto para representar um Pato Comum
const PatoComum = Object.create(Pato);

// Adaptador para transformar um Pato em Galinha
function adaptadorPato(pato) {
    return {
        cacarejar: function () {
            pato.grasnar(); // Adaptando o grasnar do pato para o cacarejar da galinha
        },
        botarOvo: function () {
            console.log("Desculpe, o pato não bota ovos."); // Pato não bota ovos, então apenas uma mensagem padrão
        }
    };
}

// Função de demonstração do adaptador
function adaptadorPatoDemo() {
    // Criando uma galinha comum
    console.log("Galinha:");
    GalinhaComum.cacarejar();
    GalinhaComum.botarOvo();

    // Criando um pato comum
    console.log("\nPato:");
    PatoComum.grasnar();
    PatoComum.voar();

    // Usando o adaptador para permitir que o pato seja usado como se fosse uma galinha
    const adaptador = adaptadorPato(PatoComum);
    console.log("\nAdaptadorPato (usando um pato como se fosse uma galinha):");
    adaptador.cacarejar();
    adaptador.botarOvo();
}

// Executando a demonstração do adaptador
adaptadorPatoDemo();
