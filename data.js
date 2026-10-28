window.MODULOS_POO = [
  {
    id: "m0",
    ordem: 0,
    tag: "MÓDULO 0 • DO ZERO ABSOLUTO",
    cor: "#e0a02c",
    titulo: "Java do Zero: Variáveis, main, if e System.out",
    resumoCurto: "Comece por aqui se você acha Java grego! Entenda cada palavra que aparece na tela antes de entrar em Orientação a Objetos.",
    analogia: "Antes de construir um prédio (POO), você precisa conhecer os tijolos básicos do Java. No Java, NADA fica solto no ar: todo código mora dentro de uma 'class', toda linha de comando termina com ponto-e-vírgula (;), blocos ficam entre chaves { }, e você sempre precisa dizer o TIPO da variável antes do nome dela (int, double, String, boolean)!",
    explicacao: [
      "1. Ponto e vírgula (;): É o ponto final de cada frase no Java. Esqueceu o ';', não compila!",
      "2. Tipos de variáveis (Tipagem Forte): 'int' guarda inteiro (10, -5); 'double' guarda número com vírgula/ponto (8.5, 19.90); 'boolean' guarda true ou false; 'String' (com S MAIÚSCULO!) guarda texto entre aspas duplas (\"Rafael\").",
      "3. System.out.println(...): É o comando que escreve alguma coisa na tela. Se você somar texto com número ('\"Nota: \" + 10'), o '+' junta tudo num texto só ('Nota: 10')!",
      "4. public static void main(String[] args): É o botão START do programa. Quando você manda rodar, o Java procura exatamente essa linha para começar!",
      "5. if / else e for: 'if (nota >= 6) { ... } else { ... }' toma decisões. 'for (int i = 0; i < 5; i++)' repete um bloco 5 vezes."
    ],
    codigo: `public class MeuPrimeiroPrograma {
    // O método main é a porta de entrada onde o Java começa a rodar:
    public static void main(String[] args) {
        // 1. Declarando variáveis (SEMPRE: Tipo nome = valor;)
        String nome = "Rafael";   // String com S maiúsculo e aspas duplas!
        int idade = 21;           // int = número inteiro
        double media = 8.5;       // double = número decimal (usa ponto, não vírgula!)
        boolean aprovado = true;  // boolean = true (verdadeiro) ou false (falso)

        // 2. Decisão com if / else:
        if (media >= 6.0 && aprovado == true) {
            System.out.println(nome + " passou com média " + media);
        } else {
            System.out.println("Precisa de N3!");
        }
    }
}`,
    pegadinhas: [
      "Em Java, 'String' começa com S MAIÚSCULO! Se escrever 'string nome = \"oi\";' com s minúsculo, dá erro!",
      "Comparar igualdade de números usa DOIS iguais (x == 10). Um igual só (x = 10) guarda o valor 10 dentro de x!",
      "Cuidado com soma dentro do println: System.out.println(\"Resultado: \" + 2 + 3) imprime 'Resultado: 23' (juntou texto!). Para somar primeiro, use parênteses: System.out.println(\"Resultado: \" + (2 + 3)) -> 'Resultado: 5'!"
    ],
    desafioPratico: {
      instrucao: "Monte na cabeça (ou clique para testar): Como declaramos uma variável decimal chamada 'salario' valendo 2500.50 e imprimimos na tela?",
      lacunaCodigo: `_______ salario = 2500.50;\nSystem.out._______(salario);`,
      opcoes: ["double / println", "int / print", "float / console", "String / out"],
      correta: 0,
      explicacaoPratica: "Números com casas decimais em Java usam 'double' por padrão, e para imprimir na tela usamos 'System.out.println(salario);'!"
    },
    videos: [
      { titulo: "Curso de Java para Iniciantes (Variáveis e Tipos)", url: "https://www.youtube.com/results?search_query=curso+em+video+java+iniciante+tipos+primitivos" }
    ]
  },
  {
    id: "m1",
    ordem: 1,
    tag: "MÓDULO 1 • BASE DE POO",
    cor: "#bf2b26",
    titulo: "Classe vs Objeto (e o comando new)",
    resumoCurto: "Entenda de uma vez por todas a diferença entre a planta do prédio (Classe) e o prédio construído na memória (Objeto).",
    analogia: "Imagine uma forma de bolo ou a planta de um carro. Na planta está escrito: 'todo Carro tem cor, modelo e velocidade, e sabe acelerar()'. Você consegue dirigir um pedaço de papel com a planta desenhada? NÃO! A planta é a CLASSE (class Carro). Quando a fábrica usa a palavra-chave 'new Carro()', ela constrói um carro de verdade na memória do computador: isso é o OBJETO (instância)!",
    explicacao: [
      "CLASSE (class): É o molde/projeto. Define quais ATRIBUTOS (dados/características) e quais MÉTODOS (ações/comportamentos) os objetos terão.",
      "OBJETO (instância): É a criatura viva criada na memória RAM (Heap) a partir da classe usando a palavra 'new'.",
      "A partir de 1 única Classe (ex: class Aluno), você pode criar 500 Objetos diferentes (aluno1, aluno2, aluno3...), cada um com seu próprio nome e RA!"
    ],
    codigo: `public class Carro {
    // 1. ATRIBUTOS (O que o carro TEM)
    String modelo;
    int velocidade;

    // 2. MÉTODO (O que o carro FAZ)
    void acelerar(int ganho) {
        velocidade = velocidade + ganho;
    }
}

// --- Na classe Principal (main): ---
public class Main {
    public static void main(String[] args) {
        // Criando 2 OBJETOS diferentes a partir da mesma CLASSE Carro:
        Carro c1 = new Carro(); // Nasceu o 1º objeto na memória!
        c1.modelo = "Civic";
        c1.velocidade = 0;
        c1.acelerar(50); // c1 agora está a 50 km/h

        Carro c2 = new Carro(); // Nasceu o 2º objeto independente!
        c2.modelo = "Fusca";
        c2.velocidade = 20;

        System.out.println(c1.velocidade); // Imprime: 50
        System.out.println(c2.velocidade); // Imprime: 20
    }
}`,
    pegadinhas: [
      "Declarar só 'Carro c1;' NÃO cria objeto! Só cria uma variável vazia (null). Sem o '= new Carro()', se você tentar fazer 'c1.modelo = ...', o Java explode com NullPointerException!",
      "Atributos de um objeto (c1) são independentes dos atributos de outro objeto (c2), a menos que tenham a palavra 'static'."
    ],
    desafioPratico: {
      instrucao: "Complete a linha para criar (instanciar) um objeto da classe 'Aluno' chamado 'a1' na memória:",
      lacunaCodigo: `Aluno a1 = _______ _______();`,
      opcoes: ["new / Aluno", "class / Aluno", "void / new", "this / Objeto"],
      correta: 0,
      explicacaoPratica: "Para instanciar um objeto em Java, sempre usamos: NomeDaClasse variavel = new NomeDaClasse();"
    },
    videos: [
      { titulo: "O que é um Objeto? (Curso em Vídeo Java POO #02)", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+aula+02+o+que+e+objeto" },
      { titulo: "Criando Classes e Objetos em Java na Prática", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+criando+classes+e+objetos" }
    ]
  },
  {
    id: "m2",
    ordem: 2,
    tag: "MÓDULO 2 • AÇÕES",
    cor: "#c77a12",
    titulo: "Métodos, Parâmetros, void vs return",
    resumoCurto: "Por que alguns métodos têm 'void' e outros têm 'double', 'int' ou 'String' antes do nome?",
    analogia: "Pense num método como um ajudante. Se você diz: 'Ajudante, imprima este boleto na tela', ele vai lá, imprime e não te devolve nada na mão — isso é VOID (vazio, sem retorno). Agora, se você diz: 'Ajudante, calcule a média das notas 7 e 9 e me devolva o número para eu usar numa conta', ele precisa te devolver um 'double' usando a palavra RETURN!",
    explicacao: [
      "void: O método executa uma ação (ex: alterar um atributo ou mostrar algo com System.out.println), mas NÃO devolve nenhum valor para quem chamou.",
      "Tipo de Retorno (int, double, String, boolean): O método é OBRIGADO a terminar com 'return valor;' do mesmo tipo prometido na assinatura.",
      "Parâmetros (entre parênteses): São os ingredientes que você entrega para o método trabalhar."
    ],
    codigo: `public class ContaBancaria {
    double saldo = 100.0;

    // Método VOID: faz a ação de somar no saldo, mas não devolve número nenhum
    public void depositar(double valor) {
        if (valor > 0) {
            saldo = saldo + valor;
        }
    }

    // Método COM RETORNO (double): calcula e DEVOLVE o resultado para quem chamou
    public double calcularRendimento(double taxa) {
        double lucro = saldo * taxa;
        return lucro; // Obrigatório porque prometeu 'double' na assinatura!
    }
}`,
    pegadinhas: [
      "Se o método tem 'int' ou 'double' na assinatura e você esquecer o 'return', o código NEM COMPILA.",
      "Se o método é 'void', você NÃO pode fazer 'double x = conta.depositar(50);' porque void não devolve valor!"
    ],
    desafioPratico: {
      instrucao: "O método abaixo precisa devolver a soma de dois números inteiros. Complete as duas lacunas:",
      lacunaCodigo: `public _______ somar(int a, int b) {\n    _______ a + b;\n}`,
      opcoes: ["int / return", "void / return", "int / void", "double / print"],
      correta: 0,
      explicacaoPratica: "Se devolve um inteiro, a assinatura leva 'int' e o corpo devolve o resultado com 'return a + b;'!"
    },
    videos: [
      { titulo: "Métodos com Retorno vs Void em Java explicados fácil", url: "https://www.youtube.com/results?search_query=java+poo+metodos+parametros+void+return+explicacao" }
    ]
  },
  {
    id: "m3",
    ordem: 3,
    tag: "MÓDULO 3 • NASCIMENTO",
    cor: "#2f5d70",
    titulo: "Construtores, Sobrecarga e o 'this'",
    resumoCurto: "O método especial que roda no exato instante do 'new' e para que serve o famoso 'this.nome = nome'.",
    analogia: "Quando um bebê nasce no hospital, já registram o nome e o CPF na hora, certo? O CONSTRUTOR é a maternidade do objeto: ele obriga você a já passar os dados iniciais na hora do 'new Aluno(\"Rafael\", 123)'. E o 'this'? Quando o parâmetro que chega no construtor tem o mesmo nome do atributo da classe ('nome'), o Java fica confuso: quem é quem? O 'this.nome' significa 'o atributo DESTE objeto aqui', enquanto 'nome' sozinho é o parâmetro que veio de fora!",
    explicacao: [
      "CONSTRUTOR: Tem EXATAMENTE o mesmo nome da Classe (com letra maiúscula) e NÃO tem tipo de retorno (nem void!).",
      "Se você colocar 'void' antes do nome do construtor, ele deixa de ser construtor e vira um método comum (pegadinha clássica de prova!).",
      "this: Aponta para o próprio objeto atual. 'this.saldo' = atributo da classe; 'saldo' = variável local/parâmetro.",
      "SOBRECARGA (Overload): Ter mais de um construtor (ou método) com o MESMO nome na mesma classe, mudando apenas a quantidade ou o tipo dos parâmetros!"
    ],
    codigo: `public class Produto {
    private String nome;
    private double preco;

    // 1º Construtor (vazio / padrão)
    public Produto() {
        this.nome = "Sem nome";
        this.preco = 0.0;
    }

    // 2º Construtor (Com SOBRECARGA: recebe nome e preço já no 'new')
    public Produto(String nome, double preco) {
        this.nome = nome;   // this.nome (atributo) recebe nome (parâmetro)
        this.preco = preco;
    }
}

// Usando no main:
Produto p1 = new Produto("Teclado", 150.0); // Chama o 2º construtor!
Produto p2 = new Produto();                 // Chama o 1º construtor!`,
    pegadinhas: [
      "PEGADINHA DO PROF. JACINTO: Se você criar um construtor com parâmetros 'public Produto(String n)' e tentar fazer 'new Produto()' vazio sem ter escrito o construtor vazio, dá ERRO DE COMPILAÇÃO! (O Java só cria o construtor vazio de graça se você não criar nenhum outro).",
      "Construtor NUNCA tem 'void', 'int' ou 'return valor'."
    ],
    desafioPratico: {
      instrucao: "Complete o construtor da classe 'Pessoa' para guardar o parâmetro 'nome' dentro do atributo 'nome' do objeto:",
      lacunaCodigo: `public class Pessoa {\n    private String nome;\n    public _______(String nome) {\n        _______.nome = nome;\n    }\n}`,
      opcoes: ["Pessoa / this", "void Pessoa / this", "Pessoa / super", "new Pessoa / this"],
      correta: 0,
      explicacaoPratica: "O construtor tem o mesmo nome da classe ('Pessoa', sem void!) e usa 'this.nome = nome;' para gravar no atributo!"
    },
    videos: [
      { titulo: "Métodos Especiais: Construtor, Getter e Setter (Curso em Vídeo #04)", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+aula+04+construtores+getters+setters" }
    ]
  },
  {
    id: "m4",
    ordem: 4,
    tag: "MÓDULO 4 • PILAR 1",
    cor: "#4c6b3c",
    titulo: "Encapsulamento (private, public, get e set)",
    resumoCurto: "Por que trancamos os atributos com 'private' e criamos métodos 'getNome()' e 'setNome()'?",
    analogia: "Se o saldo da sua conta bancária fosse 'public', qualquer código maluco poderia fazer 'conta.saldo = -999999;'. Com o ENCAPSULAMENTO, você tranca o atributo dentro de um cofre ('private double saldo;') para ninguém de fora mexer direto. Para ler ou alterar, a pessoa é obrigada a passar pelo porteiro: o método GET (para consultar) e o método SET (para alterar validando se o valor é válido!).",
    explicacao: [
      "private (- na UML): Só a própria classe enxerga. Ninguém de fora acessa direto com ponto (objeto.atributo dá erro!).",
      "public (+ na UML): Qualquer classe do projeto enxerga e pode chamar.",
      "protected (# na UML): A própria classe, classes do mesmo pacote e classes FILHAS (herança) enxergam!",
      "Getter (getAtributo): Método público que DEVOLVE o valor do atributo privado (tem return).",
      "Setter (setAtributo): Método público (geralmente void) que RECEBE um novo valor e grava no atributo privado (podendo validar com if antes!)."
    ],
    codigo: `public class Aluno {
    private String nome;
    private double nota; // Trancado no cofre!

    // GETTER: permite ler a nota
    public double getNota() {
        return this.nota;
    }

    // SETTER: permite alterar a nota, mas PROTEGE contra nota inválida!
    public void setNota(double novaNota) {
        if (novaNota >= 0 && novaNota <= 10) {
            this.nota = novaNota;
        } else {
            System.out.println("Erro: Nota deve ser entre 0 e 10!");
        }
    }
}`,
    pegadinhas: [
      "Na prova, se o atributo é 'private int idade;', fazer 'p.idade = 20;' fora da classe dá ERRO DE COMPILAÇÃO. Tem que usar 'p.setIdade(20);'.",
      "No diagrama UML do professor: sinal de MENOS (-) significa 'private'; sinal de MAIS (+) significa 'public'; cerquilha (#) significa 'protected'!"
    ],
    desafioPratico: {
      instrucao: "Complete o atributo encapsulado e seu método Getter para retornar a idade:",
      lacunaCodigo: `_______ int idade;\npublic int getIdade() {\n    _______ this.idade;\n}`,
      opcoes: ["private / return", "public / void", "private / set", "protected / print"],
      correta: 0,
      explicacaoPratica: "No encapsulamento, o atributo fica 'private' e o método 'getIdade()' usa 'return this.idade;'!"
    },
    videos: [
      { titulo: "Encapsulamento na Prática em Java (Curso em Vídeo #06)", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+aula+06+encapsulamento" }
    ]
  },
  {
    id: "m5",
    ordem: 5,
    tag: "MÓDULO 5 • PILAR 2",
    cor: "#7a3e8c",
    titulo: "Herança (extends e super)",
    resumoCurto: "Como uma classe Filha herda tudo da classe Mãe sem copiar código, e como funciona o 'super()'.",
    analogia: "Imagine que você tem as classes Aluno, Professor e Funcionario. Todos têm 'nome', 'cpf' e 'dataNascimento'. Em vez de repetir esses 3 atributos nas 3 classes, você cria uma classe Mãe chamada 'Pessoa' (Superclasse). Depois, diz que 'class Aluno extends Pessoa'. Pronto! Aluno automaticamente ganha nome e cpf de Pessoa, e você só adiciona nele o que é exclusivo de Aluno (como 'ra' e 'curso')!",
    explicacao: [
      "extends: Palavra que cria a herança. Ex: 'public class Gerente extends Funcionario' (Gerente É UM Funcionario).",
      "Superclasse (Mãe/Pai): A classe mais genérica que cede os atributos e métodos.",
      "Subclasse (Filha): A classe especializada que herda tudo que é public/protected da mãe.",
      "super(...): Usado na 1ª linha do construtor da classe Filha para chamar o construtor da classe Mãe!",
      "No Java, NÃO existe herança múltipla de classes: uma classe só pode dar 'extends' em UMA única classe mãe!"
    ],
    codigo: `// SUPERCLASSE (Mãe)
public class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }
}

// SUBCLASSE (Filha) -> Herda de Funcionario com 'extends'
public class Gerente extends Funcionario {
    private String senhaCofre;

    public Gerente(String nome, double salario, String senhaCofre) {
        super(nome, salario); // 1ª LINHA OBRIGATÓRIA: chama o construtor da Mãe!
        this.senhaCofre = senhaCofre;
    }
}`,
    pegadinhas: [
      "O 'super(...)' no construtor da filha TEM QUE SER A PRIMEIRA LINHA do construtor. Se colocar na segunda linha, não compila!",
      "Atributos 'private' da classe Mãe NÃO podem ser acessados direto pelo nome na classe Filha — a Filha precisa usar os getters/setters da Mãe ou o atributo na Mãe precisa ser 'protected'!"
    ],
    desafioPratico: {
      instrucao: "Faça a classe 'Cachorro' herdar de 'Animal' e chamar o construtor da mãe passando 'nome':",
      lacunaCodigo: `public class Cachorro _______ Animal {\n    public Cachorro(String nome) {\n        _______(nome);\n    }\n}`,
      opcoes: ["extends / super", "implements / this", "extends / this", "super / extends"],
      correta: 0,
      explicacaoPratica: "'extends' estabelece a herança entre classes, e 'super(nome)' na 1ª linha chama o construtor da superclasse Animal!"
    },
    videos: [
      { titulo: "Herança em Java (extends e super) — Curso em Vídeo #10 e #11", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+heranca+extends+super" }
    ]
  },
  {
    id: "m6",
    ordem: 6,
    tag: "MÓDULO 6 • PILAR 3",
    cor: "#bf2b26",
    titulo: "Polimorfismo e Sobrescrita (@Override)",
    resumoCurto: "A diferença entre Sobrescrita (@Override) e Sobrecarga (Overload), e como o Polimorfismo cai na N3.",
    analogia: "Polimorfismo significa 'muitas formas'. Se você tem uma classe Mãe 'Animal' com o método 'emitirSom()', o Filho 'Cachorro' sobrescreve (@Override) esse método para imprimir 'Au Au', enquanto o Filho 'Gato' sobrescreve (@Override) para imprimir 'Miau'. Se você tiver uma variável 'Animal a = new Cachorro();' e chamar 'a.emitirSom()', o Java é esperto: ele executa o método do objeto REAL criado no 'new' (Cachorro -> 'Au Au')!",
    explicacao: [
      "SOBRESCRITA (@Override): A classe Filha reescreve um método herdado da Mãe mantendo EXATAMENTE o mesmo nome e os mesmos parâmetros, mudando o comportamento.",
      "SOBRECARGA (Overload): Métodos com o mesmo nome, mas PARÂMETROS DIFERENTES (não precisa de herança, pode ser na mesma classe!).",
      "Referência Polimórfica: 'Funcionario f = new Gerente();' é válido porque todo Gerente É UM Funcionário! E quando chamar um método sobrescrito, vale a versão de Gerente!"
    ],
    codigo: `public class Animal {
    public void fazerSom() {
        System.out.println("Som genérico");
    }
}

public class Cachorro extends Animal {
    @Override // Sobrescrevendo o método da mãe!
    public void fazerSom() {
        System.out.println("Au Au!");
    }
}

public class Gato extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Miau!");
    }
}

// Na prova N3:
Animal bicho1 = new Cachorro();
Animal bicho2 = new Gato();
bicho1.fazerSom(); // Imprime: Au Au!
bicho2.fazerSom(); // Imprime: Miau!`,
    pegadinhas: [
      "Nunca confunda nas questões teóricas: Mesma assinatura na classe filha = SOBRESCRITA (Override). Parâmetros diferentes = SOBRECARGA (Overload).",
      "Em 'Animal a = new Cachorro();', o que define qual método sobrescrito roda é o lado DIREITO (o 'new Cachorro()')."
    ],
    desafioPratico: {
      instrucao: "Qual anotação colocamos acima de um método na classe filha para indicar que estamos sobrescrevendo o método da classe mãe?",
      lacunaCodigo: `public class Gato extends Animal {\n    _______\n    public void fazerSom() {\n        System.out.println("Miau!");\n    }\n}`,
      opcoes: ["@Override", "@Overload", "@Extends", "@Super"],
      correta: 0,
      explicacaoPratica: "'@Override' avisa ao compilador que esse método está sobrescrevendo exatamente um método da superclasse!"
    },
    videos: [
      { titulo: "Polimorfismo em Java (Sobreposição vs Sobrecarga) — Curso em Vídeo #12 e #13", url: "https://www.youtube.com/results?search_query=curso+em+video+java+poo+polimorfismo+aula+12" }
    ]
  },
  {
    id: "m7",
    ordem: 7,
    tag: "MÓDULO 7 • TEMAS DE N3",
    cor: "#2f5d70",
    titulo: "Abstract, Interface, ArrayList e Exceções (try/catch)",
    resumoCurto: "Os 4 tópicos finais que fecham a N3 da USCS: classes abstratas, interfaces, listas e tratamento de erros.",
    analogia: "1) CLASSE ABSTRATA (abstract class Conta): é um rascunho incompleto — proibido dar 'new Conta()', só pode dar 'new' nas filhas! 2) INTERFACE (interface Tributavel): é um contrato com métodos sem corpo — quem assina ('implements') é obrigado a programar os métodos! 3) ArrayList: uma lista que cresce sozinha. 4) try/catch: uma rede de proteção para o programa não fechar na cara do usuário quando dá erro (ex: divisão por zero)!",
    explicacao: [
      "abstract class: NÃO pode ser instanciada com 'new'. Pode ter métodos abstratos ('public abstract void pagar();' — sem chaves, termina com ponto e vírgula!).",
      "interface: Contrato! Usa a palavra 'implements' (e uma classe pode implementar VÁRIAS interfaces ao mesmo tempo: 'implements A, B').",
      "ArrayList<String> lista = new ArrayList<>(); -> Principais métodos: lista.add(\"item\"), lista.get(0), lista.size(), lista.remove(0).",
      "try / catch / finally: O bloco 'try' tenta rodar o código perigoso; se der erro (exceção), pula para o 'catch (Exception e)'; o 'finally' roda SEMPRE (dando erro ou não)!"
    ],
    codigo: `import java.util.ArrayList;

// INTERFACE (Contrato)
public interface Autenticavel {
    boolean autenticar(String senha); // Método sem corpo!
}

// CLASSE ABSTRATA (Proibido dar 'new Pessoa()')
public abstract class Pessoa {
    protected String nome;
    public abstract void exibirPerfil();
}

// CLASSE CONCRETA + TRY/CATCH:
public class Sistema {
    public static void main(String[] args) {
        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("Rafael");

        try {
            int resultado = 10 / 0; // Vai dar ArithmeticException!
            System.out.println(resultado);
        } catch (ArithmeticException e) {
            System.out.println("Erro capturado: divisão por zero!");
        } finally {
            System.out.println("Fim da operação (sempre executa!).");
        }
    }
}`,
    pegadinhas: [
      "Tentar fazer 'new Pessoa()' quando Pessoa é 'abstract class' ou tentar dar 'new' numa 'interface' gera ERRO DE COMPILAÇÃO imediato!",
      "Na questão de 'try / catch / finally': o bloco 'finally' SEMPRE é executado, mesmo que tenha dado exceção no try!",
      "Uma classe só pode ter 1 'extends', mas pode ter vários 'implements'!"
    ],
    desafioPratico: {
      instrucao: "Complete a estrutura de tratamento de exceções em Java para capturar um erro e garantir a execução final:",
      lacunaCodigo: `_______ {\n    int x = 10 / 0;\n} _______ (Exception e) {\n    System.out.println("Erro!");\n} _______ {\n    System.out.println("Sempre roda!");\n}`,
      opcoes: ["try / catch / finally", "try / error / end", "do / catch / always", "if / except / finally"],
      correta: 0,
      explicacaoPratica: "Em Java os 3 blocos de tratamento de exceção são sempre: try (tenta), catch (captura o erro) e finally (executa sempre no final)!"
    },
    videos: [
      { titulo: "Classes Abstratas, Interfaces e Tratamento de Exceções (try/catch)", url: "https://www.youtube.com/results?search_query=java+poo+classes+abstratas+interfaces+try+catch" }
    ]
  }
];

window.FLASHCARDS_JAVA = [
  { id: "f0", mod: "m0", p: "Por que 'string nome = \"Rafael\";' dá erro de compilação em Java?", r: "Porque 'String' em Java é uma Classe e OBRIGATORIAMENTE começa com S maiúsculo: String nome = \"Rafael\";" },
  { id: "f1", mod: "m1", p: "Qual palavra-chave do Java aloca memória e constrói um Objeto de verdade a partir de uma Classe?", r: "A palavra-chave 'new'! Ex: Aluno a1 = new Aluno();" },
  { id: "f2", mod: "m1", p: "O que acontece se você declarar 'Aluno a1;' (sem '= new Aluno()') e tentar fazer 'a1.nome = \"Rafael\"'?", r: "Dá erro em tempo de execução: NullPointerException (porque a1 aponta para null / nada)." },
  { id: "f3", mod: "m2", p: "Qual a diferença entre um método 'void' e um método 'double'?", r: "'void' apenas executa uma ação e não devolve valor. 'double' é obrigado a terminar com 'return valorNumerico;'." },
  { id: "f4", mod: "m3", p: "Quais são as 2 regras visuais para reconhecer um Construtor em Java?", r: "1) Tem EXATAMENTE o mesmo nome da Classe.\n2) NÃO tem tipo de retorno (nem mesmo 'void'!)." },
  { id: "f5", mod: "m3", p: "Para que serve a palavra 'this' dentro de 'this.nome = nome;'?", r: "Diferencia o ATRIBUTO do objeto ('this.nome') do PARÂMETRO local que chegou no método/construtor ('nome')." },
  { id: "f6", mod: "m4", p: "No diagrama de classes UML do Prof. Jacinto, o que significam os símbolos (-), (+) e (#)?", r: "(-) = private (só a própria classe)\n(+) = public (todo mundo)\n(#) = protected (pacote + classes filhas)" },
  { id: "f7", mod: "m5", p: "Qual a diferença entre 'extends' e 'implements'?", r: "'extends' herda de uma Classe (no máximo 1). 'implements' assina o contrato de uma ou mais Interfaces." },
  { id: "f8", mod: "m5", p: "Para que serve o comando 'super(...)' dentro de um construtor da classe filha?", r: "Chama o construtor da classe Mãe (Superclasse). Deve ser obrigatoriamente a 1ª linha do construtor filho!" },
  { id: "f9", mod: "m6", p: "Qual a diferença entre Sobrescrita (@Override) e Sobrecarga (Overload)?", r: "Sobrescrita (@Override): reescreve na classe filha um método da mãe com a MESMA assinatura.\nSobrecarga (Overload): métodos de mesmo nome mas PARÂMETROS DIFERENTES." },
  { id: "f10", mod: "m7", p: "Pode dar 'new' em uma 'abstract class' ou em uma 'interface'?", r: "NUNCA! Dá erro de compilação. Você só pode dar 'new' nas classes concretas filhas." },
  { id: "f11", mod: "m7", p: "No bloco 'try / catch / finally', quando o bloco 'finally' é executado?", r: "SEMPRE! Tanto quando o 'try' funciona sem erros quanto quando ocorre uma exceção e entra no 'catch'." }
];

window.QUESTOES_JAVA = [
  {
    id: "q0_1",
    mod: "m0",
    titulo: "Concatenação vs Soma no System.out.println",
    enunciado: "O que será impresso na tela ao executar a linha abaixo em Java?",
    codigo: `public class TesteZero {
    public static void main(String[] args) {
        System.out.println("Nota: " + 5 + 3);
        System.out.println("Soma: " + (5 + 3));
    }
}`,
    alts: [
      "Nota: 8 e Soma: 8",
      "Nota: 53 e Soma: 8",
      "Nota: 53 e Soma: 53",
      "Erro de compilação"
    ],
    correta: 1,
    explicacao: "Quando o Java vê um texto (\"Nota: \") seguido de '+', ele transforma o restante em texto (concatenação): \"Nota: \" + 5 vira \"Nota: 5\", e + 3 vira \"Nota: 53\"! Já na segunda linha, os parênteses (5 + 3) forçam a soma matemática primeiro (8), imprimindo 'Soma: 8'!",
    porAlt: [
      "Errada: na primeira linha não há parênteses em (5 + 3), então o '+' junta os caracteres formando 53.",
      "Certa! Sem parênteses após String concatena (53); com parênteses soma primeiro (8).",
      "Errada: na segunda linha os parênteses calculam 5 + 3 = 8.",
      "Errada: o operador '+' entre String e int é totalmente válido em Java."
    ]
  },
  {
    id: "q1",
    mod: "m1",
    titulo: "Instanciação e Memória",
    enunciado: "Analise o código Java abaixo. O que será impresso no console ao executar o método main?",
    codigo: `public class Conta {
    int saldo = 100;
}

public class Teste {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = new Conta();
        c1.saldo = 250;
        c2.saldo = c1.saldo + 50;
        System.out.println(c1.saldo + " e " + c2.saldo);
    }
}`,
    alts: [
      "100 e 150",
      "250 e 300",
      "300 e 300",
      "Erro de compilação"
    ],
    correta: 1,
    explicacao: "Cada 'new Conta()' cria um objeto independente na memória. 'c1.saldo' virou 250. Depois, 'c2.saldo' recebeu 250 + 50 = 300. Portanto, imprime '250 e 300'.",
    porAlt: [
      "Errada: c1.saldo foi alterado de 100 para 250 na terceira linha do main.",
      "Certa! c1 guarda 250 e c2 guarda 250 + 50 = 300.",
      "Errada: c1 e c2 são objetos distintos; somar 50 ao atribuir em c2 não altera c1.",
      "Errada: a sintaxe está 100% válida e os atributos têm acesso padrão no mesmo pacote."
    ]
  },
  {
    id: "q2",
    mod: "m1",
    titulo: "Armadilha do NullPointerException",
    enunciado: "Um aluno escreveu o código abaixo na prova do Prof. Jacinto e o programa travou ao rodar. Por quê?",
    codigo: `public class Aluno {
    String nome;
}

public class Main {
    public static void main(String[] args) {
        Aluno a = null;
        a.nome = "Rafael";
        System.out.println(a.nome);
    }
}`,
    alts: [
      "Porque o atributo 'nome' deveria ser int.",
      "Porque faltou instanciar o objeto com 'new Aluno()' antes de acessar 'a.nome'.",
      "Porque em Java não é permitido usar 'System.out.println' com Strings.",
      "Porque a classe Aluno não tem método main."
    ],
    correta: 1,
    explicacao: "Quando fazemos 'Aluno a = null;', a variável 'a' não aponta para nenhum objeto na memória. Tentar acessar 'a.nome' dispara NullPointerException! Era preciso fazer 'Aluno a = new Aluno();'.",
    porAlt: [
      "Errada: 'Rafael' é texto, logo String é o tipo correto.",
      "Certa! Sem 'new Aluno()', a variável 'a' é nula e causa NullPointerException.",
      "Errada: System.out.println imprime Strings normalmente.",
      "Errada: apenas a classe principal precisa ter o método main."
    ]
  },
  {
    id: "q3",
    mod: "m2",
    titulo: "Métodos void vs return",
    enunciado: "Qual linha abaixo contém um ERRO DE COMPILAÇÃO?",
    codigo: `public class Calculadora {
    // Método 1
    public void mostrarDobro(int x) {
        System.out.println(x * 2);
    }

    // Método 2
    public int somar(int a, int b) {
        int res = a + b;
        // (Fim do método somar)
    }
}`,
    alts: [
      "O método 'mostrarDobro' está errado porque todo método void precisa da palavra 'return 0;'.",
      "O método 'somar' não compila porque prometeu retornar 'int' na assinatura, mas esqueceu o comando 'return res;'.",
      "Não é permitido passar dois parâmetros '(int a, int b)' no mesmo método.",
      "O código compila perfeitamente sem nenhum erro."
    ],
    correta: 1,
    explicacao: "Quando a assinatura do método declara um tipo de retorno (neste caso, 'public int somar'), o Java exige que o método devolva um valor inteiro usando 'return res;'.",
    porAlt: [
      "Errada: métodos 'void' justamente NÃO devolvem valor.",
      "Certa! Prometeu 'int' na assinatura, então é obrigatório ter 'return res;'.",
      "Errada: um método pode receber quantos parâmetros forem necessários.",
      "Errada: o compilador Java bloqueia métodos não-void sem return."
    ]
  },
  {
    id: "q4",
    mod: "m3",
    titulo: "Identificando o Construtor",
    enunciado: "Observe a classe abaixo. O que acontece quando executamos 'Produto p = new Produto(\"Mouse\");'?",
    codigo: `public class Produto {
    String nome = "Padrao";

    // Atenção ao 'void' aqui:
    public void Produto(String n) {
        nome = n;
    }
}`,
    alts: [
      "Cria o produto com nome 'Mouse' normalmente.",
      "Dá erro de compilação porque 'public void Produto(String n)' tem 'void', logo virou um método comum e não existe construtor que receba String!",
      "Imprime 'Padrao' no console.",
      "Deleta o atributo nome."
    ],
    correta: 1,
    explicacao: "PEGADINHA CLÁSSICA DE PROVA! Construtor NUNCA tem 'void'. Ao escrever 'public void Produto(String n)', o programador criou um método comum chamado Produto, e não um construtor! Por isso 'new Produto(\"Mouse\")' não encontra construtor com String e dá erro de compilação.",
    porAlt: [
      "Errada: por causa do 'void', esse bloco não é chamado pelo comando 'new'.",
      "Certa! Construtor não tem tipo de retorno (nem void). Para corrigir, basta tirar a palavra 'void'.",
      "Errada: o código nem chega a compilar.",
      "Errada: não existe deleção de atributo."
    ]
  },
  {
    id: "q5",
    mod: "m3",
    titulo: "Por que usar o 'this'?",
    enunciado: "Olhe o construtor abaixo SEM a palavra 'this'. Qual será o valor impresso no final?",
    codigo: `public class Pessoa {
    String nome = "Vazio";

    public Pessoa(String nome) {
        nome = nome; // Esqueceu o 'this.'!
    }

    public static void main(String[] args) {
        Pessoa p = new Pessoa("Rafael");
        System.out.println(p.nome);
    }
}`,
    alts: [
      "Rafael",
      "Vazio",
      "null",
      "Erro de compilação"
    ],
    correta: 1,
    explicacao: "Sem o 'this.nome = nome;', o comando 'nome = nome;' apenas joga o parâmetro 'nome' dentro dele mesmo! O atributo da classe ('this.nome') continua intacto valendo 'Vazio'!",
    porAlt: [
      "Errada: para gravar 'Rafael' no atributo da classe, precisava ser 'this.nome = nome;'.",
      "Certa! Como o parâmetro 'nome' escondeu (shadowing) o atributo da classe, 'p.nome' continuou com o valor original 'Vazio'!",
      "Errada: o atributo foi inicializado com 'Vazio'.",
      "Errada: 'nome = nome;' compila (apesar de ser um bug lógico clássico)."
    ]
  },
  {
    id: "q6",
    mod: "m3",
    titulo: "Sobrecarga de Construtores (Overload)",
    enunciado: "Por que a linha 'Livro l1 = new Livro();' abaixo dá ERRO DE COMPILAÇÃO?",
    codigo: `public class Livro {
    String titulo;

    public Livro(String titulo) {
        this.titulo = titulo;
    }

    public static void main(String[] args) {
        Livro l1 = new Livro(); // <--- ERRO AQUI!
    }
}`,
    alts: [
      "Porque em Java nenhuma classe pode ter construtor vazio.",
      "Porque quando você cria um construtor com parâmetros ('Livro(String titulo)'), o Java deixa de criar o construtor vazio padrão automaticamente.",
      "Porque faltou a palavra 'extends' na classe Livro.",
      "Porque 'String titulo' não é privado."
    ],
    correta: 1,
    explicacao: "O Java só fornece o construtor vazio 'public Livro() {}' gratuitamente se você NÃO escrever nenhum construtor na classe. A partir do momento em que você criou 'public Livro(String titulo)', se ainda quiser usar 'new Livro()' sem parâmetros, você precisa escrever também o construtor vazio!",
    porAlt: [
      "Errada: toda classe pode ter construtor vazio se você declará-lo.",
      "Certa! Essa é uma das questões mais cobradas em provas de POO.",
      "Errada: 'extends' é para herança, não é obrigatório.",
      "Errada: a visibilidade do atributo não afeta a chamada do construtor."
    ]
  },
  {
    id: "q7",
    mod: "m4",
    titulo: "Encapsulamento e Acesso Privado",
    enunciado: "Considere as duas classes abaixo. O que acontece ao compilar a classe Principal?",
    codigo: `public class Cofre {
    private int senha = 1234;

    public int getSenha() {
        return this.senha;
    }
}

public class Principal {
    public static void main(String[] args) {
        Cofre c = new Cofre();
        System.out.println(c.senha);
    }
}`,
    alts: [
      "Imprime 1234 normalmente.",
      "Erro de compilação na linha 'c.senha', pois 'senha' é private e só pode ser lida fora da classe Cofre usando 'c.getSenha()'.",
      "Imprime 0.",
      "Altera a senha para null."
    ],
    correta: 1,
    explicacao: "O modificador 'private' impede que qualquer outra classe acesse o atributo diretamente com ponto ('c.senha'). Na classe Principal, o único jeito permitido é chamar o método público 'c.getSenha()'.",
    porAlt: [
      "Errada: atributos private são invisíveis fora da própria classe.",
      "Certa! Para compilar, deve-se trocar 'c.senha' por 'c.getSenha()'.",
      "Errada: o código nem compila.",
      "Errada: int é tipo primitivo e não aceita null, além de não compilar."
    ]
  },
  {
    id: "q8",
    mod: "m4",
    titulo: "Diagrama UML do Prof. Jacinto",
    enunciado: "Em um diagrama de classes UML passado na lousa/PDF: '- saldo : double' e '+ depositar(valor : double) : void'. O que significam os símbolos '-' e '+'?",
    codigo: `-------------------------
|      ContaCorrente    |
-------------------------
| - saldo : double      |
-------------------------
| + depositar(v:double) |
-------------------------`,
    alts: [
      "'-' significa que o saldo é negativo e '+' significa que o depósito soma.",
      "'-' significa private (privado) e '+' significa public (público).",
      "'-' significa método e '+' significa atributo.",
      "'-' significa static e '+' significa abstract."
    ],
    correta: 1,
    explicacao: "Na notação padrão UML usada em POO: '-' é private, '+' é public e '#' é protected! Na parte de cima ficam os atributos e na parte de baixo ficam os métodos.",
    porAlt: [
      "Errada: os sinais indicam visibilidade (encapsulamento), não operações matemáticas.",
      "Certa! '-' = private, '+' = public, '#' = protected.",
      "Errada: atributos ficam no compartimento do meio e métodos no de baixo (com parênteses).",
      "Errada: static em UML é sublinhado e abstract é em itálico."
    ]
  },
  {
    id: "q9",
    mod: "m5",
    titulo: "Herança e Construtor com super()",
    enunciado: "Analise a herança abaixo. O que será impresso ao rodar o main?",
    codigo: `public class Veiculo {
    protected String marca;
    public Veiculo(String marca) {
        this.marca = marca;
    }
}

public class Moto extends Veiculo {
    private int cilindradas;
    public Moto(String marca, int cilindradas) {
        super(marca);
        this.cilindradas = cilindradas;
    }
    public void exibir() {
        System.out.println(this.marca + " " + this.cilindradas + "cc");
    }
    public static void main(String[] args) {
        Moto m = new Moto("Honda", 300);
        m.exibir();
    }
}`,
    alts: [
      "null 300cc",
      "Honda 300cc",
      "Erro de compilação porque Moto não tem o atributo 'marca'.",
      "Honda 0cc"
    ],
    correta: 1,
    explicacao: "Como 'Moto extends Veiculo', ela herda o atributo 'protected String marca'. O comando 'super(marca)' passa 'Honda' para o construtor da mãe (Veiculo), que guarda na variável herdada! Depois imprime 'Honda 300cc'.",
    porAlt: [
      "Errada: 'super(marca)' inicializou 'this.marca' com 'Honda'.",
      "Certa! A herança funcionou perfeitamente com 'extends' e 'super(marca)'.",
      "Errada: Moto herdou 'marca' da superclasse Veiculo (e como é protected, Moto pode acessar diretamente).",
      "Errada: cilindradas recebeu 300."
    ]
  },
  {
    id: "q10",
    mod: "m6",
    titulo: "Polimorfismo e Sobrescrita (@Override)",
    enunciado: "Qual será o resultado impresso no console por este código polimórfico?",
    codigo: `class Funcionario {
    public double calcularBonus() {
        return 100.0;
    }
}

class Diretor extends Funcionario {
    @Override
    public double calcularBonus() {
        return 500.0;
    }
}

public class Empresa {
    public static void main(String[] args) {
        Funcionario f1 = new Funcionario();
        Funcionario f2 = new Diretor(); // Polimorfismo!
        System.out.println(f1.calcularBonus() + f2.calcularBonus());
    }
}`,
    alts: [
      "200.0",
      "600.0",
      "1000.0",
      "Erro de compilação em 'Funcionario f2 = new Diretor();'"
    ],
    correta: 1,
    explicacao: "'f1' é um Funcionario comum (bônus = 100.0). Já 'f2', embora declarado como tipo Funcionario, aponta para um objeto real 'new Diretor()' na memória! Pelo polimorfismo dinâmico do Java, 'f2.calcularBonus()' executa o método sobrescrito (@Override) de Diretor (500.0). Soma: 100.0 + 500.0 = 600.0!",
    porAlt: [
      "Errada: f2 executa a versão sobrescrita de Diretor (500.0), não a de Funcionario.",
      "Certa! 100.0 (de f1) + 500.0 (de f2, que é um Diretor) = 600.0.",
      "Errada: f1 é apenas um Funcionario (100.0).",
      "Errada: toda referência de Superclasse pode apontar para um objeto de uma Subclasse!"
    ]
  },
  {
    id: "q11",
    mod: "m6",
    titulo: "Sobrecarga vs Sobrescrita (Teórica de Prova)",
    enunciado: "Na prova N3, o professor pergunta a diferença entre Sobrescrita (Override) e Sobrecarga (Overload). Qual alternativa está CORRETA?",
    codigo: `// Caso A (na subclasse):
@Override
public void pagar(double valor) { ... }

// Caso B (na mesma classe):
public void pagar(double valor) { ... }
public void pagar(double valor, int parcelas) { ... }`,
    alts: [
      "Caso A é Sobrecarga e Caso B é Sobrescrita.",
      "Caso A é Sobrescrita (mesmo nome e mesmos parâmetros na classe filha) e Caso B é Sobrecarga (mesmo nome, mas parâmetros diferentes).",
      "Ambos exigem o uso da palavra 'interface'.",
      "Em Java não é permitido ter dois métodos com o mesmo nome na mesma classe."
    ],
    correta: 1,
    explicacao: "Decorou isso, acertou na N3: MESMA assinatura na classe filha = SOBRESCRITA (@Override). PARÂMETROS DIFERENTES com mesmo nome = SOBRECARGA (Overload).",
    porAlt: [
      "Errada: inverteu os dois conceitos.",
      "Certa! Definição exata de Sobrescrita (@Override) vs Sobrecarga (Overload).",
      "Errada: nenhum dos dois exige interface.",
      "Errada: ter dois métodos de mesmo nome com parâmetros diferentes na mesma classe é justamente a Sobrecarga!"
    ]
  },
  {
    id: "q12",
    mod: "m7",
    titulo: "Classes Abstratas e Interfaces",
    enunciado: "Analise as afirmações sobre Classes Abstratas ('abstract class') e Interfaces ('interface') em Java:",
    codigo: `public abstract class Conta {
    protected double saldo;
    public abstract void atualizar();
}

public interface Tributavel {
    double calcularImposto();
}`,
    alts: [
      "Podemos fazer 'Conta c = new Conta();' normalmente no main.",
      "Nem 'Conta' nem 'Tributavel' podem ser instanciadas diretamente com 'new', e uma classe concreta pode fazer 'extends Conta implements Tributavel'.",
      "Uma classe em Java pode dar 'extends' em 3 classes abstratas ao mesmo tempo.",
      "Uma interface não pode ter métodos."
    ],
    correta: 1,
    explicacao: "Classes abstratas e interfaces são incompletas por definição, logo é proibido dar 'new' direto nelas! E em Java uma classe pode herdar de apenas 1 classe ('extends Conta'), mas pode implementar várias interfaces ('implements Tributavel, Autenticavel').",
    porAlt: [
      "Errada: é proibido dar 'new' em classe abstrata.",
      "Certa! Resumo perfeito de como abstract class e interface funcionam.",
      "Errada: Java não permite herança múltipla de classes (apenas 1 extends).",
      "Errada: interfaces servem justamente para definir contratos de métodos."
    ]
  },
  {
    id: "q13",
    mod: "m7",
    titulo: "Tratamento de Exceções (try / catch / finally)",
    enunciado: "O que será impresso no console ao executar o código abaixo (questão clássica de N3)?",
    codigo: `public class ProvaN3 {
    public static void main(String[] args) {
        try {
            System.out.print("1 ");
            int x = 10 / 0; // Divisão por zero!
            System.out.print("2 ");
        } catch (ArithmeticException e) {
            System.out.print("3 ");
        } finally {
            System.out.print("4");
        }
    }
}`,
    alts: [
      "1 2 3 4",
      "1 3 4",
      "1 2 4",
      "3 4"
    ],
    correta: 1,
    explicacao: "Primeiro imprime '1 '. Na linha '10 / 0', ocorre ArithmeticException, então ele PULA o resto do bloco try (NÃO imprime '2 '), entra direto no 'catch' (imprime '3 ') e depois obrigatoriamente executa o 'finally' (imprime '4'). Resultado: '1 3 4'!",
    porAlt: [
      "Errada: a linha 'System.out.print(\"2 \")' está depois do erro no try, então nunca é executada.",
      "Certa! Imprime 1, dá erro na divisão por zero, pula pro catch (3) e finaliza no finally (4).",
      "Errada: como houve erro, entra no catch (3) e pula o 2.",
      "Errada: o '1 ' está antes da linha que causa o erro, então ele é impresso normalmente."
    ]
  }
];
