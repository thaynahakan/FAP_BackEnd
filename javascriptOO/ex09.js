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