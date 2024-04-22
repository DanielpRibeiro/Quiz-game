const perguntas = [
    {
        pergunta: "Para gerar uma lista de itens em Java Android qual exemplo de código abaixo ilustra como criar tal lista?",
        respostas: [
            "a) ListView listView = findViewById(R.id.listview);",
            "b) ListIdView listIdView = findViewById(R.id.listidview);",
            "c) ListView listView = findListViewById(R.id.listview);"
        ],
        correta: 0,
        explicacaoResposta: "O código correto para criar uma lista em Java Android é o exemplo a), pois utiliza o método findViewById() para obter a referência à ListView pelo seu ID."
    },
    {
        pergunta: "Em Java Android o que precisamos pra montar uma lista em um arquivo de layout?",
        respostas: [
            "a) Uma UITableView",
            "b) Uma ListView",
            "c) Um Adapter"
        ],
        correta: 1,
        explicacaoResposta: "Para montar uma lista em um arquivo de layout em Java Android, precisamos apenas de uma ListView, que é o elemento responsável por exibir uma lista de itens."
    },
    {
        pergunta: "Em uma lista de itens em Java Android como descubro em qual linha o usuário clicou?",
        respostas: [
            "a) Através do método didSelectRowAt",
            "b) Pelo método cellForRow",
            "c) Através do método setOnItemClickListener"
        ],
        correta: 2,
        explicacaoResposta: "Para descobrir em qual linha o usuário clicou em uma lista de itens em Java Android, utilizamos o método setOnItemClickListener, que permite definir um listener para lidar com cliques em itens da lista."
    },
    {
        pergunta: "Para que seja possível conectar a uma API-REST na internet é necessário adicionar um permissão de acesso a internet, como esta permissão é feita?",
        respostas: [
            "a) No arquivo AndroidManifest.xml",
            "b) <uses-permission android:name=\"android.permission.INTERNET\" />",
            "c) No arquivo AndroidConnections.xml"
        ],
        correta: 0,
        explicacaoResposta: "A permissão de acesso à internet para conectar a uma API-REST é feita no arquivo AndroidManifest.xml, onde é necessário incluir a permissão <uses-permission android:name=\"android.permission.INTERNET\" />."
    },
    {
        pergunta: "Uma das funções de fazer uma classe implementar a interface Serializable é para:",
        respostas: [
            "a) Passar um objeto de uma activity para outra",
            "b) É exigido no protocolo SOAP",
            "c) Para comunicação por Docker é necessário"
        ],
        correta: 0,
        explicacaoResposta: "Uma das funções de fazer uma classe implementar a interface Serializable é para passar um objeto de uma activity para outra em Java Android, permitindo a serialização e desserialização de objetos."
    },
    {
        pergunta: "Alguns dos protocolos que podemos citar para comunicação via API-REST com o servidor podemos citar:",
        respostas: [
            "a) GET",
            "b) POST",
            "c) DELETE"
        ],
        correta: 0,
        explicacaoResposta: "Alguns dos protocolos que podemos citar para comunicação via API-REST com o servidor são GET, POST e DELETE. Esses protocolos são utilizados para realizar operações como obter dados, enviar dados e excluir dados, respectivamente."
    },
    {
        pergunta: "Algumas das dependências que podemos adicionar ao projeto Java Android para fazer a comunicação via API-REST podemos citar:",
        respostas: [
            "a) implementation(\"com.squareup.okhttp3:okhttp:3.10.0\")",
            "b) implementation(\"com.google.code.gson:gson:2.8.8\")",
            "c) implementation(\"com.google.code.json:json:2.8.8\")"
        ],
        correta: 1,
        explicacaoResposta: "Algumas das dependências que podemos adicionar ao projeto Java Android para fazer a comunicação via API-REST são a biblioteca OkHttp (com.squareup.okhttp3:okhttp), para realizar requisições HTTP, e a biblioteca Gson (com.google.code.gson:gson), para trabalhar com JSON de forma mais conveniente."
    },
    {
        pergunta: "Um exemplo de cabeçalho ao incluir numa requisição API-REST é:",
        respostas: [
            "a) \"application/json; charset=utf-8\"",
            "b) \"application/gson; charset=utf-8\"",
            "c) \"application/gson; charset=utf-16\""
        ],
        correta: 0,
        explicacaoResposta: "Um exemplo de cabeçalho ao incluir numa requisição API-REST é \"application/json; charset=utf-8\", que indica que o corpo da requisição está em formato JSON e o charset é UTF-8, uma codificação de caracteres."
    },
    {
        pergunta: "O protocolo de comunicação com o servidor é baseado em:",
        respostas: [
            "a) Request",
            "b) Response",
            "c) Forward"
        ],
        correta: 1,
        explicacaoResposta: "O protocolo de comunicação com o servidor é baseado em Response, pois o servidor responde às requisições feitas pelo cliente com os dados solicitados ou com uma mensagem de erro."
    },
    {
        pergunta: "Uma biblioteca externa contém uma classe Gson, para qual finalidade a usamos o projeto de comunicação via API-REST.",
        respostas: [
            "a) Converte GSON para JSON",
            "b) Converte String para Gson",
            "c) Converte uma instância de uma classe para o formato JSON"
        ],
        correta: 0,
        explicacaoResposta: "A classe Gson é utilizada para converter objetos Java para JSON e vice-versa em projetos de comunicação via API-REST."
    },
    {
        pergunta: "Qual a função da classe MediaType na comunicação via API-REST em um projeto Java Android?",
        respostas: [
            "a) É responsável por montar a requisição em si",
            "b) É utilizado para compor o corpo da requisição",
            "c) É utilizado para compor o cabeçalho da requisição"
        ],
        correta: 2,
        explicacaoResposta: "A classe MediaType é utilizada para compor o cabeçalho da requisição, especificando o tipo de mídia que está sendo enviada ou solicitada."
    },
    {
        pergunta: "A classe OkHttpClient é utilizada no projeto Java Android para comunicação via API-REST no servidor. Que função esta classe desempenha?",
        respostas: [
            "a) Executar a requisição ao servidor",
            "b) Montar a requisição ao servidor",
            "c) Pegar a resposta vinda do servidor"
        ],
        correta: 0,
        explicacaoResposta: "A classe OkHttpClient é responsável por executar a requisição ao servidor em projetos Java Android de comunicação via API-REST."
    },
    {
        pergunta: "Qual a função da classe Request usada no projeto Java Android em uma API-REST?",
        respostas: [
            "a) Montar a requisição",
            "b) Fazer a requisição",
            "c) Pegar a resposta da requisição"
        ],
        correta: 0,
        explicacaoResposta: "A classe Request é utilizada para montar a requisição que será enviada ao servidor em um projeto Java Android de comunicação via API-REST."
    },
    {
        pergunta: "Em um projeto Java Android qual a função da classe Response utilizada no projeto para comunicação via API-REST?",
        respostas: [
            "a) Capturar a resposta do servidor",
            "b) Montar a requisição",
            "c) Fazer a requisição"
        ],
        correta: 0,
        explicacaoResposta: "A classe Response é utilizada para capturar a resposta enviada pelo servidor em um projeto Java Android de comunicação via API-REST."
    },
    {
        pergunta: "Para pegar a resposta do corpo do response do servidor qual classe usamos?",
        respostas: [
            "a) ResponseBody",
            "b) Response",
            "c) ResponseMedia"
        ],
        correta: 0,
        explicacaoResposta: "Para acessar o corpo da resposta do servidor em um projeto Java Android de comunicação via API-REST, utilizamos a classe ResponseBody."
    },
    {
        pergunta: "Quais são os parâmetros necessários para que seja possível montar uma requisição ao servidor?",
        respostas: [
            "a) Uma URL para a rota ao servidor",
            "b) Um cabeçalho para a requisição",
            "c) Definir o tipo da requisição (exemplo: get, post...)"
        ],
        correta: 2,
        explicacaoResposta: "Para montar uma requisição ao servidor em um projeto Java Android de comunicação via API-REST, é necessário definir o tipo da requisição (GET, POST, etc.)."
    },
    {
        pergunta: "Para montarmos uma requisição do tipo POST do que precisamos?",
        respostas: [
            "a) Uma URL para a rota ao servidor",
            "b) Um cabeçalho para a requisição",
            "c) O corpo da requisição, um objeto JSON por exemplo"
        ],
        correta: 2,
        explicacaoResposta: "Para montar uma requisição do tipo POST em um projeto Java Android de comunicação via API-REST, é necessário incluir o corpo da requisição, que pode ser um objeto JSON, por exemplo."
    },
    {
        pergunta: "Ao iniciarmos um projeto de uma API-REST em Node JS qual comando usamos para criar o nosso projeto inicialmente?",
        respostas: [
            "a) npm init",
            "b) npm start",
            "c) nodejs start"
        ],
        correta: 0,
        explicacaoResposta: "Para iniciar um projeto de uma API-REST em Node JS, utilizamos o comando npm init para criar o projeto inicialmente."
    },
    {
        pergunta: "Para baixarmos a biblioteca do express no nosso projeto API-REST em Node JS qual comando utilizamos?",
        respostas: [
            "a) npm install --save express",
            "b) node install --save express",
            "c) npm download --save express"
        ],
        correta: 0,
        explicacaoResposta: "Para baixar a biblioteca do Express em um projeto API-REST em Node JS, utilizamos o comando npm install --save express."
    },
    {
        pergunta: "Para não precisarmos reiniciar o servidor a cada alteração qual biblioteca precisamos instalar?",
        respostas: [
            "a) Express",
            "b) Nodemon",
            "c) Morgan"
        ],
        correta: 1,
        explicacaoResposta: "Para evitar reiniciar o servidor a cada alteração em um projeto Node JS, utilizamos a biblioteca Nodemon."
    },
    {
        pergunta: "O que podemos afirmar sobre a biblioteca do Nodemon?",
        respostas: [
            "a) Para instalar usamos o seguinte comando: npm install --save-dev nodemon",
            "b) Garante que a cada alteração no projeto não é mais necessário reiniciar o servidor toda hora",
            "c) Para que funcione corretamente uma modificação deverá ser feita no arquivo package.json"
        ],
        correta: 0,
        explicacaoResposta: "Para instalar o Nodemon, utilizamos o comando npm install --save-dev nodemon. Ele garante que a cada alteração no projeto, não é mais necessário reiniciar o servidor toda hora."
    },
    {
        pergunta: "Por padrão de projeto visto em sala de aula qual deverá ser o primeiro arquivo a ser executado em um projeto API-REST usando NodeJS?",
        respostas: [
            "a) app.js",
            "b) server.js",
            "c) package.json"
        ],
        correta: 1,
        explicacaoResposta: "Por padrão de projeto, o primeiro arquivo a ser executado em um projeto API-REST usando NodeJS é o server.js."
    },
    {
        pergunta: "Qual configuração no arquivo package.json precisamos fazer para que o nodemon funcione corretamente?",
        respostas: [
            "a) Insira o código na tag scripts: 'start': 'nodemon server.js'",
            "b) Insira o código na tag startup: 'start': 'nodemon server.js'",
            "c) Insira o código na tag scripts: 'start': 'nodemon app.js'"
        ],
        correta: 0,
        explicacaoResposta: "Para que o nodemon funcione corretamente, devemos inserir o código na tag scripts do arquivo package.json: 'start': 'nodemon server.js'."
    },
    {
        pergunta: "Qual a função da biblioteca morgan em um projeto API-REST em Node JS?",
        respostas: [
            "a) É um componente para conexão ao banco",
            "b) É um depurador de código",
            "c) É um componente para programação hibrida"
        ],
        correta: 1,
        explicacaoResposta: "A biblioteca Morgan em um projeto API-REST em Node JS é utilizada como um depurador de código, registrando as requisições HTTP feitas ao servidor."
    },
    {
        pergunta: "Para instalar a biblioteca do morgan ao seu projeto qual comando utilizamos?",
        respostas: [
            "a) npm install --save morgan",
            "b) node install --save morgan",
            "c) npm download --save morgan"
        ],
        correta: 0,
        explicacaoResposta: "Para instalar a biblioteca do morgan em um projeto NodeJS, utilizamos o comando npm install --save morgan."
    },
    {
        pergunta: "Qual a finalidade da biblioteca body-parser em um projeto NodeJS para API-REST?",
        respostas: [
            "a) Seve para processar imagens que possam vir no corpo da requisição",
            "b) Serve para requisições get",
            "c) Parsear o conteúdo do corpo da requisição no formato de json"
        ],
        correta: 2,
        explicacaoResposta: "A biblioteca body-parser em um projeto NodeJS para API-REST é utilizada para parsear o conteúdo do corpo da requisição no formato JSON."
    },
    {
        pergunta: "Qual comando utilizamos para instalar o body-parser ao nosso projeto NodeJs para API-REST?",
        respostas: [
            "a) npm download --save body-parser",
            "b) npm install --save body-parser",
            "c) node install --save body-parser"
        ],
        correta: 1,
        explicacaoResposta: "Para instalar o body-parser em um projeto NodeJS para API-REST, utilizamos o comando npm install --save body-parser."
    },
    {
        pergunta: "O que podemos afirmar sobre a biblioteca cors?",
        respostas: [
            "a) Para instala-la usamos o seguinte comando: npm install cors",
            "b) Serve para manter a compatibilidade de comunicação entre diferentes plataformas",
            "c) Pode ser usada dentro do projeto usando o seguinte comando: const cors = require('cors');"
        ],
        correta: 0,
        explicacaoResposta: "Para instalar a biblioteca cors em um projeto NodeJS, utilizamos o comando npm install cors."
    },
    {
        pergunta: "Como fazemos para instalar a biblioteca para dar suporte ao mysql ao nosso projeto NodeJS para API-REST?",
        respostas: [
            "a) npm install --save mysql",
            "b) npm download --save mysql",
            "c) node install --save mysql"
        ],
        correta: 0,
        explicacaoResposta: "Para instalar a biblioteca para dar suporte ao MySQL em um projeto NodeJS para API-REST, utilizamos o comando npm install --save mysql."
    },
    {
        pergunta: "Qual comando usamos para subir nossa aplicação NodeJS API-REST no servidor que já foi instalada a biblioteca para que a cada modificação do projeto não é necessário reiniciar o servidor?",
        respostas: [
            "a) npm start",
            "b) node start",
            "c) npmjs start"
        ],
        correta: 0,
        explicacaoResposta: "Para subir nossa aplicação NodeJS API-REST no servidor, utilizamos o comando npm start."
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
