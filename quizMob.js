const perguntas = [
    {
        pergunta: "Como você adicionaria um TextView programaticamente em uma atividade Java do Android?",
        respostas: [
            "a) TextView textView = new TextView(this);",
            "b) TextView textView = findViewById(R.id.textView);",
            "c) TextView textView = new TextView();",
            "d) TextView textView = new TextView(context);"
        ],
        correta: 0,
        explicacaoResposta: "Para adicionar um TextView programaticamente em uma atividade Java do Android, você usaria a opção 'a'. Isso cria uma nova instância de TextView."
    },
    {
        pergunta: "Como você definiria o texto de um TextView programaticamente em Java?",
        respostas: [
            "a) textView.setText('Olá Mundo!');",
            "b) textView.setText(R.string.texto_ola);",
            "c) textView.text = 'Olá Mundo!';",
            "d) textView.setText('Olá Mundo!')"
        ],
        correta: 0,
        explicacaoResposta: "Para definir o texto de um TextView programaticamente em Java, você usaria a opção 'a'. Isso define o texto do TextView como 'Olá Mundo!'."
    },
    {
        pergunta: "Como você adicionaria um TextView em um layout XML do Android?",
        respostas: [
            "a) <TextView id='@+id/textView' width='wrap_content' height='wrap_content' text='Hello World!' />",
            "b) <TextView id='@+id/textView' width='match_parent' height='wrap_content' text='Hello World!' />",
            "c) <TextView android:id='@+id/textView' android:layout_width='wrap_content' android:layout_height='wrap_content' android:text='Hello World!' />",
            "d) <TextView android:id='@+id/textView' android:layout_width='match_parent' android:layout_height='wrap_content' android:text='Hello World!' />"
        ],
        correta: 2,
        explicacaoResposta: "Para adicionar um TextView em um layout XML do Android, você usaria a opção 'c'. Isso cria um TextView com ID 'textView' e texto 'Hello World!'."
    },
    {
        pergunta: "Como você definiria o texto de um TextView em XML?",
        respostas: [
            "a) text='Olá Mundo!'",
            "b) android:text='Olá Mundo!'",
            "c) content='Olá Mundo!'",
            "d) value='Olá Mundo!'"
        ],
        correta: 1,
        explicacaoResposta: "Para definir o texto de um TextView em XML, você usaria a opção 'b'. Isso define o texto do TextView como 'Olá Mundo!'."
    },
    {
        pergunta: "Qual método Java é utilizado para acessar um TextView definido em um layout XML?",
        respostas: [
            "a) findViewById(R.id.textView);",
            "b) findViewById('textView');",
            "c) getTextViewById(R.id.textView);",
            "d) getViewById(R.id.textView);"
        ],
        correta: 0,
        explicacaoResposta: "Para acessar um TextView definido em um layout XML em Java, você usaria o método 'findViewById(R.id.textView)'."
    },
    {
        pergunta: "Como você definiria o tamanho do texto de um TextView programaticamente em Java?",
        respostas: [
            "a) textView.setTextSize(18);",
            "b) textView.setFontSize(18);",
            "c) textView.setTextSize(18);",
            "d) textView.setFontSize(18);"
        ],
        correta: 0,
        explicacaoResposta: "Para definir o tamanho do texto de um TextView programaticamente em Java, você usaria a opção 'a'. Isso define o tamanho do texto como 18 unidades."
    },
    {
        pergunta: "Qual atributo XML é utilizado para definir a cor do texto de um TextView?",
        respostas: [
            "a) textColor",
            "b) text-color",
            "c) fontColor",
            "d) color"
        ],
        correta: 0,
        explicacaoResposta: "O atributo XML 'textColor' é utilizado para definir a cor do texto de um TextView em XML."
    },
    {
        pergunta: "Como você faria para alinhar o texto de um TextView no centro do layout em XML?",
        respostas: [
            "a) layout_gravity='center'",
            "b) gravity='center'",
            "c) align='center'",
            "d) center_layout='true'"
        ],
        correta: 1,
        explicacaoResposta: "Para alinhar o texto de um TextView no centro do layout em XML, você usaria a opção 'b'. Isso define o alinhamento do texto como centralizado."
    },
    {
        pergunta: "Qual é a função do método setContentView() em uma atividade do Android?",
        respostas: [
            "a) É usado para definir o layout da atividade a partir de um arquivo XML.",
            "b) É usado para definir o texto de um TextView programaticamente.",
            "c) É usado para configurar o ícone da atividade.",
            "d) É usado para iniciar uma nova atividade."
        ],
        correta: 0,
        explicacaoResposta: "A função do método 'setContentView()' em uma atividade do Android é definir o layout da atividade a partir de um arquivo XML."
    },
    {
        pergunta: "Como você definiria a altura de um TextView em XML?",
        respostas: [
            "a) height",
            "b) layout_height",
            "c) textHeight",
            "d) size_height"
        ],
        correta: 1,
        explicacaoResposta: "Para definir a altura de um TextView em XML, você usaria a opção 'b'. Isso define a altura do TextView no layout."
    },
    {
        pergunta: `Como você criaria um novo projeto Android no Android Studio?`,
        respostas: [
            "a) Clicando em 'File' > 'New Project' e seguindo as instruções do assistente de criação de projetos.",
            "b) Digitando 'new project' na barra de pesquisa e selecionando 'New Project' no menu suspenso.",
            "c) Clicando em 'Run' > 'New Project' e selecionando um modelo de projeto pré-definido.",
            "d) Clicando em 'Tools' > 'New Project' e preenchendo um formulário de criação de projetos."
        ],
        correta: 0,
        explicacaoResposta: "Para criar um novo projeto Android no Android Studio, você usaria a opção 'a', que abre o assistente de criação de projetos onde você pode definir o nome do aplicativo, pacote, localização do projeto, etc."
    },
    {
        pergunta: `Como você adicionaria uma nova Activity a um projeto Android no Android Studio?`,
        respostas: [
            "a) Clicando com o botão direito do mouse no pacote 'java' e selecionando 'New' > 'Activity'.",
            "b) Digitando 'new activity' na barra de pesquisa e selecionando 'New Activity' no menu suspenso.",
            "c) Clicando em 'Run' > 'New Activity' e selecionando um modelo de atividade pré-definido.",
            "d) Clicando em 'Tools' > 'New Activity' e preenchendo um formulário de criação de atividades."
        ],
        correta: 0,
        explicacaoResposta: "Para adicionar uma nova Activity a um projeto Android no Android Studio, você usaria a opção 'a', que abre o assistente de criação de atividades onde você pode escolher o tipo de atividade e personalizá-la conforme necessário."
    },
    {
        pergunta: `Como você executaria um aplicativo Android no emulador no Android Studio?`,
        respostas: [
            "a) Clicando em 'Run' > 'Run app' e selecionando o dispositivo emulado na lista de dispositivos disponíveis.",
            "b) Pressionando Ctrl + Shift + R após conectar o dispositivo emulado ao Android Studio.",
            "c) Clicando em 'Tools' > 'Run Emulator' e selecionando o aplicativo a ser executado.",
            "d) Nenhuma das anteriores."
        ],
        correta: 0,
        explicacaoResposta: "Para executar um aplicativo Android no emulador no Android Studio, você usaria a opção 'a', que inicia o emulador e instala o aplicativo nele para execução."
    },
    {
        pergunta: `Como você importaria um projeto existente no Android Studio?`,
        respostas: [
            "a) Clicando em 'File' > 'Import Project' e selecionando o diretório do projeto existente.",
            "b) Digitando 'import project' na barra de pesquisa e selecionando 'Import Project' no menu suspenso.",
            "c) Clicando em 'Run' > 'Import Project' e selecionando um modelo de projeto pré-definido.",
            "d) Clicando em 'Tools' > 'Import Project' e preenchendo um formulário de importação de projetos."
        ],
        correta: 0,
        explicacaoResposta: "Para importar um projeto existente no Android Studio, você usaria a opção 'a', que permite selecionar o diretório do projeto existente e importá-lo para o Android Studio."
    }


];

// Função para embaralhar as perguntas
function embaralharPerguntas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
}

// Antes de mostrar a primeira pergunta, embaralhe o array de perguntas
embaralharPerguntas(perguntas);


let indicePerguntaAtual = 0;
let pontuacao = 0;
let erroAtual = 0;

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

// 

// 
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
            erroAtual++;
            const explicacaoResposta = perguntaAtual.explicacaoResposta;
            const respostaCorreta = perguntaAtual.respostas[perguntaAtual.correta];
            feedbackElement.innerHTML = `Resposta INCORRETA animal!!! 😘<br><br> A resposta correta era: ${respostaCorreta}.<br><br><span style = "color:white">${explicacaoResposta}</span>`;
            feedbackElement.classList.remove("acerto");
            feedbackElement.classList.add("erro");
        }

        document.getElementById("proxima-pergunta").style.display = "block";
    } else {
        alert("Por favor, selecione uma resposta.");
    }

    // Atualizar pontuação atual
    document.getElementById("pontuacao-atual").textContent = pontuacao;
    document.getElementById("erro-atual").textContent = erroAtual;
}

mostrarPergunta();
document.getElementById("verificar-resposta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);


mostrarPergunta();
document.getElementById("verificar-resposta").addEventListener("click", verificarResposta);

// document.getElementById("proxima-pergunta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);
