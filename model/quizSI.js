const perguntas = [

    {
        pergunta: "Sobre segurança e infraestrutura de redes, qual das seguintes afirmações está correta?",
        respostas: ["a) A criptografia de dados é uma medida eficaz apenas para proteger dados em trânsito.", "b) Um servidor é um dispositivo de rede usado apenas para acessar recursos compartilhados.", "c) Uma estação IP refere-se ao endereço de um dispositivo de rede atribuído dinamicamente pelo DHCP.", "d) A máscara de sub-rede determina quais partes de um endereço IP pertencem à rede e quais partes identificam dispositivos na rede."],
        correta: 3,
        explicacaoResposta: 'D - Correta: A máscara de sub-rede é usada para determinar quais partes de um endereço IP pertencem à rede e quais partes identificam dispositivos na rede. Ela é fundamental para definir a estrutura da rede e alocar endereços IP para dispositivos.',
    },
    {
        pergunta: "Qual dos seguintes recursos de rede está mais diretamente relacionado à segurança da informação?",
        respostas: ["a) Active Directory (AD)", "b) DNS", "c) Logon de rede local", "d) Logon de domínio"],
        correta: 0,
        explicacaoResposta: 'A - Correta: O Active Directory (AD) é um serviço de diretório que gerencia identidades e acessos de usuários, recursos de rede e políticas de segurança. Ele fornece autenticação centralizada e controle de acesso, o que é essencial para a segurança da informação.',
    },
    {
        pergunta: "Qual dos seguintes aspectos é importante considerar ao implantar a segurança de um software de PC?",
        respostas: ["a) A cor dos ícones do software.", "b) A popularidade do desenvolvedor do software.", "c) A capacidade de reproduzir vídeos em alta definição.", "d) A atualização regular para corrigir vulnerabilidades de segurança conhecidas."],
        correta: 3,
        explicacaoResposta: 'D - Correta: A atualização regular do software para corrigir vulnerabilidades de segurança conhecidas é uma prática fundamental para manter a segurança do software de PC. Vulnerabilidades não corrigidas podem ser exploradas por invasores para comprometer a segurança do sistema.',
    },
    {
        pergunta: "O que diferencia uma VPN de um DNS?",
        respostas: ["a) Uma VPN é um protocolo de rede usado para atribuir automaticamente endereços IP, enquanto um DNS é um serviço usado para traduzir nomes de domínio em endereços IP.", "b) Uma VPN é um serviço usado para traduzir nomes de domínio em endereços IP, enquanto um DNS é um protocolo de rede usado para atribuir automaticamente endereços IP.", "c) Uma VPN é um serviço usado para proteger a comunicação sobre uma rede pública, enquanto um DNS é um protocolo de segurança usado para proteger a privacidade do usuário.", "d) Uma VPN é um serviço de proxy, enquanto um DNS é um serviço de firewall."],
        correta: 0,
        explicacaoResposta: 'A - Correta: Uma VPN (Virtual Private Network) é um protocolo de rede usado para atribuir automaticamente endereços IP e criar conexões seguras sobre uma rede pública. Um DNS (Domain Name System) é um serviço usado para traduzir nomes de domínio em endereços IP correspondentes.',
    },

    {
        pergunta: "Qual é o componente de rede responsável por encaminhar o tráfego entre redes diferentes?",
        respostas: ["a) Gateway padrão", "b) Servidor", "c) Estação", "d) Máscara de sub-rede"],
        correta: 0,
        explicacaoResposta: 'A - Correta: O gateway padrão é o componente de rede responsável por encaminhar o tráfego entre redes diferentes. Ele atua como um ponto de entrada ou saída para uma rede.',
    },
    {
        pergunta: "Qual é o serviço usado para gerenciar identidades e acessos de usuários, recursos de rede e políticas de segurança em um ambiente de rede corporativa?",
        respostas: ["a) DNS", "b) DHCP", "c) Proxy", "d) Active Directory (AD)"],
        correta: 3,
        explicacaoResposta: 'D - Correta: O Active Directory (AD) é um serviço de diretório usado para gerenciar identidades e acessos de usuários, recursos de rede e políticas de segurança em um ambiente de rede corporativa. Ele fornece recursos de autenticação centralizada e controle de acesso.',
    },

    //   

    {
        pergunta: "Qual componente de rede é responsável por determinar quais partes de um endereço IP pertencem à rede e quais partes identificam dispositivos na rede?",
        respostas: ["a) Gateway padrão", "b) Servidor", "c) Estação", "d) Máscara de sub-rede"],
        correta: 3,
        explicacaoResposta: 'D - Correta: A máscara de sub-rede é usada para determinar quais partes de um endereço IP pertencem à rede e quais partes identificam dispositivos na rede. Ela é fundamental para definir a estrutura da rede e alocar endereços IP para dispositivos.',
    },
    {
        pergunta: "Qual recurso de rede é usado para gerenciar identidades e acessos de usuários, recursos de rede e políticas de segurança?",
        respostas: ["a) DNS", "b) DHCP", "c) Proxy", "d) Active Directory (AD)"],
        correta: 3,
        explicacaoResposta: 'D - Correta: O Active Directory (AD) é um serviço de diretório usado para gerenciar identidades e acessos de usuários, recursos de rede e políticas de segurança em um ambiente de rede corporativa. Ele fornece recursos de autenticação centralizada e controle de acesso.',
    },
    {
        pergunta: "Por que é importante proteger dados confidenciais, propriedade intelectual e sistemas de TI?",
        respostas: ["a) Para obter reconhecimento público.", "b) Para evitar a perda de dados irrelevantes.", "c) Para proteger contra ameaças cibernéticas e prevenir perdas financeiras, danos à reputação e interrupções nos negócios.", "d) Para garantir a disponibilidade ilimitada de informações."],
        correta: 2,
        explicacaoResposta: 'C - Correta: É importante proteger dados confidenciais, propriedade intelectual e sistemas de TI para proteger contra ameaças cibernéticas e prevenir perdas financeiras, danos à reputação e interrupções nos negócios.',
    },
    {
        pergunta: "Quais são os aspectos a serem considerados ao implantar a segurança de um software de PC?",
        respostas: ["a) A cor dos ícones do software.", "b) A popularidade do desenvolvedor do software.", "c) A capacidade de reproduzir vídeos em alta definição.", "d) Atualizações regulares para corrigir vulnerabilidades de segurança conhecidas."],
        correta: 3,
        explicacaoResposta: 'D - Correta: Atualizações regulares para corrigir vulnerabilidades de segurança conhecidas são fundamentais ao implantar a segurança de um software de PC. Vulnerabilidades não corrigidas podem ser exploradas por invasores para comprometer a segurança do sistema.',
    },
    {
        pergunta: "Qual é a diferença entre dado, informação e conhecimento?",
        respostas: ["a) Dado é informação processada, e informação é conhecimento aplicado.", "b) Dado é conhecimento aplicado, e informação é informação processada.", "c) Dado é elemento básico de informação, informação é dados organizados e processados, e conhecimento é informação assimilada, compreendida e aplicada.", "d) Dado é informação relevante, informação é elemento básico de conhecimento, e conhecimento é informação processada."],
        correta: 2,
        explicacaoResposta: 'C - Correta: Dado é o elemento básico de informação, informação é dados organizados e processados para fornecer contexto e significado, e conhecimento é informação assimilada, compreendida e aplicada.',
    },
    {
        pergunta: "O que é informação confidencial?",
        respostas: ["a) Informação que pode ser acessada e divulgada livremente.", "b) Informação sensível que não requer proteção especial.", "c) Informação que requer proteção contra acesso não autorizado, divulgação ou modificação.", "d) Informação reservada para uso público e não requer proteção especial."],
        correta: 2,
        explicacaoResposta: 'C - Correta: Informação confidencial é aquela que requer proteção contra acesso não autorizado, divulgação ou modificação.',
    },
    {
        pergunta: "Qual é o serviço usado para proteger a comunicação sobre uma rede pública?",
        respostas: ["a) DNS", "b) DHCP", "c) Proxy", "d) VPN"],
        correta: 3,
        explicacaoResposta: 'D - Correta: Uma VPN (Virtual Private Network) é um serviço usado para proteger a comunicação sobre uma rede pública, criptografando os dados transmitidos e criando um túnel seguro entre os dispositivos conectados.',
    },
    {
        pergunta: "Qual componente de rede é responsável por encaminhar o tráfego entre redes diferentes?",
        respostas: ["a) Gateway padrão", "b) Servidor", "c) Estação", "d) Máscara de sub-rede"],
        correta: 0,
        explicacaoResposta: 'A - Correta: O gateway padrão é o componente de rede responsável por encaminhar o tráfego entre redes diferentes. Ele atua como um ponto de entrada ou saída para uma rede.',
    },
    {
        pergunta: "Qual é o serviço usado para autenticar usuários em uma rede baseada em domínio?",
        respostas: ["a) DNS", "b) DHCP", "c) Proxy", "d) Active Directory (AD)"],
        correta: 3,
        explicacaoResposta: 'D - Correta: O Active Directory (AD) é um serviço usado para autenticar usuários em uma rede baseada em domínio, onde as credenciais de acesso são validadas por um controlador de domínio centralizado.',
    },

    {
        pergunta: "Por que é importante proteger ativos de informações críticas?",
        respostas: ["a) Para evitar a perda de informações irrelevantes.", "B) Para proteger contra ameaças cibernéticas e prevenir perdas financeiras, danos à reputação e interrupções nos negócios.", "C) Para obter reconhecimento público.", "d) Para garantir a acessibilidade irrestrita das informações."],
        correta: 1,
        explicacaoResposta: 'B - Correta: É importante proteger ativos de informações críticas para proteger contra ameaças cibernéticas e prevenir perdas financeiras, danos à reputação e interrupções nos negócios.',
    },

    {
        pergunta: "Qual técnica de segurança de software é usada para ofuscar o código-fonte de um programa, tornando-o mais difícil de ser compreendido por humanos?",
        respostas: ["a) Criptografia de dados", "b) Fuzzing", "c) Minificação de código", "d) Injeção de código"],
        correta: 2,
        explicacaoResposta: 'C - Correta: A minificação de código é uma técnica que remove espaços em branco, comentários e renomeia variáveis, tornando o código-fonte mais difícil de ser compreendido, mas mantendo sua funcionalidade.',
    },
    {
        pergunta: "Qual é a principal diferença entre uma VPN baseada em SSL (Secure Sockets Layer) e uma VPN baseada em IPsec (Internet Protocol Security)?",
        respostas: ["a) A VPN baseada em SSL é mais rápida, enquanto a VPN baseada em IPsec oferece uma criptografia mais robusta.", "b) A VPN baseada em SSL é mais fácil de configurar, enquanto a VPN baseada em IPsec é mais difícil de ser interceptada.", "c) A VPN baseada em SSL é mais segura para conexões de curta duração, enquanto a VPN baseada em IPsec é mais adequada para conexões persistentes.", "d) A VPN baseada em SSL é mais compatível com dispositivos móveis, enquanto a VPN baseada em IPsec é mais eficaz para redes corporativas."],
        correta: 2,
        explicacaoResposta: 'C - Correta: A principal diferença é que a VPN baseada em SSL é mais adequada para conexões de curta duração, como acesso remoto ocasional, enquanto a VPN baseada em IPsec é mais adequada para conexões persistentes, como redes corporativas.',
    },
    {
        pergunta: "Qual é a função principal do protocolo STP (Spanning Tree Protocol) em uma rede Ethernet?",
        respostas: ["a) Alocar endereços IP para dispositivos na rede.", "b) Prevenir loops de comutação em redes Ethernet.", "c) Rastrear e resolver problemas de roteamento em redes IP.", "d) Gerenciar filas de pacotes em switches de rede."],
        correta: 1,
        explicacaoResposta: 'B - Correta: O STP (Spanning Tree Protocol) é usado para prevenir loops de comutação em redes Ethernet, desativando portas redundantes e mantendo uma topologia de rede sem loop.',
    },
   
    // Perguntas de Múltipla Escolha (Nível Extremo de Dificuldade)

    {
        pergunta: "Qual é o principal protocolo de comunicação usado na Internet para interconectar dispositivos em todo o mundo?",
        respostas: ["a) HTTP", "b) FTP", "c) TCP/IP", "d) UDP", "e) ICMP"],
        correta: 2,
        explicacaoResposta: 'C - Correta: O protocolo TCP/IP (Transmission Control Protocol/Internet Protocol) é o principal protocolo de comunicação usado na Internet.',
    },
    {
        pergunta: "O que significa DHCP?",
        respostas: ["a) Dynamic Host Configuration Protocol", "b) Domain Host Configuration Protocol", "c) Data Host Configuration Protocol", "d) Domain Host Communication Protocol", "e) Dynamic Host Communication Protocol"],
        correta: 0,
        explicacaoResposta: 'A - Correta: DHCP significa Dynamic Host Configuration Protocol e é usado para atribuir automaticamente endereços IP e outras configurações de rede a dispositivos em uma rede local.',
    },
    {
        pergunta: "Qual é a principal diferença entre os protocolos IPv4 e IPv6?",
        respostas: ["a) O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.", "b) O IPv4 é mais rápido que o IPv6.", "c) O IPv4 oferece suporte a um número maior de dispositivos que o IPv6.", "d) O IPv4 é mais seguro que o IPv6.", "e) O IPv4 foi desenvolvido antes do IPv6."],
        correta: 0,
        explicacaoResposta: 'A - Correta: A principal diferença é que o IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits, permitindo um número muito maior de endereços IP disponíveis.',
    },
    {
        pergunta: "Qual é a função de um servidor DNS?",
        respostas: ["a) Encaminhar pacotes de dados entre redes diferentes.", "b) Atribuir automaticamente endereços IP a dispositivos na rede local.", "c) Traduzir nomes de domínio em endereços IP.", "d) Organizar e armazenar arquivos em uma rede.", "e) Controlar o acesso de dispositivos à Internet."],
        correta: 2,
        explicacaoResposta: 'C - Correta: Um servidor DNS é responsável por traduzir nomes de domínio em endereços IP correspondentes.',
    },
    {
        pergunta: "Qual é a função de um servidor proxy em uma rede?",
        respostas: ["a) Traduzir nomes de domínio em endereços IP.", "b) Atribuir automaticamente endereços IP a dispositivos na rede local.", "c) Interceptar e encaminhar solicitações de recursos da Internet em nome dos clientes.", "d) Organizar e armazenar arquivos em uma rede.", "e) Controlar o acesso de dispositivos à Internet."],
        correta: 2,
        explicacaoResposta: 'C - Correta: Um servidor proxy atua como intermediário entre os dispositivos de uma rede e a Internet, interceptando e encaminhando solicitações de recursos da Internet em nome dos clientes.',
    },
    {
        pergunta: "O que são VPI e VCI em redes de comunicação baseadas em ATM?",
        respostas: ["a) Protocolos de comunicação de alta velocidade.", "b) Parâmetros usados para identificar dispositivos em uma rede local.", "c) Parâmetros usados para identificar o caminho virtual e o circuito virtual, respectivamente.", "d) Protocolos de comunicação de baixa latência.", "e) Nenhum dos anteriores."],
        correta: 2,
        explicacaoResposta: 'C - Correta: VPI (Virtual Path Identifier) e VCI (Virtual Circuit Identifier) são parâmetros usados para identificar o caminho virtual e o circuito virtual, respectivamente, em redes de comunicação baseadas em ATM.',
    },
    {
        pergunta: "Qual é a importância da auto-negociação em dispositivos de rede?",
        respostas: ["a) Determinar automaticamente o endereço IP de um dispositivo.", "b) Controlar a velocidade de conexão de um dispositivo.", "c) Estabelecer um túnel seguro entre dispositivos em uma rede.", "d) Atribuir automaticamente endereços IP a dispositivos na rede local.", "e) Nenhum dos anteriores."],
        correta: 1,
        explicacaoResposta: 'B - Correta: A auto-negociação é importante porque permite que os dispositivos de rede negociem automaticamente parâmetros de comunicação, como velocidade de conexão e modo duplex, para estabelecer a melhor configuração de comunicação possível entre eles.',
    },
    {
        pergunta: "O que é a World Wide Web?",
        respostas: ["a) Um serviço de comunicação por e-mail.", "b) Uma rede privada de computadores.", "c) Uma rede de compartilhamento de arquivos.", "d) Um sistema de informações baseado em hipertexto que permite o acesso a documentos vinculados na Internet.", "e) Nenhum dos anteriores."],
        correta: 3,
        explicacaoResposta: 'D - Correta: A World Wide Web é um sistema de informações baseado em hipertexto que permite o acesso a documentos vinculados na Internet.',
    },
    {
        pergunta: "Qual é a definição de um diretório em redes de computadores?",
        respostas: ["a) Um tipo de arquivo executável.", "b) Um dispositivo de armazenamento de dados.", "c) Um tipo de protocolo de comunicação.", "d) Uma estrutura hierárquica usada para organizar e armazenar arquivos e informações de maneira organizada e acessível.", "e) Nenhum dos anteriores."],
        correta: 3,
        explicacaoResposta: 'D - Correta: Em redes de computadores, um diretório é uma estrutura hierárquica usada para organizar e armazenar arquivos e informações de maneira organizada e acessível.',
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
