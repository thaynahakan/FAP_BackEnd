/* Considere que:
- os produtos devem implementar uma interface comum;
- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
- há dois tipos de computadores: pc e server; - RAM e HD devem estar em GB;
- CPU deve estar em GHZ;
através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
- quando o método toString() for aplicado a um computador, ele deve imprimir seus atributos. */

class Computer {
    getRAM() {}
    getHDD() {}
    getCPU() {}
    getType() {}
    toString() {}
}

class PC extends Computer {
    getRAM() {
        return 'RAM: 6GB';
    }
    getHDD() {
        return 'HDD: 2000GB';
    }
    getCPU() {
        return 'CPU: 2.0GHz';
    }
    getType() {
        return 'PC';
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU();
    }
}

class Server extends Computer {
    getRAM() {
        return 'RAM: 34GB';
    }
    getHDD() {
        return 'HDD: 20000GB';
    }
    getCPU() {
        return 'CPU: 4.0GHz';
    }
    getType() {
        return 'Server' ;
    }
    toString() {
        return this.getType() + ' -> ' + this.getRAM() + ', ' + this.getHDD() + ', ' + this.getCPU() ;
    }
}

class ComputerFactory {
    creatComputer(type) {
        switch (type) {
            case 'PC':
                const pc = new PC();
                console.log(pc.toString())
                break;
            case 'Server':
                const server = new Server();
                console.log(server.toString())
                break;
            default:
                console.log('Tipo inválido');
        }
    }
}

const computerFactory = new ComputerFactory();

computerFactory.creatComputer('PC')
computerFactory.creatComputer('Server')
computerFactory.creatComputer('Netbook')