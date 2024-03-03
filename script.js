const perguntas = [

  {
    pergunta: `(01) Sobre arquivo strings.xml qual a função deste arquivo em um projeto Java Android?
    
    Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
    I – Este arquivo serve para criarmos constantes literais para usarmos em todo o projeto

    II – Não é recomendável criar strings via hard-code no projeto, recomenda-se usar a partir deste arquivo

    III – Podem até existir strings duplicadas neste arquivo mas nunca que utilizem o mesmo nome

    É correto afirmar que estão corretas:`,
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
    explicacaoResposta: 'O arquivo strings.xml desempenha um papel fundamental no desenvolvimento de aplicativos para Android. Vamos analisar cada uma das afirmações: <br>I - Este arquivo é utilizado para criar constantes literais, ou seja, textos que são usados em todo o projeto de forma consistente. <br><br>Isso é importante porque nos permite centralizar e gerenciar facilmente todas as strings de texto usadas em nosso aplicativo. <br>II - É uma boa prática evitar criar strings diretamente no código (conhecido como hard-code) porque isso pode tornar o código mais difícil de manter e modificar. Em vez disso, recomenda-se utilizar o arquivo strings.xml para armazenar essas strings, o que torna mais fácil a manutenção e a tradução do aplicativo. <br>III - No arquivo strings.xml, é possível ter strings duplicadas, desde que elas não tenham o mesmo nome. Isso significa que podemos ter várias ocorrências da mesma string, mas cada uma deve ter um identificador único. <br><br>Portanto, a afirmação correta é a (c) "I, II e III", porque todas as declarações estão alinhadas com o papel e a importância do arquivo strings.xml no desenvolvimento de aplicativos para Android.',
  },

  {
    pergunta: "(02) Sobre o componente TextView em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n\n I – Este componente serve para exibir textos fixos na tela \n\n II – É possível que um usuário insira informações digitadas a partir deste componente \n\n III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: O TextView é usado para exibir textos na tela do Android. <br><br>Ele pode ser usado para mostrar textos simples, como títulos, ou textos mais complexos, como parágrafos formatados. <br><br>II - Incorreta: O TextView não é um componente de entrada de dados. Ele não permite que o usuário digite informações diretamente nele. Para isso, é necessário usar um componente como o EditText. <br><br>III - Incorreta: O TextView não é um componente  híbrido. Ele funciona apenas como um componente de saída de dados, exibindo textos na tela.',
  },
  {
    pergunta: "(03) – Sobre o atributos que possui sua unidade em “sp” em um projeto Java Android? \n\n Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout \n\n  II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo \n\n  III – Este atributo é usado para medir um tamanho de texto \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: A unidade "sp" é usada para definir o tamanho de texto e dimensões de componentes no layout. Ela é independente da densidade da tela, o que significa que o tamanho do texto e dos componentes será consistente em diferentes dispositivos.<br><br> II - Incorreta: A unidade "sp" não é usada para medir o tamanho de componentes como largura e altura. Para isso, é necessário usar unidades como "dp" ou "px".',
  },
  {
    pergunta: "(04) – Sobre o atributos que possui sua unidade em “dp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout  \n\n II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo \n\n III – Este atributo é usado para medir um tamanho de texto  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta: 'I - Incorreta: A unidade "dp" não é usada para definir o tamanho do texto. Ela é usada para definir dimensões de componentes no layout.<br><br> II - Correta: A unidade "dp" é usada para medir o tamanho de componentes como largura e altura. Ela é independente da densidade da tela, o que significa que o tamanho dos componentes será consistente em diferentes dispositivos. <br><br>III - Incorreta: A unidade "dp" não é usada para medir o tamanho do texto. Para isso, é necessário usar unidades como "sp" ou "px".',
  },
  {
    pergunta: "(05) – Sobre o atributos de um componente visual em especial o “id” em um projeto Java Android? \n\n Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este atributo identifica o componente de layout  \n\n II – Este atributo é usado em qualquer componente  \n\n III – Este atributo é opcional  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
    explicacaoResposta: 'I - Correta: O atributo "id" identifica um componente de layout. Ele é um valor único que permite que o componente seja referenciado por outros componentes e pelo código Java. <br><br>II - Correta: O atributo "id" pode ser usado em qualquer componente visual do Android.<br><br>III - Incorreta: O atributo "id" não é opcional. É necessário definir um "id" único para cada componente visual que você deseja usar no seu projeto.',
  },
  {
    pergunta: "(06) – Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este componente serve para exibir textos fixos na tela \n\n II – É possível que um usuário insira informações digitadas a partir deste componente \n\n III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
    explicacaoResposta: 'I - Correta: O PlainText é um componente que serve para exibir textos fixos na tela. Ele é similar ao TextView, mas oferece algumas funcionalidades a mais, como a capacidade de formatar o texto com HTML e CSS.<br>II - Correta: O PlainText permite que o usuário insira informações digitadas. Isso significa que ele pode ser usado como um campo de entrada de dados, como um nome ou um endereço.<br>III - Correta: O PlainText é um componente híbrido que pode ser usado tanto como entrada de dados quanto como saída de dados. Ele pode exibir textos fixos e também permitir que o usuário digite informações.',
  },
  {
    pergunta: "(07) – Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este componente pode conter teclado do tipo numérico \n\n II – Este componente pode conter teclado de texto comum  \n\n III – Este componente pode conter um teclado discador \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
    explicacaoResposta: 'I - Correta: O PlainText pode conter um teclado do tipo numérico. Isso significa que o usuário pode digitar apenas números neste campo.<br>II - Correta: O PlainText pode conter um teclado de texto comum. Isso significa que o usuário pode digitar qualquer tipo de caractere neste campo.<br>III - Correta: O PlainText pode conter um teclado discador. Isso significa que o usuário pode usar o teclado para digitar números de telefone.',
  },
  {
    pergunta: "(08) – O que podemos afirmar sobre o limitador de tamanho do tipo “wrap_content” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo  \n\n II – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo III – Este atributo limita o tamanho do componente ao tamanho fixo especificado  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: O "wrap_content" limita o tamanho do componente ao mínimo necessário para abrigar o seu conteúdo. Isso significa que o componente terá o tamanho exato para mostrar o seu conteúdo, sem espaços em branco.<br>II - Incorreta: O "wrap_content" não limita o tamanho do componente ao seu componente pai. O tamanho do componente será definido pelo seu conteúdo, mesmo que seja maior que o seu componente pai.<br>III - Incorreta: O "wrap_content" não limita o tamanho do componente a um tamanho fixo. O tamanho do componente será definido pelo seu conteúdo, e poderá variar de acordo com a quantidade de conteúdo que ele precisa mostrar.',
  },

  {
    pergunta: "(09) – O que podemos afirmar sobre o limitador de tamanho do tipo “match_parent” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
  },
  {
    pergunta: "(10) – O que podemos afirmar sobre o limitador de tamanho do tipo “10dp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
  },
  {
    pergunta: "(11) – O que podemos afirmar sobre o limitador de tamanho do tipo “Constraint Widget” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado as margens do vizinho especificado, podendo ser uma própria borda da tela \n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
  },
  {
    pergunta: "(12) O que podemos afirmar sobre o componente Button em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este componente pode ser conectado a lógica de negócio por um método public void nomeMetodo(View view){}\n\nII – Este componente Só existe no iPhone\n\nIII – Este tipo de conexão somente funciona em kotlin\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(13) – O que podemos afirmar sobre o componente Button em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este componente pode ser conectado a lógica de negócio no atributo onClick\n\nII – Este componente Só existe no iPhone\n\nIII – Este tipo de conexão somente funciona em kotlin\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },

  {
    pergunta: "(14) – O que podemos afirmar sobre como conectar os componentes a regra de negócio em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – A conexão é feita pelo método findViewById(id);\n\nII – Ao criar os componentes automaticamente já são vinculados\n\nIII – Tal conexão não existe\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(15) – O que podemos afirmar sobre como conectar os componentes a regra de negócio em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – A conexão é feita dentro do método onCreate()\n\nII – Ao criar os componentes automaticamente já são vinculados\n\nIII – Tal conexão não existe\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(16) – O que podemos afirmar sobre layout do tipo linear layout vertical em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n  I – Ele alinha todos os componentes inseridos dentro dele em uma linha horizontal\n\nII – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(17) – O que podemos afirmar sobre layout do tipo linear layout horizontal em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Ele alinha todos os componentes inseridos dentro dele em uma linha horizontal\n\nII – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
  },
  {
    pergunta: "(18) – O que podemos afirmar sobre layout do atributos gravity em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Ele alinha todos os componentes inseridos dentro dele conforme o tipo de gravidade escolhida\n\n II – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(19) – O que podemos afirmar sobre o componente seekBar em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – É um scroller vertical que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n III – É um scroller horizontal que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
  },
  {
    pergunta: "(20) – O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – É um scroller vertical que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n III – É um scroller horizontal que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
  },
  {
    pergunta: "(21) – O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – Possui valor máximo\n\n III – Possui valor mínimo\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 2,
  },
  {
    pergunta: "(22) – O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – Possui valor máximo e mínimo\n\n III – Pode representar uma lista de strings\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
  },
  {
    pergunta: "(23) – O que podemos afirmar sobre o componente datePicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – É um componente para seleção de data \n\nII – É um componente para seleção de hora\n\n III – É um componente para seleção de data e hora\n\nÉ correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
  },
  {
    pergunta: "(24) – O que podemos afirmar sobre o componente timePicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para seleção de data\n\n II – É um componente para seleção de hora\n\nIII – É um componente para seleção de data e hora\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
  },
  {
    pergunta: "(25) – O que podemos afirmar sobre o componente AlertDialog em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para informar algo ao usuário e aguardar ele confirmar\n\n II – É um componente para informar algo ao usuário e aguardar ele escolher uma opção\n\n III – É um componente para informar algo ao usuário de forma temporária(a mensagem some automaticamente)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
  },
  {
    pergunta: "(26) – O que podemos afirmar sobre o componente Toast em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para informar algo ao usuário e aguardar ele confirmar\n\n II – É um componente para informar algo ao usuário e aguardar ele escolher uma opção\n\n III – É um componente para informar algo ao usuário de forma temporária(a mensagem some automaticamente)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
  },
  {
    pergunta: "(27) – O que podemos afirmar sobre o comando hideSoftInput em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um comando para ocultar a senha\n\n II – É um comando para ocultar o teclado\n\n III – É um comando para ocultar o app\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
  },
  {
    pergunta: "(28) – O que podemos afirmar sobre o comando para mudar de tela em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – Intent intent = new Intent(this, OutraTela.class)\n\n II – startActivity(intente)\n\n III – startScreen(OutraTela)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
  },
  {
    pergunta: "(29) – O que podemos afirmar sobre o comando para salvar dados localmente um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – SharedPreferences\n\n II – CoreData\n\n III – UserDefaults\n\n  É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
  },
  {
    pergunta: "(30) – O que podemos afirmar sobre o comando para listar dados um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – ListView\n\n II – TableView\n\n III – CollectionView\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
  },

];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {

  const perguntaAtual = perguntas[indicePerguntaAtual];
  document.getElementById("pergunta").innerHTML = perguntaAtual.pergunta;

  document.getElementById("pergunta").innerHTML = perguntaAtual.pergunta.replace(/\n/g, "<br>");
  // document.getElementById("explicacaoResposta").innerHTML = perguntaAtual.pergunta.replace(/\n/g, "<br>");


  const listaRespostas = document.getElementById("respostas");
  listaRespostas.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const itemResposta = document.createElement("li"); // Cria um elemento de lista

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "resposta";
    radioInput.value = i;

    itemResposta.appendChild(radioInput);
    itemResposta.appendChild(document.createTextNode(resposta));

    listaRespostas.appendChild(itemResposta); // Adiciona o item de lista à lista de respostas
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
  const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
  const perguntaAtual = perguntas[indicePerguntaAtual];
  const feedbackElement = document.getElementById("feedback");

  if (respostaSelecionada) {
    const tipoResposta = respostaSelecionada.value === perguntaAtual.correta.toString() ? "acerto" : "erro";

    if (tipoResposta === "acerto") {
      pontuacao++;
      feedbackElement.textContent = "Boaaa :) !! Resposta correta!";
      feedbackElement.classList.remove("erro");
      feedbackElement.classList.add("acerto");
    } else {

      const explicacaoResposta = perguntaAtual.explicacaoResposta;
      const respostaCorreta = perguntaAtual.respostas[perguntaAtual.correta];
      feedbackElement.innerHTML = `Resposta incorreta SEU ANIMAL!<br><br> A resposta correta era: ${respostaCorreta}.<br><br>  <span style="color: white;">Explicação aqui retardado<br><br>
      ${explicacaoResposta} </span>`;
      // document.getElementById("explicacaoResposta").innerHTML = perguntaAtual.explicacaoResposta.replace(/\n/g, "<br>");

      feedbackElement.classList.remove("acerto");
      feedbackElement.classList.add("erro");

    }

    document.getElementById("proxima-pergunta").style.display = "block";
  } else {
    alert("Por favor, selecione uma resposta.");
  }
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
document.getElementById("verificar-resposta").addEventListener("click", verificarResposta);

document.getElementById("proxima-pergunta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);
