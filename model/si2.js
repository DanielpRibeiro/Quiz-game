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
        pergunta: `A Oracle VM VirtualBox, software de virtualização de plataforma cruzada de código aberto mais popular do mundo, permite que os desenvolvedores forneçam código mais rápido executando vários sistemas operacionais em um único dispositivo. Equipes de TI e provedores de soluções usam a VirtualBox para reduzir custos operacionais e encurtar o tempo necessário para implementar aplicações on-premise e na nuvem de forma segura. Ao configurar uma máquina em VM, percebe-se questões como:
    
    I) Define-se uma máquina física, com configurações que pode escolher ao criar a máquina<br>
    
    II. É possível estabelecer uma arquitetura previamente, de modo que a máquina já fique pré-configurada para o tipo de sistema que irá executar<br>
    
    III. Por mais prática que seja a máquina virtual só permite acesso à rede local, por meio de infraestrutura emulada, não permitindo a herança de conexões externas.<br>
    
    IV. A máquina virtual conta com recursos que representam o funcionamento e configuração de uma máquina física<br>
    
    Analisando os itens acima é possível perceber que:<br>`,
        respostas: ["a) Apenas as asserções I e II estão corretas.", "b) Apenas as asserções I, III e IV estão corretas.", "c) As asserções I, II, III e IV estão corretas.", "d) Apenas as asserções II e IV estão corretas.", "e) Não existe nenhuma afirmação correta."],
        correta: 1,
        explicacaoResposta: "As asserções I, III e IV estão corretas. I está correta porque se define uma máquina física ao criar a VM. III está correta porque a VM permite acesso apenas à rede local por meio de infraestrutura emulada. IV está correta porque a VM simula o funcionamento de uma máquina física."
    },

    {
        pergunta: `Diferencie compliance interno de externo.`,
        respostas: [
            `A) Compliance interno refere-se à conformidade com leis e regulamentos internos da organização, enquanto compliance externo diz respeito à conformidade com leis e regulamentos externos de outras empresas.`,
            `B) Compliance interno refere-se à conformidade com as políticas, procedimentos e normas estabelecidos dentro da própria organização, enquanto compliance externo diz respeito à conformidade com leis, regulamentos e normas impostos por autoridades externas à organização, como governos, agências reguladoras e entidades de certificação.`,
            `C) Compliance interno é quando a empresa segue suas próprias políticas e procedimentos, enquanto compliance externo é quando a empresa se preocupa apenas com a conformidade legal de outras organizações.
            `,
            `D) Compliance interno se aplica apenas aos funcionários internos da empresa, enquanto compliance externo se refere à conformidade com leis e regulamentos externos estabelecidos por órgãos governamentais e agências reguladoras.
            `,
        ],
        correta: 1,
    },
    {
        pergunta: `Apresente os principais regulamentos e normas de compliance, estabelecidos por entidades externas à organização`,
        respostas: [
            `A) Regulamentos e normas de compliance são apenas para grandes empresas.`,
            `B) A única forma de garantir o compliance é contratar uma empresa especializada.`,
            `C) O compliance é um custo adicional desnecessário para as empresas.`,
            `D) Órgãos Governamentais:
                Lei Geral de Proteção de Dados Pessoais (LGPD):
                Código de Defesa do Consumidor (CDC):
                Lei Anticorrupção (Lei nº 12.846/2013)
                Agência Nacional de Vigilância Sanitária (ANVISA):
    
                Normas Internacionais:
                ISO 37001:2016: Sistema de Gestão Antissuborno, que fornece diretrizes para a implementação de um programa de compliance anticorrupção eficaz.
                FCPA (Foreign Corrupt Practices Act)
                UK Bribery Act:
    
                Normas Setoriais:
                Basileia III:
                International Financial Reporting Standards (IFRS): 
                Boas Práticas de Governança Corporativa do IBGC
    
                Certificações:
                ISO 14001:2015: Sistema de Gestão Ambiental, que demonstra o compromisso da empresa com a proteção ambiental.
                OHSAS 18001:2007: Sistema de Gestão de Saúde e Segurança Ocupacional, que demonstra o compromisso da empresa com a saúde e segurança dos seus trabalhadores.`,
        ],
        correta: 3,
        explicacaoResposta: '',
    },
    // Pergunta 4
    {
        pergunta: `Conceitue, com detalhes criptografia. Aprovei te para demonstrar os algoritmos de cifra de cesar e cifra de vigenece`,
        respostas: [
            `A) Criptografia é o estudo das criptas, ou túmulos antigos, e sua relação com a história da civilização. Os algoritmos de cifra de César e cifra de Vigenece são exemplos de métodos arqueológicos usados para decifrar mensagens antigas encontradas em criptas.`,
            `B) Criptografia é a arte de decorar mensagens secretas com padrões coloridos e complexos, tornando-as visualmente atraentes. Os algoritmos de cifra de César e cifra de Vigenece são utilizados para criar esses padrões decorativos.`,
            `C) Criptografia é a técnica de transformar informações em um formato ilegível, conhecido como texto cifrado, de modo que apenas pessoas autorizadas possam decifrá-lo e ler a mensagem original. Os algoritmos de cifra de César e cifra de Vigenece são exemplos de métodos de criptografia que envolvem a substituição de letras por outras letras do alfabeto, com base em um deslocamento fixo ou uma chave específica. Vigene: Esta cifra é mais complexa e utiliza uma palavra-chave para determinar os deslocamentos das letras. Cada letra da mensagem original é deslocada com base na letra correspondente da palavra-chave. Cesar: Nesta técnica, cada letra do texto original é substituída por outra letra do alfabeto, deslocada um certo número de posições para a direita ou esquerda.`,
            `D) Criptografia é um método usado para ocultar informações por meio de códigos ou cifras, garantindo que apenas o destinatário correto possa decifrar a mensagem. Os algoritmos de cifra de César e cifra de Vigenece são exemplos de técnicas de criptografia que envolvem a substituição de letras por outras letras do alfabeto.`,
        ],
        correta: 2,
    },

    // Pergunta 5
    {
        pergunta: `Explique as seguintes siglas: AD, DNS, DHCP, TCP/IP`,
        respostas: [
            `A) AD: Advanced Data, DNS: Digital Network Security, DHCP: Dynamic Host Configuration Protocol, TCP/IP: Transfer Control Protocol/Internet Protocol.`,
            `B) AD: Active Directory, DNS: Domain Network Service, DHCP: Dynamic Host Configuration Program, TCP/IP: Transmission Control Protocol/Internet Protocol.`,
            `C) AD: Advanced Database, DNS: Data Naming System, DHCP: Dynamic Host Control Protocol, TCP/IP: Telecommunication Control Internet Protocol.`,
            `D) AD: Advanced Directive, DNS: Domain Name System, DHCP: Dynamic Host Configuration Protocol, TCP/IP: Transmission Control Protocol/Internet Protocol.`,
        ],
        correta: 1,
    },

    // Pergunta 6
    {
        pergunta: `Sobre o uso da máquina virtual (VirtualBox) para a criação de configurações de servidores e domínio:`,
        respostas: [
            `A) A máquina virtual (VirtualBox) é usada apenas para criar ambientes de desenvolvimento para jogos online.`,
            `B) O VirtualBox é usado para criar sites de comércio eletrônico, mas não é adequado para configurações de servidores.`,
            `C) A máquina virtual (VirtualBox) é uma ferramenta utilizada para simular sistemas operacionais em um ambiente virtual, permitindo a configuração de servidores e domínios.`,
            `D) O VirtualBox é um software de edição de vídeo usado para criar conteúdo multimídia, não tem relação com configurações de servidores e domínios.`,
        ],
        correta: 2,
    },

    // Pergunta 7
    {
        pergunta: `Sobre a funcionalidade das UM's e onde são aplicadas:`,
        respostas: [
            `A) As UM's são utilizadas para decorar ambientes de escritório, não têm uma aplicação prática em TI.`,
            `B) As UM's são utilizadas para gerenciar sistemas de gerenciamento de conteúdo (CMS), como WordPress e Joomla.`,
            `C) As UM's são unidades de memória usadas em sistemas de computador, como RAM e ROM, e são aplicadas em servidores e dispositivos de rede.`,
            `D) As UM's são usadas para criar backups de dados em dispositivos de armazenamento externo, como discos rígidos portáteis e pen drives.`,
        ],
        correta: 3,
    },

    // Pergunta 8
    {
        pergunta: `Explique VPN's, HTTPS e SSL:`,
        respostas: [
            `A) VPN's são aplicativos de videochamada, HTTPS é um protocolo de rede e SSL é um sistema operacional.`,
            `B) VPN's são vírus de computador, HTTPS é uma rede social e SSL é um programa de edição de imagens.`,
            `C) VPN's são redes privadas virtuais que criptografam a comunicação pela internet, HTTPS é um protocolo de segurança usado em sites e SSL é um protocolo de segurança que garante a comunicação segura na web.`,
            `D) VPN's são softwares de antivírus, HTTPS é um tipo de armazenamento em nuvem e SSL é um navegador de internet.`,
        ],
        correta: 2,
    },

    // Pergunta 9
    {
        pergunta: `Apresente algumas ameaças cibernéticas da atual conjuntura e explique como elas são praticadas:`,
        respostas: [
            `A) Phishing é uma técnica usada para pescar em rios virtuais, e ataques de negação de serviço (DDoS) envolvem negar o serviço de entrega de pizza online.`,
            `B) Malware é um tipo de animal marinho virtual, e engenharia social envolve construir pontes digitais.`,
            `C) Ransomware é um tipo de ameaça cibernética que sequestra dados e exige resgate, e ataques de engenharia social envolvem manipular usuários para obter informações confidenciais.`,
            `D) Spam é uma técnica usada para enviar mensagens não solicitadas, e hacking envolve invadir sistemas de computador para roubar informações.`,
        ],
        correta: 2,
    },

    // Pergunta 10
    {
        pergunta: `Apresente o número da Lei de LGPD, mencione os principais fundamentos. Explique também a função dos seguintes agentes: Controlador, Operador, Encarregado e DPO.`,
        respostas: [
            `A) A Lei de LGPD é a Lei Geral de Proteção de Dados, com o número 10.962. Seus principais fundamentos incluem a proteção da privacidade e dos dados pessoais dos cidadãos, o controle sobre o uso de suas informações e a responsabilização das organizações pelo tratamento adequado desses dados. Os agentes envolvidos são: Controlador, responsável pela tomada de decisões sobre o tratamento de dados pessoais; Operador, encarregado de realizar o tratamento dos dados em nome do controlador; Encarregado, responsável por assegurar o cumprimento da LGPD dentro da organização; e DPO (Data Protection Officer), que é o encarregado pela proteção de dados dentro da empresa, atuando como ponto de contato para assuntos relacionados à privacidade e segurança de dados.`,
            `B) A Lei de LGPD é a Lei Geral de Proteção de Dados, com o número 13.709. Seus principais fundamentos incluem a proteção do ambiente digital e a regulamentação do comércio eletrônico. Funções dos Agentes: A LGPD define os papéis e responsabilidades de diferentes agentes envolvidos no tratamento de dados pessoais: Controlador: É a pessoa física ou jurídica que determina os fins do tratamento de dados pessoais e toma as decisões sobre como os dados serão utilizados. Operador: É a pessoa física ou jurídica que trata os dados pessoais por conta do controlador, seguindo suas instruções e orientações. Encarregado: É um profissional nomeado pelo controlador ou operador para atuar como canal de comunicação entre os titulares dos dados, a ANPD e a própria organização. DPO (Data Protection Officer): Termo em inglês equivalente ao Encarregado, utilizado principalmente por empresas multinacionais.`,
            `C) A Lei de LGPD é a Lei Geral de Proteção de Dados, com o número 14.398. Seus principais fundamentos incluem a segurança da informação, a prevenção de fraudes e a transparência nas operações empresariais. Os agentes envolvidos são: Controlador, responsável por controlar o acesso aos dados; Operador, encarregado de operar os sistemas de TI; Encarregado, responsável por encarregar os funcionários com acesso aos dados; e DPO (Data Processing Officer), que é o encarregado pela operação dos sistemas de processamento de dados.`,
        ],
        correta: 1,
    },
    {
        pergunta: `Explique 10 comandos Linux e mais 10 comandos MS-DOS`,
        respostas: [
            `A - 10 Comandos Essenciais do Linux:

            ls: Lista os arquivos e pastas do diretório atual.
            cd: Muda para o diretório especificado.
            pwd: Mostra o caminho completo do diretório atual.
            mkdir: Cria um novo diretório.
            rmdir: Remove um diretório vazio.
            cp: Copia arquivos e pastas.
            mv: Move ou renomeia arquivos e pastas.
            rm: Remove arquivos e pastas.
            cat: Exibe o conteúdo de um arquivo de texto.
            sudo: Executa um comando com privilégios de administrador.
            
            
            10 Comandos Úteis do MS-DOS:
            
            dir: Lista os arquivos e pastas do diretório atual.
            cd: Muda para o diretório especificado.
            md: Cria um novo diretório.
            rd: Remove um diretório vazio.
            copy: Copia arquivos e pastas.
            move: Move ou renomeia arquivos e pastas.
            del: Remove arquivos e pastas.
            type: Exibe o conteúdo de um arquivo de texto.
            pause: Pausa a execução do comando e espera que o usuário pressione uma tecla.
            exit: Sai do prompt de comando.`,
        ],
        correta: 0,

    },
    {
        pergunta: `Aula sobre sobre vários servidores. apresente e conceitue cada um deles.`,
        respostas: [
            `A- 
            1. Servidor Web:

            O maestro da orquestra da internet, o servidor web é responsável por receber requisições de navegadores e entregar páginas da web. Imagine um restaurante: o servidor recebe seu pedido (requisição), busca o prato (página) na cozinha (banco de dados) e o entrega diretamente na sua mesa (navegador).
            
            2. Servidor de Email:
            
            Seu correio eletrônico não seria possível sem o servidor de email! Ele armazena, recebe, envia e gerencia suas mensagens, garantindo que elas cheguem ao destino correto. Imagine um carteiro digital: o servidor recebe suas cartas (emails), as organiza em caixas de correio (pastas) e as entrega aos destinatários.
            
            3. Servidor de Banco de Dados:
            
            O guardião dos seus dados, o servidor de banco de dados armazena e organiza informações cruciais para diversos sistemas. Imagine um cofre gigante: o servidor guarda seus dados confidenciais (nomes, senhas, etc.) e os disponibiliza para quem precisa (aplicativos, sites).
            
            4. Servidor de Arquivos:
            
            O depósito universal da sua empresa, o servidor de arquivos permite que você armazene, acesse e compartilhe arquivos com segurança. Imagine um armário digital: o servidor armazena seus documentos, fotos e outros arquivos e permite que você os acesse de qualquer lugar.
            `,
        ],
        correta: 0,

    },
    {
        pergunta: `Explique , detalhadamente, o processo de configuração e os serviços em servidor ad`,
        respostas: [
            `A - Instalação do Windows Server: O primeiro passo é instalar o sistema operacional Windows Server no hardware do servidor. Durante a instalação, você pode optar por instalar o servidor como um Controlador de Domínio (DC) ou adicionar a função de AD posteriormente.

            Promoção do Servidor para Controlador de Domínio: Se você não selecionou a opção de instalação como um DC durante a instalação do Windows Server, pode promover o servidor para um DC usando o Assistente de Promoção de Servidor. Neste processo, você define o domínio, especifica o nome NetBIOS do domínio, escolhe o nível funcional do domínio e configura a senha do modo de restauração do serviço de diretório.
            
            Configuração do DNS: O Active Directory depende do DNS para resolver nomes de domínio e localizar controladores de domínio. Portanto, é crucial configurar o DNS corretamente. Normalmente, o DNS é instalado automaticamente durante a promoção do servidor para DC.
            
            Configuração do Serviço de Diretório: Após a promoção do servidor para DC, o serviço de diretório (Active Directory) é instalado e configurado automaticamente. Isso inclui a criação do banco de dados do AD, a replicação de dados entre controladores de domínio e a configuração de políticas de segurança padrão.
            
            Administração do Active Directory: Depois que o servidor AD estiver configurado, você pode começar a administrar o ambiente do AD usando a ferramenta "Active Directory Users and Computers" (ADUC) e outras ferramentas administrativas do Windows Server. Você pode criar usuários, grupos, unidades organizacionais (OUs), aplicar políticas de grupo, gerenciar permissões e muito mais.
             `,
        ],
        correta: 0,

    },
    {
        pergunta: `com base na questão  (AD) explique, com detalhes, a configuraçao de virada de máquina estação,
        para que ela acesse o ad da maquina servidora. inclua tanto nesta, quanto na questão anterior`,
        respostas: [
            `A - Configuração da Estação de Trabalho:

            Adição ao Domínio: O primeiro passo é adicionar a estação de trabalho ao domínio do servidor AD. Para fazer isso, vá para as configurações do sistema da estação de trabalho, clique em "Configurações de Sistema Avançadas", vá para a guia "Nome do Computador" e clique em "Alterar". Em seguida, selecione "Domínio" e insira o nome do domínio do servidor AD. Você precisará fornecer credenciais de administrador do domínio para concluir a adição.
            Autenticação e Acesso ao AD:
            
            Após adicionar a estação de trabalho ao domínio, reinicie o computador. Na tela de login, selecione o domínio do servidor AD e faça login com as credenciais de conta do AD. Uma vez autenticado, a estação de trabalho terá acesso aos recursos do domínio, como pastas compartilhadas, impressoras, políticas de grupo, etc.
            Configuração do AD no Servidor:
            
            Antes de configurar a estação de trabalho, o servidor AD deve estar corretamente configurado e operacional. Isso inclui a instalação e configuração do AD, DNS e outros serviços necessários. Certifique-se de que o servidor AD esteja funcionando corretamente e que a estação de trabalho possa se comunicar com ele na rede.
            Configuração do DNS:
            
            O DNS é fundamental para a resolução de nomes de domínio no ambiente do AD. Certifique-se de que a estação de trabalho esteja configurada para usar o servidor DNS do servidor AD como seu servidor DNS primário. Isso garante que a estação de trabalho possa resolver corretamente os nomes de domínio do AD.
            Teste e Verificação:
            
            Após a configuração, teste o acesso da estação de trabalho ao AD. Verifique se a estação de trabalho pode se conectar ao servidor AD, se pode acessar os recursos compartilhados, se as políticas de grupo estão sendo aplicadas corretamente, entre outros aspectos.
             `,
        ],
        correta: 0,

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


