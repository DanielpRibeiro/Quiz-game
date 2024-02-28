const perguntas = [

   {
    pergunta: "01 Sobre o arquivo strings.xml qual a função deste arquivo em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? I – Este arquivo serve parar criarmos constantes literais para usarmos em todo o projeto  II – Não é recomendável criar strings via hard-code no projeto, recomenda-se usar a partir deste arquivo III – Podem até existir strings duplicadas neste arquivo mas nunca que utilizem o mesmo nome É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
  },

  {
    pergunta: "02 Sobre o componente TextView em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?I – Este componente serve para exibir textos fixos na tela II – É possível que um usuário insira informações digitadas a partir deste componente III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "03 – Sobre o atributos que possui sua unidade em “sp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout  II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo  III – Este atributo é usado para medir um tamanho de texto  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "04 – Sobre o atributos que possui sua unidade em “dp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout  II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo III – Este atributo é usado para medir um tamanho de texto  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
  },
  {
    pergunta: "05 – Sobre o atributos de um componente visual em especial o “id” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  I – Este atributo identifica o componente de layout  II – Este atributo é usado em qualquer componente  III – Este atributo é opcional  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
  },
  {
    pergunta: "06 – Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  I – Este componente serve para exibir textos fixos na tela II – É possível que um usuário insira informações digitadas a partir deste componente III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
  },
  {
    pergunta: "07 – Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  I – Este componente pode conter teclado do tipo numérico II – Este componente pode conter teclado de texto comum  III – Este componente pode conter um teclado discador É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
  },
  {
    pergunta: "08 – O que podemos afirmar sobre o limitador de tamanho do tipo “wrap_content” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  I – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo  II – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo III – Este atributo limita o tamanho do componente ao tamanho fixo especificado  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
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
