//Primeiro objeto abstrado

class Anime {
    constructor(nome, anoPublicacao, manga = false) {
        this.nome = nome;
        this.anoPublicacao = anoPublicacao;
        this.manga = manga;
        this.assistido = false; // Novo atributo para controlar se o anime foi assistido
    }

    //Este método exibe os detalhes do anime, como o nome, o ano de publicação, se possui um mangá associado e o status de "assistido" ou "não assistido" do anime.
    exibirDetalhes() {
        console.log(` ---- Detalhes do Anime ----`);
        console.log(`Nome do Anime: ${this.nome}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
        console.log(`Possui mangá: ${this.manga ? 'Sim' : 'Não'}`);
        console.log(`Status: ${this.assistido ? 'Assistido' : 'Não assistido'}`);
    }

    //Este método marca o anime como "assistido" definindo o atributo assistido como true. Ele também exibe uma mensagem informando que o anime foi marcado como assistido.
    assistir() {
        if (!this.assistido) {
            this.assistido = true;
            console.log(`${this.nome} foi marcado como assistido.`);
        } else {
            console.log(`${this.nome} já foi assistido anteriormente.`);
        }
    }

    //Este método desmarca o anime como "assistido" definindo o atributo assistido como false. Ele também exibe uma mensagem informando que o anime foi desmarcado como assistido.
    desmarcarAssistido() {
        if (this.assistido) {
            this.assistido = false;
            console.log(`${this.nome} foi desmarcado como assistido.`);
        } else {
            console.log(`${this.nome} ainda não foi assistido.`);
        }
    }
}
// Você está criando um objeto específico da classe Anime chamado meuAnime. Os atributos desse objeto, neste caso, serão definidos com os valores que você passou durante a criação da instância
const meuAnime = new Anime("Sailor Moon", 1991, true);
const outroAnime = new Anime("Neon Genesis Evangelion", 1995);

meuAnime.assistir();// Marca o anime como assistido
meuAnime.exibirDetalhes();// Exibe os detalhes atualizados do anime
meuAnime.desmarcarAssistido();// Desmarca o anime como assistido

meuAnime.exibirDetalhes();// Exibe os detalhes atualizados do anime
outroAnime.exibirDetalhes();// Exibe os detalhes atualizados do anime


// Segundo objeto abstrato

class PerfildeNamoroOnline{
    constructor(nome, idade, genero, hobbies, descricao) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
        this.hobbies = hobbies || [];
        this.descricao = descricao || '';
        this.matches = [];
}

adicionarHobby(hobby) {
    this.hobbies.push(hobby);
}

adicionarMatch(perfil) {
    this.matches.push(perfil);
}

escreverDescricao(descricao) {
    this.descricao = descricao;
}

mostrarInformacoes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Gênero: ${this.genero}`);
    console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    console.log(`Descrição: ${this.descricao}`);
    if (this.matches.length > 0) {
        console.log(`Matches: ${this.matches.map(match => match.nome).join(', ')}`);
    } else {
        console.log('Nenhum match ainda.');
    }
}
}

// Exemplo de uso
const perfil1 = new PerfilDeNamoroOnline('Alice', 28, 'Feminino', ['Cinema', 'Viagens'], 'Em busca de novas aventuras.');
const perfil2 = new PerfilDeNamoroOnline('Bob', 30, 'Masculino', ['Esportes', 'Música'], 'Gosto de praticar esportes e tocar guitarra.');

perfil1.adicionarMatch(perfil2);
perfil2.adicionarMatch(perfil1);

perfil1.mostrarInformacoes();
console.log('----------------------');
perfil2.mostrarInformacoes();