const perguntas = [
    {
        pergunta: "Qual elemento HTML é utilizado para criar um formulário de cadastro em uma página web?",
        respostas: ["a) <form>", "b) <input>", "c) <section>", "d) <div>", "e) <button>"],
        correta: 0,
        explicacaoResposta: "O elemento <form> é utilizado para criar um formulário de cadastro em uma página web."
    },
    {
        pergunta: "Como você criaria um campo de entrada de texto com validação de e-mail em HTML?",
        respostas: ["a) <input type='email' required>", "b) <input type='text' required>", "c) <input type='email' pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'>", "d) <input type='text' pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'>", "e) <input type='email'>"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é correta porque utiliza o atributo 'type' com o valor 'email' e o atributo 'required' para garantir que o campo não seja deixado em branco."
    },
    {
        pergunta: "Qual elemento HTML é usado para criar um campo de seleção múltipla em um formulário?",
        respostas: ["a) <input type='multiselect'>", "b) <select multiple>", "c) <input type='select' multiple>", "d) <select>", "e) <input type='select'>"],
        correta: 1,
        explicacaoResposta: "A opção 'b' é a correta porque utiliza o elemento '<select>' com o atributo 'multiple' para permitir a seleção múltipla de opções."
    },
    {
        pergunta: "Como você criaria um campo de entrada de número que permite apenas valores entre 1 e 100 em HTML?",
        respostas: ["a) <input type='number' min='1' max='100'>", "b) <input type='number' min='0' max='100'>", "c) <input type='range' min='1' max='100'>", "d) <input type='text' pattern='/^[1-9][0-9]?$|^100$/' title='Entre 1 e 100'>", "e) <input type='number'>"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é correta porque utiliza o atributo 'type' com o valor 'number' e os atributos 'min' e 'max' para definir o intervalo permitido."
    },
    {
        pergunta: "Qual opção de código HTML é correta para criar um campo de entrada de texto com validação de e-mail?",
        respostas: ["a) <input type='email' required>", "b) <input type='text' required>", "c) <input type='email' pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'>", "d) <input type='text' pattern='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'>", "e) <input type='email'>"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é correta porque utiliza o atributo 'type' com o valor 'email' e o atributo 'required' para garantir que o campo não seja deixado em branco."
    },
    {
        pergunta: "Como você criaria um campo de entrada de senha que requer pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um número?",
        respostas: ["a) <input type='password' minlength='8' pattern='(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required>", "b) <input type='password' minlength='8' required>", "c) <input type='password' pattern='(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required>", "d) <input type='password' pattern='[a-zA-Z0-9]{8,}' required>"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é correta porque utiliza o atributo 'type' com o valor 'password', os atributos 'minlength' para especificar o comprimento mínimo e 'pattern' para definir uma expressão regular que valida a senha."
    },
    {
        pergunta: "Qual elemento HTML é utilizado para criar um campo para selecionar uma opção de uma lista pré-definida?",
        respostas: ["a) <input type='multiselect'>", "b) <select multiple>", "c) <input type='select' multiple>", "d) <select>"],
        correta: 1,
        explicacaoResposta: "A opção 'b' é correta porque utiliza o elemento <select> com o atributo 'multiple' para permitir a seleção múltipla de opções."
    },
    {
        pergunta: "Como você criaria um campo de entrada de número que permite apenas valores entre 1 e 100 em HTML?",
        respostas: ["a) <input type='number' min='1' max='100'>", "b) <input type='number' min='0' max='100'>", "c) <input type='range' min='1' max='100'>", "d) <input type='text' pattern='/^[1-9][0-9]?$|^100$/' title='Entre 1 e 100'>"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é correta porque utiliza o atributo 'type' com o valor 'number' e os atributos 'min' e 'max' para definir o intervalo permitido."
    },
    {
        pergunta: "Qual técnica é mais eficaz para criar um layout complexo e responsivo em CSS?",
        respostas: ["a) Floats", "b) Flexbox", "c) Inline-block", "d) Grid"],
        correta: 1,
        explicacaoResposta: "A opção 'b' é a correta porque o Flexbox é uma técnica poderosa para criar layouts complexos e responsivos, permitindo um controle mais preciso sobre a disposição dos elementos."
    },
    {
        pergunta: "Como você faria para centralizar um elemento verticalmente em CSS?",
        respostas: ["a) Usando a propriedade vertical-align", "b) Usando a propriedade margin com valor 'auto'", "c) Usando a propriedade justify-content", "d) Usando a propriedade align-items"],
        correta: 3,
        explicacaoResposta: "A opção 'd' é a correta porque a propriedade align-items com valor 'center' é utilizada para centralizar elementos verticalmente em um container flexível."
    },
    {
        pergunta: "Qual técnica é mais adequada para criar um design fluido que se ajusta automaticamente ao tamanho da tela, mantendo proporções adequadas?",
        respostas: ["a) Media queries", "b) Flexbox", "c) Grid", "d) Floats"],
        correta: 0,
        explicacaoResposta: "A opção 'a' é a correta porque as media queries permitem criar regras CSS que se aplicam somente quando certas condições (como largura da tela) são atendidas, permitindo criar layouts fluidos e responsivos."
    },
    {
        pergunta: "Como você faria para aplicar uma animação CSS em um elemento quando ele é clicado?",
        respostas: ["a) Usando a pseudo-classe :hover", "b) Usando a pseudo-classe :focus", "c) Usando a pseudo-classe :active", "d) Usando a pseudo-classe :visited"],
        correta: 2,
        explicacaoResposta: "A opção 'c' é a correta porque a pseudo-classe :active é aplicada a um elemento quando ele é clicado, permitindo aplicar estilos ou animações correspondentes."
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
