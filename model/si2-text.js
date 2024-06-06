const perguntas = [
    {
        pergunta: "O que é criptografia e qual é sua importância na segurança da Internet?",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "A criptografia é a técnica de proteger informações transformando-as em códigos secretos, que só podem ser lidos por pessoas que possuem a chave de decodificação. Ela é essencial para proteger a privacidade e a integridade dos dados transmitidos pela Internet, garantindo que apenas os destinatários autorizados possam acessar as informações."
    },
    {
        pergunta: "Por que é importante proteger os dados sigilosos armazenados em um computador?",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "É importante proteger os dados sigilosos armazenados em um computador para evitar o acesso não autorizado a informações sensíveis, como senhas, informações financeiras e documentos pessoais. A criptografia oferece uma camada adicional de segurança, garantindo que mesmo que um dispositivo seja comprometido, os dados permaneçam inacessíveis sem a chave de decodificação adequada."
    },
    {
        pergunta: "Descreva como a criptografia pode ser usada para proteger comunicações pela Internet.",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "A criptografia pode ser usada para proteger comunicações pela Internet, como e-mails e transações bancárias, por meio de protocolos seguros de comunicação, como HTTPS e TLS. Esses protocolos criptografam os dados transmitidos entre o navegador do usuário e o servidor, garantindo que apenas as partes autorizadas possam acessar as informações."
    },
    {
        pergunta: "Quais são os benefícios de proteger backups de dados contra acesso indevido usando criptografia?",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "Proteger backups de dados contra acesso indevido usando criptografia garante que mesmo que as cópias de segurança sejam comprometidas, os dados permaneçam seguros e inacessíveis para pessoas não autorizadas. Isso é especialmente importante ao enviar backups para áreas de armazenamento externo de mídias, onde há um maior risco de exposição a ameaças de segurança."
    },
    {
        pergunta: "Explique o que é um diretório em um sistema operacional de rede e qual é a função do Active Directory Domain Services (AD DS).",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "Um diretório é uma estrutura hierárquica que armazena informações sobre os objetos na rede. O Active Directory Domain Services (AD DS) é um serviço de diretório que fornece métodos para armazenar dados de diretório e disponibilizá-los para administradores e usuários de rede. O AD DS armazena informações sobre contas de usuário, como nomes, senhas e números de telefone, permitindo que usuários autorizados acessem essas informações de maneira segura e eficiente."
    },
    {
        pergunta: "Descreva como o Dynamic Host Configuration Protocol (DHCP) funciona e sua importância na configuração de redes.",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "O Dynamic Host Configuration Protocol (DHCP) é um protocolo de serviço TCP/IP que automatiza a atribuição de endereços IP a dispositivos em uma rede. O DHCP fornece configuração estática de terminais, incluindo concessão de endereços IP de host, máscara de sub-rede, default gateway, número IP de servidores DNS e sufixos de pesquisa do DNS. Isso simplifica o gerenciamento de redes, garantindo que dispositivos recebam configurações de rede corretas automaticamente ao se conectarem."
    },
    {
        pergunta: "Como a configuração de um domínio com serviços como AD, DNS e DHCP contribui para a segurança e gerenciamento de uma rede corporativa?",
        respostas: [], // Não há respostas predefinidas para perguntas discursivas
        tipo: "discursiva",
        explicacaoResposta: "A configuração de um domínio com serviços como AD, DNS e DHCP permite um gerenciamento centralizado e seguro da rede. O Active Directory (AD) facilita a administração de usuários e recursos, garantindo acesso autorizado e seguro. O Domain Name System (DNS) traduz nomes de domínio em endereços IP, facilitando a localização de recursos na rede. O Dynamic Host Configuration Protocol (DHCP) automatiza a atribuição de endereços IP, reduzindo erros de configuração e melhorando a eficiência da rede. Juntos, esses serviços proporcionam uma infraestrutura de rede robusta, segura e gerenciável."
    },
    // Perguntas sobre a questão 6
{
    pergunta: "Explique a importância do compliance para a segurança da informação em uma organização.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "O compliance é crucial para a segurança da informação porque assegura que a organização e seus colaboradores cumpram todas as normas e regulamentos relevantes. Isso ajuda a proteger os dados e ativos de informação da empresa, reduz o risco de violações de segurança e mantém a credibilidade e confiança da empresa no mercado."
},
{
    pergunta: "Como a falta de compliance pode afetar a credibilidade e os lucros de uma empresa?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "A falta de compliance pode levar a violações de segurança, perda ou dano de informações críticas, multas e penalidades regulatórias, além de danos à reputação da empresa. Isso pode resultar em perda de clientes, redução de lucros e uma diminuição significativa na credibilidade da empresa perante o mercado."
},
{
    pergunta: "Descreva o papel do compliance nas áreas trabalhista, fiscal, contábil e de segurança da informação.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "O compliance assegura que a empresa cumpra todas as normas e regulamentos aplicáveis em diversas áreas. Na área trabalhista, garante o cumprimento das leis trabalhistas. Na área fiscal, assegura a conformidade com as obrigações tributárias. Na área contábil, promove a integridade e precisão dos registros financeiros. Na segurança da informação, protege os ativos de informação contra ameaças e garante a conformidade com os padrões de segurança."
},
{
    pergunta: "Quais são os fatores a serem considerados ao implementar uma estratégia de compliance da informação?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Ao implementar uma estratégia de compliance da informação, é necessário identificar os direcionadores de compliance, como regulamentos e padrões da indústria, identificar os controles de segurança necessários, definir a arquitetura de segurança da informação, divulgar o nível de compliance para as partes interessadas e planejar ações de melhoria contínua."
},

// Perguntas sobre identificar direcionadores e controles exigidos
{
    pergunta: "O que significa identificar os direcionadores em uma estratégia de compliance da informação e por que é importante?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Identificar os direcionadores significa reconhecer os fatores que impulsionam a necessidade de compliance, como regulamentos governamentais, padrões da indústria e requisitos contratuais. É importante porque ajuda a garantir que a organização atenda a todas as exigências legais e regulatórias, reduzindo o risco de penalidades e melhorando a segurança da informação."
},
{
    pergunta: "Explique o processo de identificar os controles exigidos em uma estratégia de compliance da informação.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Identificar os controles exigidos envolve determinar quais medidas de segurança são necessárias para estar em conformidade com as normas e regulamentos relevantes. Isso pode incluir políticas de segurança, procedimentos de controle de acesso, criptografia de dados, monitoramento de atividades e outras práticas que protejam os ativos de informação da organização."
},
{
    pergunta: "Sobre compilance, informe os 5 topicos a ser seguido na implementação.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Identificar os direcionadores, identificar os controles exigidos, definir a arquitetura de segurança da informação e divulgar o nível de compliance e planejar ações de melhoria."
},
{
    pergunta: "Explique o principal objetivo da Lei Geral de Proteção de Dados Pessoais (LGPD).",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "O principal objetivo da LGPD é proteger os direitos fundamentais de liberdade e de privacidade, bem como a livre formação da personalidade de cada indivíduo. A lei regula o tratamento de dados pessoais para garantir a segurança e privacidade dos dados dos cidadãos, seja em meio físico ou digital, e abrange um amplo conjunto de operações realizadas por pessoas físicas ou jurídicas, públicas ou privadas."
},
{
    pergunta: "Quais são os tipos de operações que a LGPD abrange no tratamento de dados pessoais?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "A LGPD abrange diversas operações de tratamento de dados pessoais, que podem ocorrer em meios manuais ou digitais. Essas operações incluem, mas não se limitam a, coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração de dados pessoais."
},
{
    pergunta: "Qual é o papel do Encarregado na LGPD e sua importância para a proteção de dados pessoais?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "O Encarregado, também conhecido como Data Protection Officer (DPO), é a pessoa indicada pelo Controlador para atuar como canal de comunicação entre o Controlador, o Operador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD). O Encarregado é responsável por orientar os funcionários e contratados da entidade sobre as práticas de proteção de dados, receber e responder a solicitações dos titulares dos dados e cooperar com a ANPD, garantindo que a organização esteja em conformidade com a LGPD."
},
{
    pergunta: "Quem são os agentes de tratamento de dados pessoais definidos pela LGPD e quais são suas funções?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "A LGPD define dois agentes de tratamento de dados pessoais: o Controlador e o Operador. O Controlador é a pessoa física ou jurídica, de direito público ou privado, a quem competem as decisões referentes ao tratamento de dados pessoais. O Operador é a pessoa física ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do Controlador. Além deles, há a figura do Encarregado, que atua como canal de comunicação entre o Controlador, o Operador, os titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD)."
},
{
    pergunta: "Qual a lei LGPD?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018"
},
    
{
    pergunta: "*** IMPORTANTE ***\ntutorial sobre a instalação e configuração de perfil de usuário por domínio AD, faça abaixo esse relatório. Você deverá mencionar: instalação do domínio, criação do servidor de usuário, mudança da máquina escrava de rede compartilhada para estação, criação do perfil de usuário.?",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: `Passo 1: Instalação do Domínio:<br>
    1.1. Instale o Windows Server no computador designado para ser o servidor de domínio.<br><br>
    1.2. Após a instalação, abra o 'Gerenciador do Servidor' e selecione a opção 'Adicionar Funções e Recursos'.<br><br>
    1.3. Siga o assistente de instalação e selecione a função 'Serviços de Domínio Active Directory'.<br><br>
    1.4. Conclua a instalação, promovendo o servidor a um Controlador de Domínio.<br><br><br>
    
    Passo 2: Criação do Servidor de Usuário:<br><br>
    
    2.1. No 'Gerenciador do Servidor', vá para 'Ferramentas' > 'Usuários e Computadores do Active Directory'.<br><br>
    2.2. Crie um novo usuário que será utilizado como servidor de usuário.<br><br>
    2.3. Atribua permissões apropriadas ao usuário de acordo com as necessidades do ambiente.<br><br>
    
    Passo 3: Mudança da Máquina Escrava de Rede Compartilhada para Estação:<br><br>
    
    3.1. No computador que será integrado ao domínio como uma estação de trabalho, acesse as configurações de rede.<br><br>
    3.2. Modifique o tipo de rede de 'Rede Compartilhada' para 'Estação' e insira o nome do domínio.<br><br>
    3.3. Faça login no domínio usando as credenciais de um usuário autorizado do Active Directory.<br><br>
    
    Passo 4: Criação do Perfil de Usuário:<br><br>
    
    4.1. No 'Gerenciador do Servidor', vá para 'Ferramentas' > 'Usuários e Computadores do Active Directory'.<br><br>
    4.2. Selecione o usuário para o qual deseja criar um perfil de usuário.<br><br>
    4.3. Acesse as propriedades do usuário e vá para a guia 'Perfil'.<br><br>
    4.4. Configure o perfil de usuário de acordo com as preferências, incluindo mapeamento de unidade de rede, configurações de ambiente, entre outros.<br><br>`
},
{
    pergunta: "Conceitue Compilance",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "O compliance refere-se à conformidade com leis, regulamentos, políticas internas e externas, bem como padrões éticos e comportamentais dentro de uma organização, prevenindo práticas ilegais, corrupção e fraudes."
},
    
{
    pergunta: "Ainda sobre compliance, apresente e explique cada uma das políticas, procedimentos e normas estabelecidos dentro da organização",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Políticas: Diretrizes gerais que orientam o comportamento e as decisões dos funcionários em relação a questões específicas, como ética, segurança da informação e conformidade legal. Procedimentos: Instruções detalhadas sobre como realizar determinadas tarefas ou processos dentro da organização, seguindo as políticas estabelecidas. Normas: Regras específicas e técnicas que devem ser seguidas para garantir a conformidade com padrões e regulamentos, como normas ISO, leis de privacidade de dados, entre outras."
},
{
    pergunta: "Explique a sigla AD.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "AD (Active Directory) é um serviço de diretório desenvolvido pela Microsoft para redes de domínio Windows. Ele armazena informações sobre objetos na rede e torna essas informações disponíveis para administradores e usuários."
},

{
    pergunta: "Explique a sigla DNS.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "DNS (Domain Name System) é um sistema que traduz nomes de domínio legíveis por humanos (como www.exemplo.com) em endereços IP numéricos (como 192.0.2.1) que os computadores usam para se comunicar entre si."
},

{
    pergunta: "Explique a sigla DHCP.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "DHCP (Dynamic Host Configuration Protocol) é um protocolo de rede usado para atribuir dinamicamente endereços IP e outras informações de configuração de rede aos dispositivos em uma rede para que possam se comunicar com outros IPs."
},

{
    pergunta: "Aula sobre sobre vários servidores. apresente e conceitue cada um deles. WEB / EMAIL / BANCO DE DADOS / ARQUIVOS",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: " 1. Servidor Web: O maestro da orquestra da internet, o servidor web é responsável por receber requisições de navegadores e entregar páginas da web. Imagine um restaurante: o servidor recebe seu pedido (requisição), busca o prato (página) na cozinha (banco de dados) e o entrega diretamente na sua mesa (navegador).<br>2. Servidor de Email:<br>Seu correio eletrônico não seria possível sem o servidor de email! Ele armazena, recebe, envia e gerencia suas mensagens, garantindo que elas cheguem ao destino correto. Imagine um carteiro digital: o servidor recebe suas cartas (emails), as organiza em caixas de correio (pastas) e as entrega aos destinatários.<br>3. Servidor de Banco de Dados:<br></br> O guardião dos seus dados, o servidor de banco de dados armazena e organiza informações cruciais para diversos sistemas. Imagine um cofre gigante: o servidor guarda seus dados confidenciais (nomes, senhas, etc.) e os disponibiliza para quem precisa (aplicativos, sites).<br>4. Servidor de Arquivos:O depósito universal da sua empresa, o servidor de arquivos permite que você armazene, acesse e compartilhe arquivos com segurança. Imagine um armário digital: o servidor armazena seus documentos, fotos e outros arquivos e permite que você os acesse de qualquer lugar."
},
{
    pergunta: "Explique a sigla TCP/IP.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "TCP/IP (Transmission Control Protocol/Internet Protocol) é um conjunto de protocolos de comunicação usados para interconectar dispositivos de rede na internet. O TCP cuida da transmissão de dados e o IP trata do endereçamento e roteamento dos pacotes de dados."
},
{
    pergunta: "Apresente algumas ameaças cibernéticas e como são praticadas",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Ameaças<br><br>Malware<br><br>Esse é um tipo comum de ameaça cibernética e trata-se de um software malicioso, desde vírus até ransomware. Quando infiltrado em máquinas, sistemas, dispositivos móveis e outros terminais, o malware rouba as informações confidenciais, sequestra sistemas e bases de dados e danifica arquivos vitais para a operação da sua organização.<br><br>Phishing<br><br>Técnica utilizada por criminosos cibernéticos baseada na obtenção de informações confidenciais por meio de engenharia social, por meio de mensagens e links fraudulentos. São verdadeiros ‘cavalos de Tróia’, que infiltram malwares no ambiente tecnológico  permitindo que o crime cibernético seja executado."
},
{
    pergunta: "Sobre ameaças cibernéticas, explique seus impactos",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Problemas na continuidade dos negócios<br><br>Um ataque cibernético, quando bem-sucedido, prolonga o tempo de inatividade da empresa e isso prejudica as atividades desenvolvidas pela empresa. Isso leva à interrupção das operações, gera a perda de produtividade e afeta as relações com clientes e parceiros.<br><br>Custos financeiros a longo prazo<br><br> Além de apontar a falha na segurança dos dados da empresa, um ataque cibernético gera gastos substanciais para o negócio. Lidar com as consequências dessa situação implica no investimento financeiro nos processos de restauração de sistemas comprometidos, além de despesas legais às quais também estão suscetíveis.<br><br>Prejuízos à reputação da organização<br><br>Empresas que sofrem ataque cibernético bem-sucedido têm a reputação conquistada no mercado prejudicada. A credibilidade com os clientes e fornecedores é comprometida, visto que um ataque cibernético bem-sucedido pode comprometer a operação de clientes, afetando toda uma cadeia produtiva."
},
{
    pergunta: "Explique cinco comandos Linux.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Os comandos Linux são essenciais para realizar várias tarefas no sistema operacional. Cinco comandos comuns são:\n1. 'ls': Lista os arquivos e diretórios no diretório atual.\n2. 'cd': Muda o diretório atual.\n3. 'mkdir': Cria um novo diretório.\n4. 'rm': Remove arquivos ou diretórios.\n5. 'grep': Procura por padrões em arquivos."
},
{
    pergunta: "Explique cinco comandos MS-DOS.",
    respostas: [], // Não há respostas predefinidas para perguntas discursivas
    tipo: "discursiva",
    explicacaoResposta: "Os comandos MS-DOS são utilizados para realizar várias operações em sistemas Windows. Cinco comandos comuns são:\n1. 'dir': Lista os arquivos e diretórios no diretório atual.\n2. 'cd': Muda o diretório atual.\n3. 'mkdir' ou 'md': Cria um novo diretório.\n4. 'del': Apaga arquivos.\n5. 'copy': Copia arquivos de um local para outro."
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
    document.getElementById("pergunta").innerHTML = perguntaAtual.pergunta.replace(/\n/g, "<br>");

    const listaRespostas = document.getElementById("respostas");
    listaRespostas.innerHTML = "";

    // Verifica o tipo da pergunta
    if (perguntaAtual.tipo === "discursiva") {
        // Cria um elemento de texto para resposta discursiva
        const itemResposta = document.createElement("li");
        const textAreaInput = document.createElement("textarea");
        textAreaInput.name = "resposta-discursiva";
        textAreaInput.rows = 5;
        textAreaInput.cols = 70;

        itemResposta.appendChild(textAreaInput);
        listaRespostas.appendChild(itemResposta);
    } else {
        // Cria opções de resposta múltipla
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
    const perguntaAtual = perguntas[indicePerguntaAtual];
    const feedbackElement = document.getElementById("feedback");
    let respostaSelecionada;

    if (perguntaAtual.tipo === "discursiva") {
        respostaSelecionada = document.querySelector("textarea[name='resposta-discursiva']").value.trim();
    } else {
        respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    }

    if (perguntaAtual.tipo === "discursiva") {
        if (respostaSelecionada) {
            // Mostra a explicação da resposta para perguntas discursivas
            feedbackElement.innerHTML = `Confira a resposta esperada<br><br><span style="color:white">${perguntaAtual.explicacaoResposta}</span>`;
            feedbackElement.classList.remove("erro");
            feedbackElement.classList.add("acerto");

            document.getElementById("proxima-pergunta").style.display = "block";
        } else {
            alert("Por favor, insira uma resposta.");
        }
    } else {
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


