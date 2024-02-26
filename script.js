const perguntas = [
  {
    pergunta: "Qual a capital do Brasil?",
    respostas: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    correta: 1,
  },
  {
    pergunta: "Qual o maior país do mundo em extensão territorial?",
    respostas: ["Rússia", "Canadá", "China", "Estados Unidos"],
    correta: 1,
  },
  // Adicione mais perguntas aqui...
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
  const perguntaAtual = perguntas[indicePerguntaAtual];
  document.getElementById("pergunta").textContent = perguntaAtual.pergunta;

  const listaRespostas = document.getElementById("respostas");
  listaRespostas.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const itemResposta = document.createElement("li");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "resposta";
    radioInput.value = i;

    itemResposta.appendChild(radioInput);
    itemResposta.appendChild(document.createTextNode(resposta));

    listaRespostas.appendChild(itemResposta);
  }
}

function proximaPergunta() {
  indicePerguntaAtual++;

  if (indicePerguntaAtual < perguntas.length) {
    mostrarPergunta();
    document.getElementById("feedback").textContent = "";
    document.getElementById("proxima-pergunta").style.display = "block";
  } else {
    // Exibir tela de finalização com pontuação
    document.getElementById("quiz-container").innerHTML = `
      <h2>Quiz Finalizado!</h2>
      <p>Sua pontuação foi: ${pontuacao} de ${perguntas.length}</p>

      <button onclick="location.reload()">Recomeçar Quiz</button>
    `;
     const tipoMensagem = getTipoMensagem(pontuacao);
  const mensagem = mensagensPersonalizadas[tipoMensagem];

  document.getElementById("titulo-final").textContent = mensagem.titulo;
  document.getElementById("texto-final").textContent = mensagem.texto;
  }
}

function verificarResposta() {
  const respostaSelecionada = document.querySelector('input[name="resposta"]:checked').value;
  const perguntaAtual = perguntas[indicePerguntaAtual];

  const tipoResposta = respostaSelecionada === perguntaAtual.correta.toString() ? "acerto" : "erro";

  if (tipoResposta === "acerto") {
    pontuacao++;
    document.getElementById("feedback").textContent = "Resposta correta!";
  } else {
    const explicacaoResposta = perguntas[indicePerguntaAtual].respostas[perguntas[indicePerguntaAtual].correta];
    document.getElementById("feedback").textContent = `
      Resposta incorreta! A resposta correta era: ${explicacaoResposta}
    `;
  }

  document.getElementById("proxima-pergunta").style.display = "block";
}
function getTipoMensagem(pontuacao) {
  for (const tipoMensagem in faixasAcertos) {
    const faixaAtual = faixasAcertos[tipoMensagem];
    if (pontuacao >= faixaAtual.min && pontuacao <= faixaAtual.max) {
      return tipoMensagem;
    }
  }
}
mostrarPergunta();

document.getElementById("proxima-pergunta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);
