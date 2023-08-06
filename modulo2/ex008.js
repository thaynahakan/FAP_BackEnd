/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. */

const cand = { 
    candidato_x: 889,
    candidato_y: 847,
    candidato_z: 515,
    voto_branco: 0,
  };
  
  let totvoto = 0; // contador de votos totais
  let x = 0;
  let y = 0;
  let z = 0;
  let outros = 0;
  let branco = 0;
  
  alert("* Urninha delyx menine *");
  alert('Boquinha de urninha:\n-889 para o candidato X\n-847 para o candidato Y\n-515 para o candidato Z\n-0 [zero] para votar branco.')//Decidi não ficar repetindo a boquinha de urna, tava muito poluído
  
  while (true) {
    let voto = prompt("Digite o número do candidato escolhido:");
    voto = parseInt(voto);

    while (isNaN(voto)) {
        alert("Por favor, digite apenas números válidos para votar.");
        voto = prompt("Digite o número do candidato escolhido:");
        voto = parseInt(voto);
    }
  
    if (voto === cand.candidato_x ) {
      x++;
      totvoto++; // independente de onde votar o contador vai ser somado
      alert ("Você votou no candidato X.");
    } else if (voto === cand.candidato_y) {
      y++;
      totvoto++;
      alert("Você votou no candidato Y.");
    } else if (voto === cand.candidato_z) {
      z++;
      totvoto++;
      alert("Você votou no candidato Z.")
    } else if (voto === cand.voto_branco) {
      branco++;
      totvoto++;
      alert("Você votou em branco.");
    } else {
      outros++;
      totvoto++;
      alert("Voto nulo.");
    } 
    const desejo = String(prompt("Deseja continuar? [Sim/ Não] ")).toLowerCase();
    if (desejo !== 'sim' && desejo !== "s"){
      break;// na variável desejo fiz com um leve tratamento de string, se colocar qualquer coisa diferente de sim ou s pode ser maiusculo ou minúsculo o sistema irá computar como não.
    }
  }
  
  function venceu(){
    let vencedor = "Votos Brancos";
    let votosvenc = branco;
  
    if (x > votosvenc){
      vencedor = "Candidato X";
      votosvenc = x;
    }
    if (y > votosvenc){
      vencedor = "Candidato Y";
      votosvenc = y;
    }
    if (z > votosvenc){
      vencedor = "Candidato Z";
      votosvenc = z;
    }
    else {
          vencedor = "Empate" // Só fiz essa variável por desencargo, porque não foi exigido no exercício, então não irá entregar o nome do vencedor, apenas que houve empate.
    }
    return [vencedor, votosvenc];
  }
  alert('-------------------------------------');
  alert("RESULTADO DE VOTOS DA ELEIÇÃO:\n");
  alert('-------------------------------------');
  alert("Candidato X: " + x + " votos");
  alert("Candidato Y: " + y + " votos");
  alert("Candidato Z: " + z + " votos");
  alert("Votos em Branco: " + branco + " votos");
  alert("Votos Nulos: " + outros + " votos");
  alert('-------------------------------------');
  const resultadoVencedor = venceu();
  alert("\nO total de votos computados: " + totvoto);
  alert("O vencedor foi: " + resultadoVencedor[0] + " com " + resultadoVencedor[1] + " votos.");
  alert('-------------------------------------');