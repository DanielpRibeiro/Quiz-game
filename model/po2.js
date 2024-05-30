const perguntas = [

    {
        pergunta: `Qual será a saída do seguinte código Python?
 
      for i in range(3):
          print(i)`,
        respostas: ["a) 0 1 2 3", "b) 1 2 3", "c) 1 2", "d) Erro", "e) 0 1 2"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 4,
        explicacaoResposta: 'O loop for itera de 0 a 2 (inclusive) e imprime cada valor de i.',
    },
    {
        pergunta: "Qual será a saída do seguinte código Python?\n\ni=0;\nwhile i < 5:\n  print(i)\n  i+=1\n ",
        respostas: ["a) 0 1 2 3 4 ", "b) 0 1 1 2 2 3 3 4 4 5", "c) 0 1 2 3 4", "d) 0 1 1 2 2 3 3 4 4 5 5"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual será a saída do seguinte código Python?\n\nfor i in range(10, 0, -2):\n    print(i)",
        respostas: ["a) 10 8 6 4 2 0", "b) 10 9 8 7 6 5 4 3 2 1 0", "c) 10 8 6 4 2", "d) 10 9 7 5 3 1"],
        correta: 2,
        explicacaoResposta: "O loop for itera de 10 até 1 (não incluindo 0), decrementando de 2 em 2. Portanto, a saída correta é 10, 8, 6, 4, 2."
    },
    {
        pergunta: "Qual é a saída do seguinte código?",
        respostas: [
            "a) maior que 5",
            "b) igual a 5",
            "c) menor que 5",
            "d) Nenhuma das anteriores"
        ],
        correta: 1,
        explicacaoResposta: ""
    },
   
      
    {
        pergunta: "Qual é a saída do seguinte código? \ncase = 'azul'\nmatch x\ncase 'vermelho':\nprint('Pare')\ncase 'amarelo':\nprint('Atenção')\ncase 'verde':\nprint('Siga')\ncase _:\nprint('Cor inválida')",
        respostas: [
            "a) Pare",
            "b) Atenção",
            "c) Siga",
            "d) Cor inválida"
        ],
        correta: 3,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a finalidade do trecho de código abaixo no contexto do bot Telegram?\n\n@bot.message_handler(commands=['obrigado'])\ndef opcao1(mensagem):\n    bot.reply_to(mensagem, 'Por nada!! Estamos aqui para ajudar :)')",
        respostas: ["a) Registrar comandos de agradecimento enviados pelos usuários", "b) Responder automaticamente com uma mensagem de agradecimento quando o comando '/obrigado' é enviado", "c) Encaminhar mensagens de agradecimento para outros usuários", "d) Iniciar uma função para finalizar o chat quando um agradecimento é recebido"],
        correta: 1,
        explicacaoResposta: ""
    },
    
    {
        pergunta: "O que o trecho de código abaixo realiza no contexto do bot Telegram?\n\n@bot.message_handler(commands=['obrigado'])\ndef opcao1(mensagem):\n    bot.reply_to(mensagem, 'Por nada!! Estamos aqui para ajudar :)')",
        respostas: ["a) Registrar comandos de agradecimento enviados pelos usuários", "b) Responder automaticamente com uma mensagem de agradecimento quando o comando '/obrigado' é enviado", "c) Encaminhar mensagens de agradecimento para outros usuários", "d) Iniciar uma função para finalizar o chat quando um agradecimento é recebido"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "O que o trecho de código abaixo realiza no contexto do bot Telegram?\n\n@bot.message_handler(commands=['opcao3'])\ndef opcao1(mensagem):\n    bot.reply_to(mensagem, '''Informações Gerais:\n\nEscolha uma opção para continuar (Clique no item):\n/disciplina Verificar disciplina cursada\n/horario_aula Verificar Horário de aula\n/dia_aula Verificar dia de aula\n\n/opcao4 Encerrar Chat\n\nResponder qualquer outra coisa não irá funcionar''')",
        respostas: ["a) Inicia uma função para encerrar o chat", "b) Responde com informações gerais e apresenta opções adicionais ao usuário", "c) Encaminha mensagens para outros usuários", "d) Registra comandos relacionados à disciplina do curso"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a finalidade do comando `/horario_aula` no contexto do bot Telegram?",
        respostas: ["a) Verificar o horário de aula do usuário", "b) Encaminhar mensagens para outros usuários", "c) Responder com informações gerais e apresentar opções adicionais ao usuário", "d) Iniciar uma função para encerrar o chat"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "O que acontece quando um usuário envia uma mensagem que não corresponde a nenhum comando reconhecido pelo bot?",
        respostas: ["a) A mensagem é encaminhada para um administrador do bot", "b) O bot responde com uma mensagem padrão de erro", "c) Nada acontece, a mensagem é simplesmente ignorada", "d) O bot responde automaticamente com uma mensagem de boas-vindas"],
        correta: 2,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual será a saída do seguinte código Python?\n\ni=0;\nwhile i < 5:\n  print(i)\n  i+=1\n ",
        respostas: ["a) 0 1 2 3 4 ", "b) 0 1 1 2 2 3 3 4 4 5", "c) 0 1 2 3 4", "d) 0 1 1 2 2 3 3 4 4 5 5"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual será a saída do seguinte código Python?\n\nx = 10\nwhile x > 0:\n    print(x)\n    x -= 2\n",
        respostas: ["a) 10 8 6 4 2 ", "b) 10 9 8 7 6 5 4 3 2 1 ", "c) 2 4 6 8 10 ", "d) 1 2 3 4 5 6 7 8 9 10 "],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a saída do seguinte código Python?\n\nfor i in range(3):\n    for j in range(2):\n        print(i, j)\n",
        respostas: ["a) (0, 0) (0, 1) (1, 0) (1, 1) (2, 0) (2, 1) ", "b) 0 1 2 0 1 2 ", "c) 0 0 1 1 2 2 ", "d) (0, 0) (1, 1) (2, 2) "],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual será a saída do seguinte código Python?\n\nx = 5\nif x > 5:\n    print('Maior que 5')\nelif x == 5:\n    print('Igual a 5')\nelse:\n    print('Menor que 5')\n",
        respostas: ["a) Maior que 5 ", "b) Igual a 5 ", "c) Menor que 5 ", "d) Igual a 5 e Menor que 5 "],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é o valor final de `x` após a execução do seguinte código Python?\n\nx = 0\nfor i in range(1, 6):\n    x += i\n",
        respostas: ["a) 10 ", "b) 15 ", "c) 25 ", "d) 30 "],
        correta: 1,
        explicacaoResposta: ""
    }
    
    // {
    //     pergunta: " pergunta ",
    //     respostas: ["a)  ", "b) ", "c) ", "d) "],
    //     correta: 0,
    //     explicacaoResposta: ""
    // }
    




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

// armazenar as respostas erradas
const perguntasErradas = [];


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

// ******************************************************************************

// tentar buscar separar a parte abaixo em um unico arquivo, facilitar manutenção.

// ******************************************************************************


function proximaPergunta() {
    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
        document.getElementById("feedback").textContent = "";
        document.getElementById("proxima-pergunta").style.display = "none";
    } else {
        // Exibir tela de finalização com pontuação
        document.getElementById("quiz-container").innerHTML = `
        <div style='text-align:center; justify-content:center; display:flex; flex-direction:column'><h2>Questionário Finalizado!</h2>
        <p>Sua pontuação foi: ${pontuacao} de ${perguntas.length}</p>
        <button style='text-align:center; justify-content:center;' class='full-button' onclick="location.reload()">Recomeçar Quiz</button><br>
        <button  style='text-align:center; justify-content:center;' onclick="finalizarQuiz()">Ver perguntas erradas</button>
        <div id="resultado" style="display: none;"></div>
        </div>`;
        const tipoMensagem = getTipoMensagem(pontuacao);
        const mensagem = mensagensPersonalizadas[tipoMensagem];

        document.getElementById("titulo-final").textContent = mensagem.titulo;
        document.getElementById("texto-final").textContent = mensagem.texto;

        finalizarQuiz(); // Chama a função para exibir perguntas erradas
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
            feedbackElement.innerHTML = `Resposta INCORRETA animal!!! 😘<br><br> A resposta correta era: ${respostaCorreta}.<br><br><span style="color:white">${explicacaoResposta}</span>`;
            feedbackElement.classList.remove("acerto");
            feedbackElement.classList.add("erro");

            // Adiciona a pergunta atual ao vetor de perguntas erradas
            perguntasErradas.push(perguntaAtual);
        }

        document.getElementById("proxima-pergunta").style.display = "block";
    } else {
        alert("Por favor, selecione uma resposta.");
    }

    // Atualizar pontuação atual
    document.getElementById("pontuacao-atual").textContent = pontuacao;
    document.getElementById("erro-atual").textContent = erroAtual;
}

function exibirPerguntasErradas() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.style.display = "block";
    resultadoElement.innerHTML = "<h2>Perguntas Erradas</h2><br><h3 style='color:yellow';>Toma aqui seu conhecimento 🧠<h3><br><img src='../img/kkk.png' style='border-radius:360px'></img>";

    perguntasErradas.forEach((pergunta, index) => {
        resultadoElement.innerHTML += `
            <div>
                <p><strong>${index + 1}. ${pergunta.pergunta}</strong></p>
                <ul>
                    ${pergunta.respostas.map((resposta, i) => `<li>${resposta}</li>`).join('')}
                </ul>
                <p><strong>Resposta correta:</strong> ${pergunta.respostas[pergunta.correta]}</p>
                <p><strong>Explicação:</strong> ${pergunta.explicacaoResposta}</p>
            </div>
        `;
    });
}

function finalizarQuiz() {
    // Exibir tela de finalização com pontuação
    // document.getElementById("quiz-container").innerHTML += `
    //     // <button onclick="mostrarErros()">Mostrar Perguntas Erradas</button> `;

    exibirPerguntasErradas();
    // Outras ações ao finalizar o quiz, se necessário
}
function mostrarErros() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.style.display = "block";
}


mostrarPergunta();
document.getElementById("verificar-resposta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);


mostrarPergunta();
document.getElementById("verificar-resposta").addEventListener("click", verificarResposta);

// document.getElementById("proxima-pergunta").addEventListener("click", verificarResposta);
document.getElementById("proxima-pergunta").addEventListener("click", proximaPergunta);


