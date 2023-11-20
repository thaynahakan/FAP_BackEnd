class SistemaSeguranca {
    constructor() {
        if (SistemaSeguranca.instancia) {
            return SistemaSeguranca.instancia;
        }
        this.senhaBaseSecreta = "senha123";
        SistemaSeguranca.instancia = this;
    }

    acessarBaseSecreta(senhaInserida) {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta!");
        } else {
            console.log("Acesso negado. Senha incorreta!");
        }
    }
}

SistemaSeguranca.instancia = null;

// Programa principal
const sistemaSeguranca = new SistemaSeguranca();

// Simulando o acesso com uma senha correta e uma senha incorreta
sistemaSeguranca.acessarBaseSecreta("senha123"); // Acesso concedido
sistemaSeguranca.acessarBaseSecreta("senha456"); // Acesso negado