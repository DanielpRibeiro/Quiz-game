const perguntas = [

    {
        pergunta: `Sobre arquivo strings.xml qual a função deste arquivo em um projeto Java Android?
        
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
        pergunta: `Para gerar uma lista de itens em Java Android qual exemplo de código abaixo ilustra como criar tal lista?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – ListView listView = findViewById(R.id.listview);
    
        II – ListIdView listIdView = findViewById(R.id.listidview);
    
        III – ListView listView = findListViewById(R.id.listview);
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "a) II e III, apenas". A primeira alternativa (I) está correta, pois usa a função findViewById para obter a referência de uma ListView a partir de um identificador de recurso. No entanto, a segunda alternativa (II) está incorreta, pois menciona uma classe inexistente ListIdView. A terceira alternativa (III) também está incorreta, pois a função findListViewById não existe no Android.',
      },
    
    {
        pergunta: `Em Java Android o que precisamos pra montar uma lista em um arquivo de layout?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Uma UITableView
    
        II – Uma ListView
    
        III – Um Adapter
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 0,
        explicacaoResposta: 'A opção correta é "a) II e III, apenas". Para montar uma lista em um arquivo de layout em Java Android, precisamos de uma ListView (alternativa II), que é o componente responsável por exibir uma lista de itens. Também precisamos de um Adapter (alternativa III), que é responsável por fornecer os dados para a ListView. A alternativa I, UITableView, não é utilizada em Java Android, mas sim em desenvolvimento iOS com Objective-C ou Swift.',
      },
    
    {
        pergunta: `Em uma lista de itens em Java Android como descubro em qual linha o usuário clicou?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Através do método didSelectRowAt
    
        II – Pelo método cellForRow
    
        III – Através do método setOnItemClickListener
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e) III somente". Em Java Android, para descobrir em qual linha o usuário clicou em uma lista de itens, utilizamos o método setOnItemClickListener (alternativa III). Esse método é associado à ListView e permite que um ouvinte (listener) seja notificado quando um item da lista é clicado. As alternativas I e II não estão corretas, pois mencionam métodos utilizados em outros contextos de desenvolvimento de aplicativos, como iOS (métodos didSelectRowAt e cellForRow).',
      },
    
    {
        pergunta: `Para que seja possível conectar a uma API-REST na internet é necessário adicionar um permissão de acesso a internet, como esta permissão é feita?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – No arquivo AndroidManifest.xml
    
        II – <uses-permission android:name="android.permission.INTERNET" />
    
        III – No arquivo AndroidConnections.xml
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 1,
        explicacaoResposta: 'A opção correta é "b) I e II, apenas". Para conceder permissão de acesso à internet a um aplicativo Android, é necessário adicionar uma declaração de permissão no arquivo AndroidManifest.xml (alternativa I), utilizando o elemento <uses-permission> com o atributo android:name="android.permission.INTERNET" (alternativa II). Não há nenhum arquivo denominado AndroidConnections.xml para esse fim.',
      },
    
    {
        pergunta: `Uma das funções de fazer uma classe implementar a interface Serializable é para:
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Passar um objeto de uma activity para outra
    
        II – É exigido no protocolo SOAP
    
        III – Para comunicação por Docker é necessário
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I  apenas". A interface Serializable em Java é usada para serializar objetos, ou seja, converter objetos em uma sequência de bytes para que possam ser armazenados em um arquivo, passados como parâmetros ou enviados pela rede. Portanto, a afirmação I está correta. No entanto, não há relação direta entre a interface Serializable e o protocolo SOAP ou comunicação por Docker, então as afirmações II e III estão incorretas.',
      },

    //   6/11

    {
        pergunta: `Alguns dos protocolos que podemos citar para comunicação via API-REST com o servidor podemos citar:
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – GET
    
        II – POST
    
        III – DELETE
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 2,
        explicacaoResposta: 'A opção correta é "c) I, II e III". Os protocolos comumente utilizados para comunicação via API-REST são: <br>- GET: utilizado para recuperar dados do servidor <br>- POST: utilizado para enviar dados para o servidor <br>- DELETE: utilizado para excluir recursos no servidor',
      },
    
    {
        pergunta: `Algumas das dependências que podemos adicionar ao projeto Java Android para fazer a comunicação via API-REST podemos citar:
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – implementation("com.squareup.okhttp3:okhttp:3.10.0")
    
        II – implementation("com.google.code.gson:gson:2.8.8")
    
        III – implementation("com.google.code.json:json:2.8.8")
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 1,
        explicacaoResposta: 'A opção correta é "b)',
      },
    
    {
        pergunta: `Um exemplo de cabeçalho ao incluir numa requisição API-REST é:
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – "application/json; charset=utf-8"
    
        II – "application/gson; charset=utf-8"
    
        III – "application/gson; charset=utf-16"
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I somente". Um exemplo de cabeçalho comumente utilizado em uma requisição API-REST é "application/json; charset=utf-8" (alternativa I), indicando que o conteúdo da requisição está no formato JSON e codificado em UTF-8. As alternativas II e III estão incorretas, pois "application/gson" não é um tipo de mídia padrão, e não é comum especificar o charset como utf-16 em requisições API-REST.',
      },
    
    {
        pergunta: `O protocolo de comunicação com o servidor é baseado em:
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Request
    
        II – Response
    
        III – Forward
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 1,
        explicacaoResposta: 'A opção correta é "b) I e II, apenas". O protocolo de comunicação com o servidor em uma aplicação cliente-servidor, como é o caso da comunicação via API-REST em Java Android, é baseado em requisições (Request) e respostas (Response). A alternativa III (Forward) não está relacionada ao protocolo de comunicação com o servidor, mas sim a outros contextos, como redirecionamento de requisições em servidores web.',
      },
    
    {
        pergunta: `Uma biblioteca externa contém uma classe Gson, para qual finalidade a usamos o projeto de comunicação via API-REST.
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Converte GSON para JSON
    
        II – Converte String para Gson
    
        III – Converte uma instância de uma classe para o formato JSON
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e) I, II e III". A classe Gson, fornecida por uma biblioteca externa, é comumente utilizada em projetos de comunicação via API-REST para serialização e desserialização de objetos JSON. <br>- A alternativa I está correta, pois Gson é utilizada para converter objetos Gson para o formato JSON. <br>- A alternativa II está correta, pois Gson pode ser usada para converter uma String JSON para um objeto Gson. <br>- A alternativa III está correta, pois Gson pode ser usada para converter uma instância de uma classe Java para o formato JSON.',
      },
    
    {
        pergunta: `Qual a função da classe MediaType na comunicação via API-REST em um projeto Java Android?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – É responsável por montar a requisição em si
    
        II – É utilizado para compor o corpo da requisição
    
        III – É utilizado para compor o cabeçalho da requisição
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e) III somente". A classe MediaType em um projeto Java Android é utilizada para compor o cabeçalho da requisição em comunicações via API-REST. Ela define o tipo de mídia (como application/json, application/xml, etc.) que está sendo enviada ou recebida na requisição HTTP. As alternativas I e II estão incorretas, pois a classe MediaType não é responsável por montar a requisição em si ou compor o corpo da requisição, mas sim por especificar o tipo de mídia no cabeçalho da requisição.',
      },
    
    //   12/18

    {
        pergunta: `A classe OkHttpClient é utilizada no projeto Java Android para comunicação via API-REST no servidor. Que função esta classe desempenha?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Executar a requisição ao servidor
    
        II – Montar a requisição ao servidor
    
        III – Pegar a resposta vinda do servidor
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d)  apenas". A classe OkHttpClient é responsável por montar a requisição ao servidor',
      },
    
    {
        pergunta: `Qual a função da classe Request usada no projeto Java Android em uma API-REST?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Montar a requisição
    
        II – Fazer a requisição
    
        III – Pegar a resposta da requisição
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) apenas"..',
      },
    
    {
        pergunta: `Em um projeto Java Android qual a função da classe Response utilizada no projeto para comunicação via API-REST?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Capturar a resposta do servidor
    
        II – Montar a requisição
    
        III – Fazer a requisição
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I somente". A classe Response é utilizada para representar a resposta do servidor após o envio de uma requisição.',
      },
    
    {
        pergunta: `Para pegar a resposta do corpo do response do servidor qual classe usamos?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – ResponseBody
    
        II – Response
    
        III – ResponseMedia
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I, apenas". Para pegar a resposta do corpo do response do servidor em um projeto Java Android, utilizamos a classe ResponseBody (alternativa I). As alternativas II e III estão incorretas, pois não existem classes chamadas Response e ResponseMedia para este propósito.',
      },
    
    {
        pergunta: `Quais são os parâmetros necessários para que seja possível montar uma requisição ao servidor?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Uma URL para a rota ao servidor
    
        II – Um cabeçalho para a requisição
    
        III – Definir o tipo da requisição (exemplo: get, post...)
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 2,
        explicacaoResposta: 'A opção correta é "c) I, II e III". Para montar uma requisição ao servidor em um projeto Java Android, são necessários os seguintes parâmetros: <br>- Uma URL para a rota ao servidor (alternativa I) <br>- Um cabeçalho para a requisição (alternativa II) <br>- Definir o tipo da requisição (exemplo: GET, POST) (alternativa III)',
      },
    
    {
        pergunta: `Para montarmos uma requisição do tipo POST do que precisamos?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Uma URL para a rota ao servidor
    
        II – Um cabeçalho para a requisição
    
        III – O corpo da requisição, um objeto JSON por exemplo
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 2,
        explicacaoResposta: 'A opção correta é "c) I, II e III, apenas". Para montar uma requisição do tipo POST em um projeto Java Android, são necessários os seguintes parâmetros: <br>- Um cabeçalho para a requisição (alternativa II) <br>- O corpo da requisição, que pode ser um objeto JSON, por exemplo (alternativa III) <br>A alternativa I não  é necessariamente obrigatória(mas insira) para montar uma requisição POST, pois a URL pode ser definida de outras formas, como por parâmetros de método.',
      },
    
    //   19/26

    {
        pergunta: `Ao iniciarmos um projeto de uma API-REST em Node JS qual comando usamos para criar o nosso projeto inicialmente?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm init
    
        II – npm start
    
        III – nodejs start
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I , apenas". Para iniciar um projeto de uma API-REST em Node.js, o comando utilizado é "npm init" (alternativa I), que cria um novo arquivo package.json para gerenciar as dependências e configurações do projeto. O comando "npm start" (alternativa II) é comumente utilizado para iniciar o servidor Node.js após configurar o projeto. A alternativa III está incorreta, pois não existe um comando "nodejs start" para iniciar um projeto em Node.js.',
      },

      {
        pergunta: `Para baixarmos a biblioteca do express no nosso projeto API-REST em Node JS qual comando utilizamos?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm install --save express
    
        II – node install --save express
    
        III – npm download --save express
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I somente". Para baixar a biblioteca do express no projeto API-REST em Node.js, utilizamos o comando "npm install --save express" (alternativa I). Os comandos nas alternativas II e III estão incorretos, pois não existe um comando "node install" e "npm download" para instalar pacotes do npm.',
      },
    
    {
        pergunta: `Para não precisarmos reiniciar o servidor a cada alteração qual biblioteca precisamos instalar?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Express
    
        II – Nodemon
    
        III – Morgan
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I apenas". ',
      },
    
    {
        pergunta: `O que podemos afirmar sobre a biblioteca do Nodemon?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Para instalar usamos o seguinte comando: npm install --save-dev nodemon
    
        II – Garante que a cada alteração no projeto não é mais necessário reiniciar o servidor toda hora
    
        III – Para que funcione corretamente uma modificação deverá ser feita no arquivo package.json
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 1,
        explicacaoResposta: 'A opção correta é "b) I e II, apenas". Para instalar o Nodemon, utilizamos o comando "npm install --save-dev nodemon" (alternativa I). O Nodemon garante que a cada alteração no projeto não é mais necessário reiniciar o servidor toda hora (alternativa II). Não é necessário fazer nenhuma modificação no arquivo package.json para que o Nodemon funcione corretamente, portanto a alternativa III está incorreta.',
      },
    
    {
        pergunta: `Por padrão de projeto visto em sala de aula qual deverá ser o primeiro arquivo a ser executado em um projeto API-REST usando NodeJS?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – app.js
    
        II – server.js
    
        III – package.json
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e).". Por padrão, o primeiro arquivo a ser executado em um projeto API-REST usando Node.js geralmente é o "server.js" (alternativa II), que configura e inicia o servidor. O arquivo "package.json" (alternativa III) é utilizado para gerenciar as dependências e configurações do projeto, enquanto o "app.js" (alternativa I) é comumente utilizado como ponto de entrada da aplicação',
      },
    
    {
        pergunta: `Qual configuração no arquivo package.json precisamos fazer para que o nodemon funcione corretamente?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Insira  o código na tag scripts: "start": "nodemon server.js"
    
        II – Insira  o código na tag startup: "start": "nodemon server.js"
    
        III – Insira  o código na tag scripts: "start": "nodemon app.js"
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "D) I, apenas". Para configurar o nodemon no arquivo package.json, precisamos inserir o código na tag scripts da seguinte forma: "start": "nodemon server.js" (alternativa I).',
      },
    
    {
        pergunta: `Qual a função da biblioteca morgan em um projeto API-REST em Node JS?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – É um componente para conexão ao banco
    
        II – É um depurador de código
    
        III – É um componente para programação hibrida
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "E) II, apenas". ',
      },
    
    {
        pergunta: `Para instalar a biblioteca do morgan ao seu projeto qual comando utilizamos?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm install --save morgan
    
        II – node install --save morgan
    
        III – npm download --save morgan
    
        É correto afirmar que estão corretas:
    
    
        a) II e III, apenas
        b) I e II, apenas
        c) I, II e III
        d) I somente
        e) II somente`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I somente". Para instalar a biblioteca Morgan em um projeto Node.js, utilizamos o comando "npm install --save morgan" (alternativa I). Os comandos nas alternativas II e III estão incorretos, pois não existe um comando "node install" e "npm download" para instalar pacotes do npm.',
      },
    
    {
        pergunta: `Qual a finalidade da biblioteca body-parser em um projeto NodeJS para API-REST?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Seve para processar imagens que possam vir no corpo da requisição
    
        II – Serve para requisições get
    
        III – Parsear o conteúdo do corpo da requisição no formato de json
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e) III somente". A biblioteca body-parser em um projeto Node.js para API-REST tem a finalidade de parsear o conteúdo do corpo da requisição no formato JSON (alternativa III). Ela não é utilizada para processar imagens (alternativa I) nem exclusivamente para requisições GET (alternativa II).',
      },
      
    //   26/30

    {
        pergunta: `Qual comando utilizamos para instalar o body-parser ao nosso projeto NodeJs para API-REST?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm download --save body-parser
    
        II – npm install --save body-parser
    
        III – node install --save body-parser
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 4,
        explicacaoResposta: 'A opção correta é "e) II somente". Para instalar o body-parser em um projeto Node.js para API-REST, utilizamos o comando "npm install --save body-parser" (alternativa II). Os comandos nas alternativas I e III estão incorretos, pois não existe um comando "npm download" e "node install" para instalar pacotes do npm.',
      },
    
    {
        pergunta: `O que podemos afirmar sobre a biblioteca cors?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – Para instala-la usamos o seguinte comando: npm install cors
    
        II – Serve para manter a compatibilidade de comunicação entre diferentes plataformas
    
        III – Pode ser usada dentro do projeto usando o seguinte comando: const cors = require('cors');
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "c) I, II E III apenas". Para instalar a biblioteca cors em um projeto Node.js, utilizamos o comando "npm install cors" (alternativa I). A biblioteca cors é utilizada para permitir ou bloquear requisições HTTP entre diferentes origens, mantendo a compatibilidade de comunicação entre diferentes plataformas (alternativa II). E podemos utilizá-la dentro do projeto Node.js utilizando o comando "const cors = require(\'cors\');" (alternativa III).',
      },
    
    {
        pergunta: `Como fazemos para instalar a biblioteca para dar suporte ao mysql ao nosso projeto NodeJS para API-REST?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm install --save mysql
    
        II – npm download --save mysql
    
        III – node install --save mysql
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I somente". Para instalar a biblioteca mysql em um projeto Node.js para API-REST, utilizamos o comando "npm install --save mysql" (alternativa I). Os comandos nas alternativas II e III estão incorretos, pois não existe um comando "npm download" e "node install" para instalar pacotes do npm.',
      },
    
    {
        pergunta: `Qual comando usamos para subir nossa aplicação NodeJS API-REST no servidor que já foi instalada a biblioteca para que a cada modificação do projeto não é necessário reiniciar o servidor?
    
        Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?
    
        I – npm start
    
        II – node start
    
        III – npmjs start
    
        É correto afirmar que estão corretas:`,
        respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
        correta: 3,
        explicacaoResposta: 'A opção correta é "d) I, apenas". Para subir nossa aplicação Node.js API-REST no servidor e utilizar o nodemon para que a cada modificação do projeto não seja necessário reiniciar o servidor, utilizamos o comando "npm start" (alternativa I). Os comandos nas alternativas II e III estão incorretos, pois não existe um comando "node start" e "npmjs start" para iniciar a aplicação em Node.js.',
      },
    
      
      





    // ********************************

    // {
    //     pergunta: "Para gerar uma lista de itens em Java Android qual exemplo de código abaixo ilustra como criar tal lista?",
    //     respostas: [
    //         "a) ListView listView = findViewById(R.id.listview);",
    //         "b) ListIdView listIdView = findViewById(R.id.listidview);",
    //         "c) ListView listView = findListViewById(R.id.listview);"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "O código correto para criar uma lista em Java Android é o exemplo a), pois utiliza o método findViewById() para obter a referência à ListView pelo seu ID."
    // },
    // {
    //     pergunta: "Em Java Android o que precisamos pra montar uma lista em um arquivo de layout?",
    //     respostas: [
    //         "a) Uma UITableView",
    //         "b) Uma ListView",
    //         "c) Um Adapter"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "Para montar uma lista em um arquivo de layout em Java Android, precisamos apenas de uma ListView, que é o elemento responsável por exibir uma lista de itens."
    // },
    // {
    //     pergunta: "Em uma lista de itens em Java Android como descubro em qual linha o usuário clicou?",
    //     respostas: [
    //         "a) Através do método didSelectRowAt",
    //         "b) Pelo método cellForRow",
    //         "c) Através do método setOnItemClickListener"
    //     ],
    //     correta: 2,
    //     explicacaoResposta: "Para descobrir em qual linha o usuário clicou em uma lista de itens em Java Android, utilizamos o método setOnItemClickListener, que permite definir um listener para lidar com cliques em itens da lista."
    // },
    // {
    //     pergunta: "Para que seja possível conectar a uma API-REST na internet é necessário adicionar um permissão de acesso a internet, como esta permissão é feita?",
    //     respostas: [
    //         "a) No arquivo AndroidManifest.xml",
    //         "b) <uses-permission android:name=\"android.permission.INTERNET\" />",
    //         "c) No arquivo AndroidConnections.xml"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "A permissão de acesso à internet para conectar a uma API-REST é feita no arquivo AndroidManifest.xml, onde é necessário incluir a permissão <uses-permission android:name=\"android.permission.INTERNET\" />."
    // },
    // {
    //     pergunta: "Uma das funções de fazer uma classe implementar a interface Serializable é para:",
    //     respostas: [
    //         "a) Passar um objeto de uma activity para outra",
    //         "b) É exigido no protocolo SOAP",
    //         "c) Para comunicação por Docker é necessário"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Uma das funções de fazer uma classe implementar a interface Serializable é para passar um objeto de uma activity para outra em Java Android, permitindo a serialização e desserialização de objetos."
    // },
    // {
    //     pergunta: "Alguns dos protocolos que podemos citar para comunicação via API-REST com o servidor podemos citar:",
    //     respostas: [
    //         "a) GET",
    //         "b) POST",
    //         "c) DELETE"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Alguns dos protocolos que podemos citar para comunicação via API-REST com o servidor são GET, POST e DELETE. Esses protocolos são utilizados para realizar operações como obter dados, enviar dados e excluir dados, respectivamente."
    // },
    // {
    //     pergunta: "Algumas das dependências que podemos adicionar ao projeto Java Android para fazer a comunicação via API-REST podemos citar:",
    //     respostas: [
    //         "a) implementation(\"com.squareup.okhttp3:okhttp:3.10.0\")",
    //         "b) implementation(\"com.google.code.gson:gson:2.8.8\")",
    //         "c) implementation(\"com.google.code.json:json:2.8.8\")"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "Algumas das dependências que podemos adicionar ao projeto Java Android para fazer a comunicação via API-REST são a biblioteca OkHttp (com.squareup.okhttp3:okhttp), para realizar requisições HTTP, e a biblioteca Gson (com.google.code.gson:gson), para trabalhar com JSON de forma mais conveniente."
    // },
    // {
    //     pergunta: "Um exemplo de cabeçalho ao incluir numa requisição API-REST é:",
    //     respostas: [
    //         "a) \"application/json; charset=utf-8\"",
    //         "b) \"application/gson; charset=utf-8\"",
    //         "c) \"application/gson; charset=utf-16\""
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Um exemplo de cabeçalho ao incluir numa requisição API-REST é \"application/json; charset=utf-8\", que indica que o corpo da requisição está em formato JSON e o charset é UTF-8, uma codificação de caracteres."
    // },
    // {
    //     pergunta: "O protocolo de comunicação com o servidor é baseado em:",
    //     respostas: [
    //         "a) Request",
    //         "b) Response",
    //         "c) Forward"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "O protocolo de comunicação com o servidor é baseado em Response, pois o servidor responde às requisições feitas pelo cliente com os dados solicitados ou com uma mensagem de erro."
    // },
    // {
    //     pergunta: "Uma biblioteca externa contém uma classe Gson, para qual finalidade a usamos o projeto de comunicação via API-REST.",
    //     respostas: [
    //         "a) Converte GSON para JSON",
    //         "b) Converte String para Gson",
    //         "c) Converte uma instância de uma classe para o formato JSON"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "A classe Gson é utilizada para converter objetos Java para JSON e vice-versa em projetos de comunicação via API-REST."
    // },
    // {
    //     pergunta: "Qual a função da classe MediaType na comunicação via API-REST em um projeto Java Android?",
    //     respostas: [
    //         "a) É responsável por montar a requisição em si",
    //         "b) É utilizado para compor o corpo da requisição",
    //         "c) É utilizado para compor o cabeçalho da requisição"
    //     ],
    //     correta: 2,
    //     explicacaoResposta: "A classe MediaType é utilizada para compor o cabeçalho da requisição, especificando o tipo de mídia que está sendo enviada ou solicitada."
    // },
    // {
    //     pergunta: "A classe OkHttpClient é utilizada no projeto Java Android para comunicação via API-REST no servidor. Que função esta classe desempenha?",
    //     respostas: [
    //         "a) Executar a requisição ao servidor",
    //         "b) Montar a requisição ao servidor",
    //         "c) Pegar a resposta vinda do servidor"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "A classe OkHttpClient é responsável por executar a requisição ao servidor em projetos Java Android de comunicação via API-REST."
    // },
    // {
    //     pergunta: "Qual a função da classe Request usada no projeto Java Android em uma API-REST?",
    //     respostas: [
    //         "a) Montar a requisição",
    //         "b) Fazer a requisição",
    //         "c) Pegar a resposta da requisição"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "A classe Request é utilizada para montar a requisição que será enviada ao servidor em um projeto Java Android de comunicação via API-REST."
    // },
    // {
    //     pergunta: "Em um projeto Java Android qual a função da classe Response utilizada no projeto para comunicação via API-REST?",
    //     respostas: [
    //         "a) Capturar a resposta do servidor",
    //         "b) Montar a requisição",
    //         "c) Fazer a requisição"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "A classe Response é utilizada para capturar a resposta enviada pelo servidor em um projeto Java Android de comunicação via API-REST."
    // },
    // {
    //     pergunta: "Para pegar a resposta do corpo do response do servidor qual classe usamos?",
    //     respostas: [
    //         "a) ResponseBody",
    //         "b) Response",
    //         "c) ResponseMedia"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para acessar o corpo da resposta do servidor em um projeto Java Android de comunicação via API-REST, utilizamos a classe ResponseBody."
    // },
    // {
    //     pergunta: "Quais são os parâmetros necessários para que seja possível montar uma requisição ao servidor?",
    //     respostas: [
    //         "a) Uma URL para a rota ao servidor",
    //         "b) Um cabeçalho para a requisição",
    //         "c) Definir o tipo da requisição (exemplo: get, post...)"
    //     ],
    //     correta: 2,
    //     explicacaoResposta: "Para montar uma requisição ao servidor em um projeto Java Android de comunicação via API-REST, é necessário definir o tipo da requisição (GET, POST, etc.)."
    // },
    // {
    //     pergunta: "Para montarmos uma requisição do tipo POST do que precisamos?",
    //     respostas: [
    //         "a) Uma URL para a rota ao servidor",
    //         "b) Um cabeçalho para a requisição",
    //         "c) O corpo da requisição, um objeto JSON por exemplo"
    //     ],
    //     correta: 2,
    //     explicacaoResposta: "Para montar uma requisição do tipo POST em um projeto Java Android de comunicação via API-REST, é necessário incluir o corpo da requisição, que pode ser um objeto JSON, por exemplo."
    // },
    // {
    //     pergunta: "Ao iniciarmos um projeto de uma API-REST em Node JS qual comando usamos para criar o nosso projeto inicialmente?",
    //     respostas: [
    //         "a) npm init",
    //         "b) npm start",
    //         "c) nodejs start"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para iniciar um projeto de uma API-REST em Node JS, utilizamos o comando npm init para criar o projeto inicialmente."
    // },
    // {
    //     pergunta: "Para baixarmos a biblioteca do express no nosso projeto API-REST em Node JS qual comando utilizamos?",
    //     respostas: [
    //         "a) npm install --save express",
    //         "b) node install --save express",
    //         "c) npm download --save express"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para baixar a biblioteca do Express em um projeto API-REST em Node JS, utilizamos o comando npm install --save express."
    // },
    // {
    //     pergunta: "Para não precisarmos reiniciar o servidor a cada alteração qual biblioteca precisamos instalar?",
    //     respostas: [
    //         "a) Express",
    //         "b) Nodemon",
    //         "c) Morgan"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "Para evitar reiniciar o servidor a cada alteração em um projeto Node JS, utilizamos a biblioteca Nodemon."
    // },
    // {
    //     pergunta: "O que podemos afirmar sobre a biblioteca do Nodemon?",
    //     respostas: [
    //         "a) Para instalar usamos o seguinte comando: npm install --save-dev nodemon",
    //         "b) Garante que a cada alteração no projeto não é mais necessário reiniciar o servidor toda hora",
    //         "c) Para que funcione corretamente uma modificação deverá ser feita no arquivo package.json"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para instalar o Nodemon, utilizamos o comando npm install --save-dev nodemon. Ele garante que a cada alteração no projeto, não é mais necessário reiniciar o servidor toda hora."
    // },
    // {
    //     pergunta: "Por padrão de projeto visto em sala de aula qual deverá ser o primeiro arquivo a ser executado em um projeto API-REST usando NodeJS?",
    //     respostas: [
    //         "a) app.js",
    //         "b) server.js",
    //         "c) package.json"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "Por padrão de projeto, o primeiro arquivo a ser executado em um projeto API-REST usando NodeJS é o server.js."
    // },
    // {
    //     pergunta: "Qual configuração no arquivo package.json precisamos fazer para que o nodemon funcione corretamente?",
    //     respostas: [
    //         "a) Insira o código na tag scripts: 'start': 'nodemon server.js'",
    //         "b) Insira o código na tag startup: 'start': 'nodemon server.js'",
    //         "c) Insira o código na tag scripts: 'start': 'nodemon app.js'"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para que o nodemon funcione corretamente, devemos inserir o código na tag scripts do arquivo package.json: 'start': 'nodemon server.js'."
    // },
    // {
    //     pergunta: "Qual a função da biblioteca morgan em um projeto API-REST em Node JS?",
    //     respostas: [
    //         "a) É um componente para conexão ao banco",
    //         "b) É um depurador de código",
    //         "c) É um componente para programação hibrida"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "A biblioteca Morgan em um projeto API-REST em Node JS é utilizada como um depurador de código, registrando as requisições HTTP feitas ao servidor."
    // },
    // {
    //     pergunta: "Para instalar a biblioteca do morgan ao seu projeto qual comando utilizamos?",
    //     respostas: [
    //         "a) npm install --save morgan",
    //         "b) node install --save morgan",
    //         "c) npm download --save morgan"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para instalar a biblioteca do morgan em um projeto NodeJS, utilizamos o comando npm install --save morgan."
    // },
    // {
    //     pergunta: "Qual a finalidade da biblioteca body-parser em um projeto NodeJS para API-REST?",
    //     respostas: [
    //         "a) Seve para processar imagens que possam vir no corpo da requisição",
    //         "b) Serve para requisições get",
    //         "c) Parsear o conteúdo do corpo da requisição no formato de json"
    //     ],
    //     correta: 2,
    //     explicacaoResposta: "A biblioteca body-parser em um projeto NodeJS para API-REST é utilizada para parsear o conteúdo do corpo da requisição no formato JSON."
    // },
    // {
    //     pergunta: "Qual comando utilizamos para instalar o body-parser ao nosso projeto NodeJs para API-REST?",
    //     respostas: [
    //         "a) npm download --save body-parser",
    //         "b) npm install --save body-parser",
    //         "c) node install --save body-parser"
    //     ],
    //     correta: 1,
    //     explicacaoResposta: "Para instalar o body-parser em um projeto NodeJS para API-REST, utilizamos o comando npm install --save body-parser."
    // },
    // {
    //     pergunta: "O que podemos afirmar sobre a biblioteca cors?",
    //     respostas: [
    //         "a) Para instala-la usamos o seguinte comando: npm install cors",
    //         "b) Serve para manter a compatibilidade de comunicação entre diferentes plataformas",
    //         "c) Pode ser usada dentro do projeto usando o seguinte comando: const cors = require('cors');"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para instalar a biblioteca cors em um projeto NodeJS, utilizamos o comando npm install cors."
    // },
    // {
    //     pergunta: "Como fazemos para instalar a biblioteca para dar suporte ao mysql ao nosso projeto NodeJS para API-REST?",
    //     respostas: [
    //         "a) npm install --save mysql",
    //         "b) npm download --save mysql",
    //         "c) node install --save mysql"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para instalar a biblioteca para dar suporte ao MySQL em um projeto NodeJS para API-REST, utilizamos o comando npm install --save mysql."
    // },
    // {
    //     pergunta: "Qual comando usamos para subir nossa aplicação NodeJS API-REST no servidor que já foi instalada a biblioteca para que a cada modificação do projeto não é necessário reiniciar o servidor?",
    //     respostas: [
    //         "a) npm start",
    //         "b) node start",
    //         "c) npmjs start"
    //     ],
    //     correta: 0,
    //     explicacaoResposta: "Para subir nossa aplicação NodeJS API-REST no servidor, utilizamos o comando npm start."
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
