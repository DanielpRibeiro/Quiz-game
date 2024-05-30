const perguntas = [

    {
        pergunta: "Qual método é usado para selecionar um elemento HTML pelo seu ID em JavaScript?",
        respostas: ["a) getElementById()", "b) selectById()", "c) querySelector()", "d) getID()"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual propriedade é usada para acessar ou alterar o conteúdo de um elemento HTML em JavaScript?",
        respostas: ["a) innerHTML", "b) textContent", "c) content", "d) innerText"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual evento JavaScript é acionado quando um usuário clica em um elemento HTML?",
        respostas: ["a) mouseover", "b) click", "c) keypress", "d) submit"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual método JavaScript é usado para adicionar um novo elemento HTML a um documento?",
        respostas: ["a) addElement()", "b) createElement()", "c) appendElement()", "d) insertElement()"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual propriedade é usada para definir o estilo de um elemento HTML em JavaScript?",
        respostas: ["a) style", "b) css", "c) class", "d) design"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: ["a) let x = 5;", "b) var x = 5;", "c) const x = 5;", "d) int x = 5;"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual dos seguintes métodos converte uma string em um número inteiro em JavaScript?",
        respostas: ["a) parseInt()", "b) toInt()", "c) stringToInt()", "d) parseNumber()"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript, que verifica tanto o valor quanto o tipo de dado?",
        respostas: ["a) ==", "b) ===", "c) =", "d) !=="],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a maneira correta de comentar uma única linha em JavaScript?",
        respostas: ["a) <!-- Comentário -->", "b) // Comentário", "c) /* Comentário */", "d) ** Comentário **"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: ["a) pop()", "b) push()", "c) remove()", "d) shift()"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual método JavaScript é usado para enviar dados de um formulário para um servidor web?",
        respostas: ["a) sendData()", "b) postForm()", "c) fetch()", "d) submit()"],
        correta: 3,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual evento JavaScript é acionado quando um formulário é enviado?",
        respostas: ["a) formSubmit", "b) formSend", "c) formSubmitEvent", "d) submit"],
        correta: 3,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual método JavaScript é usado para fazer uma solicitação HTTP GET?",
        respostas: ["a) fetch()", "b) requestGET()", "c) sendGET()", "d) get()"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a finalidade principal do Bootstrap?",
        respostas: ["a) Criar banco de dados", "b) Estilizar elementos HTML", "c) Escrever scripts em JavaScript", "d) Realizar operações matemáticas"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a grade básica do sistema de grid do Bootstrap?",
        respostas: ["a) 10 colunas", "b) 12 colunas", "c) 8 colunas", "d) 6 colunas"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual classe é usada para criar um botão em Bootstrap?",
        respostas: ["a) .button", "b) .btn", "c) .link", "d) .button-link"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual classe é usada para criar um contêiner responsivo que se ajusta ao tamanho da tela?",
        respostas: ["a) .container-fixed", "b) .container-fluid", "c) .container-responsive", "d) .container"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual classe é usada para criar uma barra de navegação responsiva em Bootstrap?",
        respostas: ["a) .navbar", "b) .nav", "c) .nav-bar", "d) .nav-header"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a saída do seguinte código JavaScript?\n\n```javascript\nvar element = document.getElementById('demo');\nconsole.log(element);\n```",
        respostas: ["a) null", "b) 'Hello, World!'", "c) undefined", "d) TypeError"],
        correta: 0,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a saída do seguinte código JavaScript?\n\n```javascript\nvar element = document.querySelector('.demo');\nconsole.log(element.innerHTML);\n```",
        respostas: ["a) null", "b) undefined", "c) 'Hello, World!'", "d) ReferenceError"],
        correta: 1,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a saída do seguinte código JavaScript?\n\n```javascript\nvar element = document.createElement('div');\nconsole.log(element.textContent);\n```",
        respostas: ["a) 'Hello, World!'", "b) null", "c) undefined", "d) TypeError"],
        correta: 2,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual é a saída do seguinte código JavaScript?\n\n```javascript\nvar element = document.querySelector('.demo');\nconsole.log(element.innerText);\n```",
        respostas: ["a) null", "b) TypeError", "c) 'Hello, World!'", "d) undefined"],
        correta: 3,
        explicacaoResposta: ""
    },
    {
        pergunta: "Qual método é usado para selecionar o elemento `<h1>` com o ID 'demo'?",
        respostas: ["a) querySelector()", "b) getElementById()", "c) getElementsByClassName()", "d) getElementsByTagName()"],
        correta: 1,
        explicacaoResposta: "O método `getElementById()` é usado para selecionar o elemento com o ID especificado."
    },
    {
        pergunta: "Qual propriedade é usada para definir o conteúdo de texto do elemento `<h1 id='x'>`\n document.getElementById('x').******** = 'Hello, World!';?",
        respostas: ["a) innerHTML", "b) textContent", "c) innerText", "d) outerHTML"],
        correta: 2,
        explicacaoResposta: "A propriedade `innerText` é usada para definir o conteúdo de texto do elemento."
    },
    
    {
        pergunta: "Como o JavaScript define o conteúdo de texto para exibir o resultado da soma?",
        respostas: ["a) document.getElementById('soma').textContent", "b) document.getElementById('soma').innerHTML", "c) document.getElementById('soma').innerText", "d) document.getElementById('soma').outerHTML"],
        correta: 2,
        explicacaoResposta: "A propriedade innerText é usada para definir o conteúdo de texto do elemento com o ID 'soma'."
    },
    {
        pergunta: "Dado o seguinte trecho de código, qual será o valor exibido para a variável `soma` se `num1` for redefinido como uma string '10'?\n\n```javascript\nvar num1 = '10';\nvar num2 = 5;\nvar soma = num1 + num2;\ndocument.getElementById('soma').innerText = \"Soma: \" + num1 + \" + \" + num2 + \" = \" + soma;\n```",
        respostas: ["a) Soma: 10 + 5 = 15", "b) Soma: 10 + 5 = 105", "c) Soma: 10 + 5 = NaN", "d) Soma: 10 + 5 = undefined"],
        correta: 1,
        explicacaoResposta: "Quando `num1` é uma string e `num2` é um número, o operador `+` concatena os valores, resultando em '105'."
    },
    {
        pergunta: "Qual será a saída do seguinte código considerando que `num1` e `num2` são ambos strings, ou seja, `var num1 = '10'; var num2 = '5';`?\n\n```javascript\nvar soma = num1 + num2;\nvar subtracao = num1 - num2;\ndocument.getElementById('soma').innerText = \"Soma: \" + num1 + \" + \" + num2 + \" = \" + soma;\ndocument.getElementById('subtracao').innerText = \"Subtração: \" + num1 + \" - \" + num2 + \" = \" + subtracao;\n```",
        respostas: ["a) Soma: 10 + 5 = 15; Subtração: 10 - 5 = 5", "b) Soma: 10 + 5 = 105; Subtração: 10 - 5 = 5", "c) Soma: 10 + 5 = 105; Subtração: 10 - 5 = NaN", "d) Soma: 10 + 5 = NaN; Subtração: 10 - 5 = NaN"],
        correta: 2,
        explicacaoResposta: "Quando `num1` e `num2` são strings, o operador `+` concatena as strings resultando em '105', e o operador `-` converte as strings para números e realiza a subtração, resultando em 5."
    },
    {
        pergunta: "Considere o código abaixo. Qual é a saída exibida no console e no elemento com ID 'soma'?\n\n```javascript\nvar num1 = 10;\nvar num2 = '5';\nvar soma = num1 + Number(num2);\nconsole.log(soma);\ndocument.getElementById('soma').innerText = \"Soma: \" + num1 + \" + \" + num2 + \" = \" + soma;\n```",
        respostas: ["a) Soma: 10 + 5 = 15; 15 no console", "b) Soma: 10 + 5 = 105; 105 no console", "c) Soma: 10 + 5 = 15; 105 no console", "d) Soma: 10 + 5 = 105; 15 no console"],
        correta: 0,
        explicacaoResposta: "A função `Number(num2)` converte a string '5' para o número 5, resultando em uma soma aritmética correta. O console e o elemento exibem 15."
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


