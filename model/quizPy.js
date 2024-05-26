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
        pergunta: `Qual é a saída do seguinte código Python?
 
        if 5 > 2:
            print("Cinco é maior que dois!")`,
        respostas: ["a) Erro de sintaxe", "b) Nenhuma saída", "c) 5", "d) Cinco é maior que dois!", "e) 2"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 3,
        explicacaoResposta: 'A condição if 5 > 2: é verdadeira, então o bloco de código dentro do if é executado, imprimindo "Cinco é maior que dois!',
    },
    {
        pergunta: `Quando o seguinte código é executado:

        for i in range(1, 6):
            print(i * 2)`,
        respostas: ["a) 1 2 3 4 5", "b) 0 2 4 6 8", "c) 2 4 6 8 10", "d) 1 3 5 7 9", "e) Nenhuma das anteriores"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 2,
        explicacaoResposta: 'O loop for percorre os números de 1 a 5 (inclusive), multiplicando cada número por 2 e imprimindo o resultado.',
    },
    {
        pergunta: `Qual é a saída do seguinte código Python?

        lista = [1, 2, 3, 4, 5]
        for i in lista:
            if i % 2 == 0:
                print(i, end=' ')`,
        respostas: ["a) 1 3 5", "b) 1 2 3 4 5", "c) 2 4 5", "d) 2 4", "e) Nenhuma das anteriores"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 3,
        explicacaoResposta: 'O loop for itera sobre cada elemento da lista. Se o elemento for par (ou seja, se o resto da divisão por 2 for zero), ele é impresso.',
    },

    {
        pergunta: `Qual é a saída do seguinte código Python?
        
        s = "Python" 
        print(s[1:4])`,
        respostas: ["a) ytho", "b) yth", "c) Pyt", "d) hon", "e) Nenhuma das anteriores"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 1,
        explicacaoResposta: 'A fatia [1:4] retorna os caracteres da posição 1 (inclusive) até a posição 4',
    },

    {
        pergunta: `Qual é a saída do seguinte código Python?
        n = 10
        result = 1
        for i in range(1, n + 1):
            result *= i
        print("O fatorial de", n, "é:", result)`,
        respostas: ["a) O fatorial de 10 é: 10", "b) O fatorial de 10 é: 100", "c) O fatorial de 10 é: 3628800", "d) O fatorial de 10 é: 362880", "e) Nenhuma das anteriores"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 2,
        explicacaoResposta: 'Este código calcula o fatorial de 10 e imprime o resultado.',
    },

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
        pergunta: `O que está faltando no seguinte código Python?
 
        numero = int(input("Digite um número: "))
        if numero % 2 == 0:
            print("O número é par.")
        else:
            print("O número é ímpar.")`,
        respostas: ["a) input('insira um número')", "b) numero = int(input('Digite um número: '))", "c) num = int(input('Digite um número: '))", "d) num = input(int('Digite um número: '))", "e) "],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 1,
        explicacaoResposta: '',
    },
    
    {
        pergunta: `O que precisa ser adicionado ao seguinte código Python para calcular a média de uma lista de números??
 
        numeros = [10, 20, 30, 40, 50]
media = 0
for numero in numeros:
    # Adicionar código aqui
print("A média dos números é:", media)`,
        respostas: ["a) media += numero", "b) media = numeros / len(numeros)", "media = sum(numeros)", "d) media = numeros.sum()"],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 0,
        explicacaoResposta: '',
    },

    {
        pergunta: `O que falta no seguinte código Python para solicitar ao usuário que insira seu nome e saudá-lo?
 
        print("Olá, " + nome + "!")`,
        respostas: ["a) nome = input('Digite seu nome: ')", "b) nome = string(input('Digite seu nome: '))", "c) nome = input(string('Digite seu nome: '))", "d) nome = input('Seu nome: ')", "e) "],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 1,
        explicacaoResposta: '',
    },

    {
        pergunta: `O que está faltando no seguinte código Python para imprimir os números de 1 a 10 na tela??
 
        numero = 1
while numero <= 10:
    print(numero)`,
        respostas: ["a) numero += 1", "b) numero = numero + 1", "c) numero = 10", "d) numero -= 1", "e) "],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 1,
        explicacaoResposta: '',
    },

    {
        pergunta: `O que precisa ser adicionado ao seguinte código Python para verificar se um número é positivo ou negativo?
        
        numero = int(input("Digite um número: "))
        if numero > 0:
            print("O número é positivo.")
        elif numero < 0:
            print("O número é negativo.")
        else:
            print("O número é zero.")
 
        `,
        respostas: ["a) Não é necessário adicionar nada.", "b) elif numero == 0:", "c) else:", "d) print('Digite um número: ')", "e) "],

        //   a=0, b=1, c=2, d=3, e=4

        correta: 0,
        explicacaoResposta: '',
    },
    



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