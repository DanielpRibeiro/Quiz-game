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
    pergunta: "Sobre o componente TextView em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n\n I – Este componente serve para exibir textos fixos na tela \n\n II – É possível que um usuário insira informações digitadas a partir deste componente \n\n III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: O TextView é usado para exibir textos na tela do Android. <br><br>Ele pode ser usado para mostrar textos simples, como títulos, ou textos mais complexos, como parágrafos formatados. <br><br>II - Incorreta: O TextView não é um componente de entrada de dados. Ele não permite que o usuário digite informações diretamente nele. Para isso, é necessário usar um componente como o EditText. <br><br>III - Incorreta: O TextView não é um componente  híbrido. Ele funciona apenas como um componente de saída de dados, exibindo textos na tela.',
  },
  {
    pergunta: "Sobre o atributos que possui sua unidade em “sp” em um projeto Java Android? \n\n Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout \n\n  II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo \n\n  III – Este atributo é usado para medir um tamanho de texto \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: A unidade "sp" é usada para definir o tamanho de texto e dimensões de componentes no layout. Ela é independente da densidade da tela, o que significa que o tamanho do texto e dos componentes será consistente em diferentes dispositivos.<br><br> II - Incorreta: A unidade "sp" não é usada para medir o tamanho de componentes como largura e altura. Para isso, é necessário usar unidades como "dp" ou "px".',
  },
  {
    pergunta: "Sobre o atributos que possui sua unidade em “dp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este atributo identifica tanto tamanho de texto como dimensões de componentes no layout  \n\n II – Este atributo é usado para medir um tamanho de um componente como largura e altura por exemplo \n\n III – Este atributo é usado para medir um tamanho de texto  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta: 'I - Incorreta: A unidade "dp" não é usada para definir o tamanho do texto. Ela é usada para definir dimensões de componentes no layout.<br><br> II - Correta: A unidade "dp" é usada para medir o tamanho de componentes como largura e altura. Ela é independente da densidade da tela, o que significa que o tamanho dos componentes será consistente em diferentes dispositivos. <br><br>III - Incorreta: A unidade "dp" não é usada para medir o tamanho do texto. Para isso, é necessário usar unidades como "sp" ou "px".',
  },
  {
    pergunta: "Sobre o atributos de um componente visual em especial o “id” em um projeto Java Android? \n\n Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este atributo identifica o componente de layout  \n\n II – Este atributo é usado em qualquer componente  \n\n III – Este atributo é opcional  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
    explicacaoResposta: 'I - Correta: O atributo "id" identifica um componente de layout. Ele é um valor único que permite que o componente seja referenciado por outros componentes e pelo código Java. <br><br>II - Correta: O atributo "id" pode ser usado em qualquer componente visual do Android.<br><br>III - Incorreta: O atributo "id" não é opcional. É necessário definir um "id" único para cada componente visual que você deseja usar no seu projeto.',
  },
  {
    pergunta: "Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?  \n\n I – Este componente serve para exibir textos fixos na tela \n\n II – É possível que um usuário insira informações digitadas a partir deste componente \n\n III – É um componente hibrido onde hora se compota como entrada de dados e hora se comporta com saída de dados  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
    explicacaoResposta: 'I - Correta: O PlainText é um componente que serve para exibir textos fixos na tela. Ele é similar ao TextView, mas oferece algumas funcionalidades a mais, como a capacidade de formatar o texto com HTML e CSS.<br>II - Correta: O PlainText permite que o usuário insira informações digitadas. Isso significa que ele pode ser usado como um campo de entrada de dados, como um nome ou um endereço.<br>III - Correta: O PlainText é um componente híbrido que pode ser usado tanto como entrada de dados quanto como saída de dados. Ele pode exibir textos fixos e também permitir que o usuário digite informações.',
  },
  {
    pergunta: "Sobre o componente PlainText em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este componente pode conter teclado do tipo numérico \n\n II – Este componente pode conter teclado de texto comum  \n\n III – Este componente pode conter um teclado discador \n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 2,
    explicacaoResposta: 'I - Correta: O PlainText pode conter um teclado do tipo numérico. Isso significa que o usuário pode digitar apenas números neste campo.<br>II - Correta: O PlainText pode conter um teclado de texto comum. Isso significa que o usuário pode digitar qualquer tipo de caractere neste campo.<br>III - Correta: O PlainText pode conter um teclado discador. Isso significa que o usuário pode usar o teclado para digitar números de telefone.',
  },
  {
    pergunta: "O que podemos afirmar sobre o limitador de tamanho do tipo “wrap_content” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras? \n\n  I – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo  \n\n II – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo III – Este atributo limita o tamanho do componente ao tamanho fixo especificado  É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta: 'I - Correta: O "wrap_content" limita o tamanho do componente ao mínimo necessário para abrigar o seu conteúdo. Isso significa que o componente terá o tamanho exato para mostrar o seu conteúdo, sem espaços em branco.<br>II - Incorreta: O "wrap_content" não limita o tamanho do componente ao seu componente pai. O tamanho do componente será definido pelo seu conteúdo, mesmo que seja maior que o seu componente pai.<br>III - Incorreta: O "wrap_content" não limita o tamanho do componente a um tamanho fixo. O tamanho do componente será definido pelo seu conteúdo, e poderá variar de acordo com a quantidade de conteúdo que ele precisa mostrar.',
  },

  {
    pergunta: "O que podemos afirmar sobre o limitador de tamanho do tipo “match_parent” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta:'Quando um elemento tem seu tamanho definido como match_parent, ele ocupará todo o espaço disponível no contêiner pai. Isso significa que o elemento se estenderá tanto horizontal quanto verticalmente para preencher completamente o espaço disponível.',
  },
  {
    pergunta: "O que podemos afirmar sobre o limitador de tamanho do tipo “10dp” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
    explicacaoResposta:'Quando um elemento tem seu tamanho definido como 10dp (density-independent pixels), ele terá um tamanho fixo de 10 pixels independentemente da densidade de pixels do dispositivo. Isso garante consistência visual entre diferentes dispositivos Android.',
  },
  {
    pergunta: "O que podemos afirmar sobre o limitador de tamanho do tipo “Constraint Widget” em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este atributo limita o tamanho do componente ao mínimo para abrigar o seu conteúdo\n\nII – Este atributo limita o tamanho do componente ao seu componente pai para abrigar o seu conteúdo\n\nIII – Este atributo limita o tamanho do componente ao tamanho fixo especificado as margens do vizinho especificado, podendo ser uma própria borda da tela \n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
    explicacaoResposta:'No Android, um ConstraintWidget é um conceito usado no ConstraintLayout, que é um tipo de layout usado para criar interfaces de usuário flexíveis e responsivas. Os ConstraintWidgets são usados para definir as restrições de posicionamento e tamanho dos elementos na tela.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente Button em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este componente pode ser conectado a lógica de negócio por um método public void nomeMetodo(View view){}\n\nII – Este componente Só existe no iPhone\n\nIII – Este tipo de conexão somente funciona em kotlin\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'O componente Button é usado para criar botões clicáveis em um aplicativo Android. Ele pode exibir texto ou ícones e responderá a interações do usuário, como toques ou cliques. Os botões são comumente usados para acionar ações ou navegar entre telas em um aplicativo.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente Button em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Este componente pode ser conectado a lógica de negócio no atributo onClick\n\nII – Este componente Só existe no iPhone\n\nIII – Este tipo de conexão somente funciona em kotlin\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'O componente Button é usado para criar botões clicáveis em um aplicativo Android. Ele pode exibir texto ou ícones e responderá a interações do usuário, como toques ou cliques. Os botões são comumente usados para acionar ações ou navegar entre telas em um aplicativo.',
  },

  {
    pergunta: "O que podemos afirmar sobre como conectar os componentes a regra de negócio em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – A conexão é feita pelo método findViewById(id);\n\nII – Ao criar os componentes automaticamente já são vinculados\n\nIII – Tal conexão não existe\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'No desenvolvimento Android, a conexão entre os componentes da interface do usuário e a lógica de negócios geralmente é feita usando o padrão de arquitetura MVP (Model-View-Presenter) ou MVVM (Model-View-ViewModel). Isso envolve separar claramente a lógica de negócios da interface do usuário, permitindo uma melhor organização e testabilidade do código. Os componentes da interface do usuário interagem com os apresentadores ou modelos, que, por sua vez, manipulam a lógica de negócios e atualizam a interface do usuário conforme necessário.',
  },
  {
    pergunta: "O que podemos afirmar sobre como conectar os componentes a regra de negócio em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – A conexão é feita dentro do método onCreate()\n\nII – Ao criar os componentes automaticamente já são vinculados\n\nIII – Tal conexão não existe\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'No desenvolvimento Android, os componentes da interface do usuário (como botões, campos de texto, etc.) geralmente são conectados à lógica de negócios (como processamento de dados, validação, etc.) usando o padrão de arquitetura de software. Exemplos de padrões comuns incluem MVC (Model-View-Controller), MVP (Model-View-Presenter) e MVVM (Model-View-ViewModel). Esses padrões ajudam a separar as responsabilidades da interface do usuário e da lógica de negócios, facilitando a manutenção e o teste do aplicativo.',
  },
  {
    pergunta: "O que podemos afirmar sobre layout do tipo linear layout vertical em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n  I – Ele alinha todos os componentes inseridos dentro dele em uma linha horizontal\n\nII – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\nÉ correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'Um LinearLayout com orientação vertical organiza seus elementos filhos em uma única coluna vertical. Isso significa que os elementos são empilhados de cima para baixo, com um elemento abaixo do outro.',
  },
  {
    pergunta: "O que podemos afirmar sobre layout do tipo linear layout horizontal em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Ele alinha todos os componentes inseridos dentro dele em uma linha horizontal\n\nII – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\n É correto afirmar que estão corretas:",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
    explicacaoResposta:'Um LinearLayout com orientação horizontal organiza seus elementos filhos em uma única linha horizontal. Isso significa que os elementos são dispostos lado a lado, com um elemento ao lado do outro.',
  },
  {
    pergunta: "O que podemos afirmar sobre layout do atributos gravity em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – Ele alinha todos os componentes inseridos dentro dele conforme o tipo de gravidade escolhida\n\n II – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical e horizontal mutuamente\n\n III – Ele alinha todos os componentes inseridos dentro dele em uma linha vertical\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'O atributo android:gravity em um layout Android controla o posicionamento do conteúdo dentro desse layout. Por exemplo, se você definir android:gravity="center", o conteúdo será centralizado horizontal e verticalmente dentro do layout.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente seekBar em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – É um scroller vertical que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n III – É um scroller horizontal que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 3,
    explicacaoResposta:'O componente SeekBar é uma barra de rolagem que permite aos usuários selecionar um valor em um intervalo definido. Os usuários podem deslizar o polegar da barra de rolagem para frente e para trás para selecionar o valor desejado. É comumente usado para ajustar configurações, como volume, brilho, etc.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – É um scroller vertical que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n III – É um scroller horizontal que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta:'',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – Possui valor máximo\n\n III – Possui valor mínimo\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 2,
    explicacaoResposta:'O componente NumberPicker é uma interface de usuário que permite aos usuários selecionar um número de um intervalo definido. Os usuários podem rolar para cima e para baixo na interface do usuário para aumentar ou diminuir o número selecionado. É útil quando os usuários precisam inserir números específicos em um aplicativo, como selecionar uma idade ou quantidade.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente numberPicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É uma linha que possui um ponto onde ao deslocarmos o mesmo um valor associado a ele varia\n\n II – Possui valor máximo e mínimo\n\n III – Pode representar uma lista de strings\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
    explicacaoResposta:'O componente NumberPicker é uma interface de usuário que permite aos usuários selecionar um número de um intervalo definido. Os usuários podem rolar para cima e para baixo na interface do usuário para aumentar ou diminuir o número selecionado. É útil quando os usuários precisam inserir números específicos em um aplicativo, como selecionar uma idade ou quantidade.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente datePicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\nI – É um componente para seleção de data \n\nII – É um componente para seleção de hora\n\n III – É um componente para seleção de data e hora\n\nÉ correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
    explicacaoResposta:'O componente DatePicker é uma interface de usuário que permite aos usuários selecionar uma data específica. Ele exibe um calendário onde os usuários podem navegar para selecionar o dia, mês e ano desejados. É comumente usado em aplicativos onde a seleção de datas é necessária, como aplicativos de calendário ou aplicativos de agendamento.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente timePicker em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para seleção de data\n\n II – É um componente para seleção de hora\n\nIII – É um componente para seleção de data e hora\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta:'O componente TimePicker é uma interface de usuário que permite aos usuários selecionar um horário específico. Ele exibe um relógio onde os usuários podem ajustar a hora e o minuto desejados. É útil em aplicativos onde a seleção de horários é necessária, como aplicativos de alarme ou aplicativos de lembrete.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente AlertDialog em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para informar algo ao usuário e aguardar ele confirmar\n\n II – É um componente para informar algo ao usuário e aguardar ele escolher uma opção\n\n III – É um componente para informar algo ao usuário de forma temporária(a mensagem some automaticamente)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
    explicacaoResposta:'O componente AlertDialog é uma caixa de diálogo que exibe uma mensagem para o usuário e geralmente fornece botões para realizar ações. Pode ser usado para exibir mensagens informativas, solicitar confirmação do usuário ou solicitar entrada do usuário. É uma ferramenta comum para interações de usuário em aplicativos Android.',
  },
  {
    pergunta: "O que podemos afirmar sobre o componente Toast em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um componente para informar algo ao usuário e aguardar ele confirmar\n\n II – É um componente para informar algo ao usuário e aguardar ele escolher uma opção\n\n III – É um componente para informar algo ao usuário de forma temporária(a mensagem some automaticamente)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) III somente"],
    correta: 4,
    explicacaoResposta:'O componente Toast é uma pequena mensagem pop-up que é exibida na tela por um curto período de tempo. É usado para fornecer feedback não intrusivo ao usuário, como mensagens de confirmação ou mensagens de erro. Os Toasts desaparecem automaticamente após alguns segundos, sem a necessidade de interação do usuário.',
  },
  {
    pergunta: "O que podemos afirmar sobre o comando hideSoftInput em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – É um comando para ocultar a senha\n\n II – É um comando para ocultar o teclado\n\n III – É um comando para ocultar o app\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 4,
    explicacaoResposta:'O comando hideSoftInput é usado para ocultar o teclado virtual (soft keyboard) após o usuário ter terminado de inserir texto em um campo de texto. Isso ajuda a melhorar a experiência do usuário, removendo o teclado quando não é mais necessário.',
  },
  {
    pergunta: "O que podemos afirmar sobre o comando para mudar de tela em um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – Intent intent = new Intent(this, OutraTela.class)\n\n II – startActivity(intente)\n\n III – startScreen(OutraTela)\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 1,
    explicacaoResposta:'Para mudar de tela em um projeto Android, geralmente usamos a intenção (Intent) para iniciar uma nova atividade (Activity) ou fragmento (Fragment). A intenção especifica a ação a ser realizada e pode conter dados adicionais, como informações sobre a tela de destino.',
  },
  {
    pergunta: "O que podemos afirmar sobre o comando para salvar dados localmente um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – SharedPreferences\n\n II – CoreData\n\n III – UserDefaults\n\n  É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
    explicacaoResposta:'Para salvar dados localmente em um projeto Android, podemos usar várias opções, como SharedPreferences para armazenar pequenas quantidades de dados chave-valor, arquivos de texto para armazenar dados estruturados em texto, bancos de dados SQLite para armazenamento de dados estruturados em um banco de dados relacional, ou outras soluções de armazenamento local, dependendo das necessidades do aplicativo.',
  },
  {
    pergunta: "O que podemos afirmar sobre o comando para listar dados um projeto Java Android? Sobre as alternativas abaixo qual(is) podemos afirmar que são verdadeiras?\n\n I – ListView\n\n II – TableView\n\n III – CollectionView\n\n É correto afirmar que estão corretas: ",
    respostas: ["a) II e III, apenas", "b) I e II, apenas", "c) I, II e III", "d) I somente", "e) II somente"],
    correta: 3,
    explicacaoResposta:'Para listar dados em um projeto Android, podemos usar componentes de interface do usuário como ListView, RecyclerView ou GridView para exibir uma lista de itens na tela. Além disso, precisaremos de uma fonte de dados para fornecer os dados a serem exibidos na lista, que pode ser um array, uma lista, um cursor de banco de dados ou qualquer outra estrutura de dados adequada.',
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
