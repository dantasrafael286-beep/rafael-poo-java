// 1. TODAS AS APOSTILAS / RESUMOS DE AULA DE JAVA POO (PROF. JACINTO - USCS)
// Já pré-carregadas para estudo imediato no celular e no PC!

window.APOSTILAS_JACINTO = [
  {
    id: "ap1",
    numero: "Apostila 01",
    titulo: "Introdução ao Java, JVM, Bytecode e Estrutura Básica",
    topicos: ["JVM e Bytecode", "Tipos Primitivos", "String", "System.out.println", "if/else e for"],
    resumoExecutivo: "Como o Java funciona por baixo dos panos (compilador javac -> Bytecode .class -> Máquina Virtual JVM) e os comandos básicos obrigatórios antes de criar classes.",
    conteudoCompleto: `1. COMO O JAVA RODA (CAI NA TEÓRICA!):
• Código-Fonte (.java): É o arquivo de texto que você escreve.
• Compilador (javac): Traduz o seu arquivo .java para um código intermediário chamado BYTECODE (.class).
• JVM (Java Virtual Machine): É a Máquina Virtual do Java que lê o Bytecode (.class) e executa em qualquer sistema (Windows, Mac, Linux, Android) — princípio WORA ("Write Once, Run Anywhere").

2. TIPOS DE DADOS EM JAVA:
• int -> números inteiros (ex: int idade = 20;)
• double -> números com casas decimais usando PONTO (ex: double preco = 19.90;)
• boolean -> verdadeiro ou falso (apenas true ou false)
• char -> uma única letra entre aspas simples (ex: char letra = 'A';)
• String -> texto entre aspas duplas. ATENÇÃO: String é uma CLASSE, por isso começa com S MAIÚSCULO! Para comparar duas Strings, NUNCA use '==', use sempre texto1.equals(texto2)!

3. ESTRUTURA MÍNIMA DE UM PROGRAMA:
Todo código Java precisa estar dentro de uma classe (public class Nome) e a execução começa sempre pelo método:
public static void main(String[] args) { ... }`
  },
  {
    id: "ap2",
    numero: "Apostila 02",
    titulo: "Classes, Objetos, Instanciação (new) e Diagramas UML",
    topicos: ["Classe vs Objeto", "Atributos", "Métodos", "Operador new", "Memória Stack vs Heap", "UML"],
    resumoExecutivo: "A base de toda a disciplina de POO: como modelar qualquer coisa do mundo real em Atributos (o que tem) e Métodos (o que faz), e como ler os diagramas de classe da prova.",
    conteudoCompleto: `1. OS 3 ELEMENTOS DE UMA CLASSE:
• Nome da Classe: Sempre começa com Letra Maiúscula (PascalCase -> ex: ContaCorrente, AlunoUscs).
• Atributos (Características / Estado): Variáveis declaradas direto dentro da classe (ex: String nome; double saldo;).
• Métodos (Comportamentos / Ações): Funções que o objeto sabe executar (ex: sacar(), depositar(), exibirDados()).

2. O OPERADOR 'new' E A MEMÓRIA:
• Só declarar 'Aluno a1;' NÃO cria objeto (a1 vale null).
• O objeto só nasce quando usamos 'new': Aluno a1 = new Aluno();
• Cuidado: Se fizermos 'Aluno a2 = a1;', NÃO criamos um segundo aluno! Tanto a1 quanto a2 apontam para o MESMO objeto na memória!

3. COMO LER O DIAGRAMA UML NA PROVA DO JACINTO:
O retângulo da classe na UML é dividido em 3 andares:
[1º Andar] Nome da Classe (ex: Produto)
[2º Andar] Atributos -> formato: visibilidade nome : Tipo (ex: - preco : double)
[3º Andar] Métodos -> formato: visibilidade nome(parametros) : TipoRetorno (ex: + calcularDesconto() : double)`
  },
  {
    id: "ap3",
    numero: "Apostila 03",
    titulo: "Construtores, Sobrecarga (Overload) e Referência 'this'",
    topicos: ["Construtor Padrão", "Construtor com Parâmetros", "Sobrecarga (Overload)", "Palavra-chave this"],
    resumoExecutivo: "Como inicializar objetos já com dados obrigatórios na hora do 'new' e as 3 pegadinhas clássicas de construtores que sempre caem na prova.",
    conteudoCompleto: `1. O QUE É UM CONSTRUTOR?
É uma rotina especial que roda AUTOMATICAMENTE no exato momento em que você faz 'new NomeDaClasse()'.
• Regra 1: Tem EXATAMENTE o mesmo nome da Classe (inclusive letra maiúscula).
• Regra 2: NÃO TEM TIPO DE RETORNO (não tem int, não tem String e NÃO TEM VOID!). Se colocar 'void', deixa de ser construtor e vira método comum!

2. A PEGADINHA DO CONSTRUTOR VAZIO:
• Se você não escrever nenhum construtor na classe, o Java cria um construtor vazio invisível: public Aluno() {}
• MAS, se você escrever um construtor com parâmetros (ex: public Aluno(String nome)), o construtor vazio automático DEIXA DE EXISTIR! Se quiser usar 'new Aluno()' e também 'new Aluno("Rafael")', você precisa escrever os DOIS construtores na classe!

3. PARA QUE SERVE O 'this'?
• 'this.nome = nome;' -> 'this.nome' é o atributo do objeto; 'nome' é o parâmetro que chegou no método/construtor.
• 'this(...)' na 1ª linha de um construtor chama outro construtor da mesma classe.`
  },
  {
    id: "ap4",
    numero: "Apostila 04",
    titulo: "Encapsulamento, Modificadores de Acesso e Getters/Setters",
    topicos: ["private (-)", "public (+)", "protected (#)", "Getters e Setters", "Proteção de Dados"],
    resumoExecutivo: "O 1º Pilar da Orientação a Objetos: proteger os atributos contra alterações indevidas trancando com 'private' e controlando o acesso com 'get' e 'set'.",
    conteudoCompleto: `1. POR QUE ENCAPSULAR?
Se um atributo 'saldo' for public, qualquer classe pode fazer 'c.saldo = -50000;'. No Encapsulamento, escondemos os atributos internos com 'private' e criamos métodos públicos (Getters e Setters) que funcionam como porteiros validando os dados!

2. TABELA DE VISIBILIDADE (DECORAR PARA A N3!):
• private (-)   -> Visível APENAS dentro da própria classe onde foi escrito.
• package (sem nada) -> Visível dentro da própria classe e no mesmo pacote.
• protected (#) -> Visível na própria classe, mesmo pacote e nas CLASSES FILHAS (Herança!).
• public (+)    -> Visível em todo o sistema.

3. RECEITA DE BOLO DO GET E SET:
Para um atributo 'private double salario;':
• GETTER (lê e devolve o valor):
  public double getSalario() { return this.salario; }
• SETTER (recebe novo valor e altera, sem retornar nada):
  public void setSalario(double salario) {
      if (salario >= 0) { this.salario = salario; }
  }`
  },
  {
    id: "ap5",
    numero: "Apostila 05",
    titulo: "Relacionamento entre Classes (Associação, Agregação, Composição) e ArrayList",
    topicos: ["Objeto dentro de Objeto", "Associação", "Composição vs Agregação", "ArrayList<Objeto>"],
    resumoExecutivo: "Como conectar classes diferentes ('Cliente tem um Endereco', 'Pedido tem uma lista de Produtos') usando atributos de referência e ArrayList.",
    conteudoCompleto: `1. OBJETO COMO ATRIBUTO DE OUTRA CLASSE ("TEM UM"):
Uma classe pode ter como atributo um objeto de outra classe!
Exemplo:
public class Cliente {
    private String nome;
    private Endereco endereco; // Objeto da classe Endereco!
}

2. AGREGAÇÃO vs COMPOSIÇÃO (TEÓRICA DE PROVA):
• Agregação (Losango vazado na UML): Relação mais fraca — o objeto "parte" existe mesmo sem o "todo" (ex: Turma e Aluno -> se a Turma acabar, o Aluno continua existindo).
• Composição (Losango preenchido/preto na UML): Relação forte de dependência vital — se o "todo" for destruído, a "parte" morre junto (ex: NotaFiscal e ItemNotaFiscal, ou Humano e Coracao).

3. LISTA DINÂMICA DE OBJETOS (ArrayList):
ArrayList<Produto> carrinho = new ArrayList<>();
• carrinho.add(p1);      // Adiciona na lista
• carrinho.size();       // Quantos itens tem na lista
• carrinho.get(0);       // Pega o item da posição 0
• carrinho.remove(0);    // Remove o item da posição 0`
  },
  {
    id: "ap6",
    numero: "Apostila 06",
    titulo: "Herança (extends), Superclasse, Subclasse e Uso do 'super'",
    topicos: ["extends", "Superclasse (Mãe)", "Subclasse (Filha)", "super() no Construtor", "super.metodo()"],
    resumoExecutivo: "O 2º Pilar da POO: como criar uma hierarquia de classes ('Gerente É UM Funcionario') reaproveitando atributos e métodos sem duplicar código.",
    conteudoCompleto: `1. COMO FUNCIONA A HERANÇA ('extends'):
• Superclasse (Classe Mãe / Base): Contém o que é comum a todos (ex: class Pessoa tem nome e cpf).
• Subclasse (Classe Filha / Derivada): Usa a palavra 'extends' para herdar da mãe e adiciona o que é específico (ex: public class Aluno extends Pessoa).

2. REGRAS CRÍTICAS DA HERANÇA EM JAVA:
• Java NÃO tem herança múltipla de classes: uma classe só pode dar 'extends' em UMA única classe!
• Atributos 'private' da mãe NÃO podem ser acessados direto pelo nome na filha (a filha precisa usar getNome()/setNome() da mãe, OU o atributo na mãe deve ser 'protected'!).
• Construtores NÃO são herdados automaticamente: a classe filha deve chamar o construtor da mãe usando 'super(...)' OBRIGATORIAMENTE na PRIMEIRA LINHA do construtor filho!

3. EXEMPLO PADRÃO DE PROVA:
public class Gerente extends Funcionario {
    private double bonus;
    public Gerente(String nome, double salario, double bonus) {
        super(nome, salario); // 1ª linha obrigatória!
        this.bonus = bonus;
    }
}`
  },
  {
    id: "ap7",
    numero: "Apostila 07",
    titulo: "Polimorfismo, Sobrescrita (@Override) vs Sobrecarga (Overload)",
    topicos: ["Polimorfismo Dinâmico", "@Override (Sobrescrita)", "Overload (Sobrecarga)", "toString()", "instanceof"],
    resumoExecutivo: "O 3º Pilar da POO e o tema número 1 de questões de código na N3: entender qual método roda quando usamos referências polimórficas.",
    conteudoCompleto: `1. O QUE É POLIMORFISMO?
Uma variável do tipo da classe Mãe pode apontar para qualquer objeto de uma classe Filha:
Funcionario f = new Gerente(); // Válido, pois todo Gerente É UM Funcionario!
Quando chamamos 'f.calcularSalario()', qual método roda: o de Funcionario ou o de Gerente?
Roda o de GERENTE! Porque em tempo de execução o Java olha para o objeto REAL criado com 'new' (lado direito)!

2. TABELA DEFINITIVA: SOBRESCRITA vs SOBRECARGA:
• SOBRESCRITA (@Override / Overriding):
  - Acontece entre Superclasse e Subclasse (exige Herança).
  - O método na filha tem EXATAMENTE o mesmo nome, mesmo retorno e MESMOS parâmetros da mãe.
• SOBRECARGA (Overload / Overloading):
  - Pode acontecer na mesma classe.
  - Métodos com o MESMO nome, mas PARÂMETROS DIFERENTES (quantidade ou tipos diferentes).`
  },
  {
    id: "ap8",
    numero: "Apostila 08",
    titulo: "Abstração Avançada: Classes Abstratas (abstract) e Interfaces (implements)",
    topicos: ["abstract class", "Métodos Abstratos", "interface", "implements", "Múltiplas Interfaces"],
    resumoExecutivo: "Quando proibir o 'new' com classes abstratas e como criar contratos obrigatórios com Interfaces em Java.",
    conteudoCompleto: `1. CLASSE ABSTRATA (public abstract class Conta):
• NÃO PODE sofrer 'new' diretamente ('new Conta()' dá erro de compilação!).
• Serve apenas como Superclasse para outras classes herdarem ('extends').
• Pode ter atributos normais, construtores, métodos prontos com corpo { } E métodos abstratos sem corpo:
  public abstract void atualizarSaldo(); // Termina com ';' sem chaves!
• Toda classe filha concreta é OBRIGADA a implementar (@Override) todos os métodos abstratos da mãe!

2. INTERFACE (public interface Tributavel):
• É um CONTRATO puro (não tem atributos de estado nem construtores).
• Uma classe assina o contrato usando a palavra 'implements':
  public class ContaCorrente extends Conta implements Tributavel, Autenticavel { ... }
• Lembre-se: Apenas 1 'extends', mas quantos 'implements' quiser!`
  },
  {
    id: "ap9",
    numero: "Apostila 09",
    titulo: "Tratamento de Exceções (try, catch, finally, throw, throws) e static/final",
    topicos: ["try / catch / finally", "throw vs throws", "Exception", "static", "final"],
    resumoExecutivo: "Fechamento do conteúdo da N3: como capturar erros em tempo de execução sem travar o programa e como funcionam membros estáticos e constantes.",
    conteudoCompleto: `1. TRATAMENTO DE EXCEÇÕES (try / catch / finally):
• try { ... }: Bloco onde colocamos o código que pode dar erro (ex: divisão, leitura de arquivo, conversão de número). Se uma linha der erro, o Java PULA imediatamente o resto do try!
• catch (Exception e) { ... }: Só roda SE acontecer um erro compatível dentro do try.
• finally { ... }: Roda SEMPRE no final (tanto se o try deu certo quanto se caiu no catch!).

2. DIFERENÇA ENTRE 'throw' E 'throws':
• throw (sem S): Usado DENTRO do método para disparar um erro manualmente:
  throw new IllegalArgumentException("Valor negativo!");
• throws (com S): Usado no CABEÇALHO do método para avisar quem chamou que aquele método pode disparar uma exceção verificada:
  public void lerArquivo() throws IOException { ... }

3. 'static' E 'final':
• static: Pertence à Classe inteira (compartilhado por todos os objetos) e pode ser chamado sem 'new' (ex: Math.sqrt(9)).
• final: Trava! Em variável vira constante imutável; em método proíbe @Override; em classe proíbe extends.`
  }
];

// ==========================================
// 2. OFICINA PRÁTICA: "PROGRAMAR DE VERDADE" (ESCREVER CÓDIGO PASSO A PASSO)
// ==========================================
window.DESAFIOS_PROGRAMAR = [
  {
    id: "prog1",
    nivel: "Nível 1 • Do Zero",
    titulo: "1. Criando sua primeira Classe e Atributos",
    objetivo: "Escreva em Java uma classe chamada 'Aluno' que tenha dois atributos: 'String nome;' e 'double nota;'.",
    receitaPassoAPasso: [
      "Passo 1: Abra a classe escrevendo: public class Aluno {",
      "Passo 2: Dentro dela, declare o texto: String nome;",
      "Passo 3: Na linha de baixo, declare o decimal: double nota;",
      "Passo 4: Feche a chave da classe: }"
    ],
    codigoInicial: `public class Aluno {\n    // Escreva os 2 atributos aqui embaixo:\n    \n}`,
    requisitos: [
      { termo: "class Aluno", dica: "Declare a classe com: public class Aluno" },
      { termo: "String nome", dica: "Faltou declarar o atributo 'String nome;' (com S maiúsculo!)" },
      { termo: "double nota", dica: "Faltou declarar o atributo 'double nota;'" },
      { termo: ";", dica: "Lembre-se de terminar as declarações com ponto e vírgula (;)" }
    ],
    solucaoComentada: `public class Aluno {
    String nome;  // Atributo de texto (S maiúsculo!)
    double nota;  // Atributo numérico decimal
}`
  },
  {
    id: "prog2",
    nivel: "Nível 2 • Objeto e new",
    titulo: "2. Instanciando um Objeto na Memória com 'new'",
    objetivo: "Dentro do método main, crie um objeto da classe 'Carro' chamado 'c1' usando o comando 'new', e depois defina 'c1.velocidade = 80;'.",
    receitaPassoAPasso: [
      "Passo 1: Para criar o objeto, escreva: Carro c1 = new Carro();",
      "Passo 2: Para acessar o atributo do objeto, use o ponto: c1.velocidade = 80;"
    ],
    codigoInicial: `public class Main {\n    public static void main(String[] args) {\n        // 1. Crie o objeto c1 com new:\n        \n        // 2. Coloque velocidade 80 em c1:\n        \n    }\n}`,
    requisitos: [
      { termo: "Carro c1", dica: "Declare a variável do tipo Carro chamada c1: Carro c1 = ..." },
      { termo: "new Carro()", dica: "Use o operador 'new Carro()' para construir o objeto na memória!" },
      { termo: "c1.velocidade", dica: "Use 'c1.velocidade = 80;' para guardar 80 no atributo!" },
      { termo: "80", dica: "Atribua o valor 80 à velocidade." }
    ],
    solucaoComentada: `public class Main {
    public static void main(String[] args) {
        Carro c1 = new Carro(); // Constrói o objeto no Heap
        c1.velocidade = 80;     // Altera o atributo do objeto c1
    }
}`
  },
  {
    id: "prog3",
    nivel: "Nível 3 • Métodos e return",
    titulo: "3. Programando um Método que Calcula e Retorna Valor",
    objetivo: "Complete o método 'calcularMedia' que recebe '(double n1, double n2)' e DEVOLVE (return) a média '(n1 + n2) / 2'.",
    receitaPassoAPasso: [
      "Passo 1: Como o método promete devolver 'double', use a palavra 'return'.",
      "Passo 2: Coloque a soma entre parênteses para somar antes de dividir: return (n1 + n2) / 2;"
    ],
    codigoInicial: `public class Boletim {\n    public double calcularMedia(double n1, double n2) {\n        // Escreva o return com o cálculo da média:\n        \n    }\n}`,
    requisitos: [
      { termo: "return", dica: "Todo método que não é void precisa da palavra 'return'!" },
      { termo: "n1", dica: "Use o parâmetro n1 na conta." },
      { termo: "n2", dica: "Use o parâmetro n2 na conta." },
      { termo: "/ 2", dica: "Divida a soma por 2: (n1 + n2) / 2;" }
    ],
    solucaoComentada: `public class Boletim {
    public double calcularMedia(double n1, double n2) {
        return (n1 + n2) / 2; // Calcula a soma e devolve a metade!
    }
}`
  },
  {
    id: "prog4",
    nivel: "Nível 4 • Construtor e this",
    titulo: "4. Escrevendo um Construtor com 'this'",
    objetivo: "Na classe 'Produto', crie o construtor público que recebe '(String nome)' e guarda no atributo da classe usando 'this.nome = nome;'.",
    receitaPassoAPasso: [
      "Passo 1: O construtor tem o MESMO nome da classe e NÃO tem void: public Produto(String nome) {",
      "Passo 2: Lá dentro, grave no atributo usando this: this.nome = nome;",
      "Passo 3: Feche a chave do construtor: }"
    ],
    codigoInicial: `public class Produto {\n    private String nome;\n\n    // Escreva o construtor da classe Produto aqui:\n    \n}`,
    requisitos: [
      { termo: "public Produto(", dica: "Escreva 'public Produto(String nome)' — lembre-se: SEM a palavra void!" },
      { termo: "String nome", dica: "O construtor deve receber '(String nome)' entre parênteses." },
      { termo: "this.nome", dica: "Use 'this.nome = nome;' para diferenciar o atributo do parâmetro!" }
    ],
    proibido: [
      { termo: "void Produto", dica: "OPA! Pegadinha! Construtor NUNCA tem a palavra 'void'! Tire o 'void' antes de Produto." }
    ],
    solucaoComentada: `public class Produto {
    private String nome;

    // Construtor: mesmo nome da classe e SEM void!
    public Produto(String nome) {
        this.nome = nome;
    }
}`
  },
  {
    id: "prog5",
    nivel: "Nível 5 • Encapsulamento (get e set)",
    titulo: "5. Criando o Getter e o Setter de um Atributo Privado",
    objetivo: "Para o atributo 'private double saldo;', escreva o método 'getSaldo()' (que retorna o saldo) e o método 'setSaldo(double saldo)' (que altera this.saldo).",
    receitaPassoAPasso: [
      "Passo 1 (Getter): public double getSaldo() { return this.saldo; }",
      "Passo 2 (Setter): public void setSaldo(double saldo) { this.saldo = saldo; }"
    ],
    codigoInicial: `public class Conta {\n    private double saldo;\n\n    // 1. Escreva o getSaldo():\n    \n\n    // 2. Escreva o setSaldo(double saldo):\n    \n}`,
    requisitos: [
      { termo: "getSaldo()", dica: "Crie o método 'public double getSaldo()'" },
      { termo: "return", dica: "O método getSaldo() precisa devolver o valor com 'return this.saldo;'" },
      { termo: "void setSaldo(", dica: "O método setter é void: 'public void setSaldo(double saldo)'" },
      { termo: "this.saldo =", dica: "Dentro do setSaldo, atribua 'this.saldo = saldo;'" }
    ],
    solucaoComentada: `public class Conta {
    private double saldo;

    public double getSaldo() {
        return this.saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}`
  },
  {
    id: "prog6",
    nivel: "Nível 6 • Herança (extends e super)",
    titulo: "6. Programando Herança com 'extends' e 'super'",
    objetivo: "Faça a classe 'Gerente' herdar de 'Funcionario' usando 'extends', e no construtor de Gerente chame 'super(nome);' na 1ª linha.",
    receitaPassoAPasso: [
      "Passo 1: No cabeçalho da classe, escreva: public class Gerente extends Funcionario {",
      "Passo 2: Dentro do construtor 'public Gerente(String nome)', coloque na 1ª linha: super(nome);"
    ],
    codigoInicial: `public class Gerente /* coloque a herança aqui */ {\n    public Gerente(String nome) {\n        // Chame o construtor da classe mãe aqui:\n        \n    }\n}`,
    requisitos: [
      { termo: "extends Funcionario", dica: "Use 'extends Funcionario' logo após 'public class Gerente'!" },
      { termo: "super(nome)", dica: "Dentro do construtor, chame 'super(nome);' para acionar o construtor da mãe!" }
    ],
    solucaoComentada: `public class Gerente extends Funcionario {
    public Gerente(String nome) {
        super(nome); // Chama o construtor da Superclasse Funcionario!
    }
}`
  },
  {
    id: "prog7",
    nivel: "Nível 7 • Polimorfismo (@Override)",
    titulo: "7. Sobrescrevendo um Método na Subclasse (@Override)",
    objetivo: "Na classe 'Cachorro extends Animal', sobrescreva com '@Override' o método 'public void emitirSom()' para imprimir '\"Au Au\"'.",
    receitaPassoAPasso: [
      "Passo 1: Coloque a anotação: @Override",
      "Passo 2: Repita a assinatura do método: public void emitirSom() {",
      "Passo 3: Imprima: System.out.println(\"Au Au\"); e feche }"
    ],
    codigoInicial: `public class Cachorro extends Animal {\n    // Sobrescreva o método emitirSom() aqui:\n    \n}`,
    requisitos: [
      { termo: "@Override", dica: "Coloque a anotação '@Override' antes do método sobrescrito!" },
      { termo: "void emitirSom()", dica: "Escreva a assinatura 'public void emitirSom()'" },
      { termo: "System.out.print", dica: "Use 'System.out.println(\"Au Au\");' dentro do método!" }
    ],
    solucaoComentada: `public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au Au");
    }
}`
  },
  {
    id: "prog8",
    nivel: "Nível 8 • Prova N3 (try / catch)",
    titulo: "8. Protegendo Código com Tratamento de Exceções (try / catch)",
    objetivo: "Envolva a divisão 'int r = 10 / 0;' dentro de um bloco 'try { ... }' e capture o erro com 'catch (Exception e) { System.out.println(\"Erro\"); }'.",
    receitaPassoAPasso: [
      "Passo 1: Abra o bloco de tentativa: try {",
      "Passo 2: Coloque a linha perigosa dentro dele: int r = 10 / 0; }",
      "Passo 3: Logo em seguida, capture a exceção: catch (Exception e) { System.out.println(\"Erro\"); }"
    ],
    codigoInicial: `public class ProvaN3 {\n    public static void main(String[] args) {\n        // Monte o bloco try / catch aqui:\n        int r = 10 / 0;\n    }\n}`,
    requisitos: [
      { termo: "try", dica: "Abra o bloco 'try {' antes da divisão!" },
      { termo: "catch", dica: "Adicione o bloco 'catch (Exception e) { ... }' após fechar o try!" },
      { termo: "Exception", dica: "Declare o parâmetro '(Exception e)' dentro dos parênteses do catch!" }
    ],
    solucaoComentada: `public class ProvaN3 {
    public static void main(String[] args) {
        try {
            int r = 10 / 0;
        } catch (Exception e) {
            System.out.println("Erro");
        }
    }
}`
  }
];
