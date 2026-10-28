// BANCO COMPLETO DE 60 QUESTÕES DE JAVA E POO (DO ZERO ATÉ A N3 DA USCS)
// Todas com código comentado, explicação passo a passo e análise das alternativas.

window.QUESTOES_JAVA = [
  // ==========================================
  // MÓDULO 0: JAVA DO ZERO (VARIÁVEIS, IF, FOR, PRINTLN)
  // ==========================================
  {
    id: "q0_1", mod: "m0",
    titulo: "1. Concatenação vs Soma no System.out.println",
    enunciado: "O que será impresso na tela ao executar as duas linhas abaixo em Java?",
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
    explicacao: "Regra da Esquerda para a Direita: quando o Java vê uma String (\"Nota: \") seguida de '+', ele converte tudo que vem depois em texto: \"Nota: \" + 5 vira \"Nota: 5\", e com + 3 vira \"Nota: 53\". Na segunda linha, os parênteses (5 + 3) obrigam o Java a somar os números primeiro (8), imprimindo 'Soma: 8'.",
    porAlt: [
      "Errada: na 1ª linha não há parênteses, então o '+' concatena (junta) o 5 e o 3 como texto.",
      "Certa! Sem parênteses após String concatena ('53'); com parênteses soma primeiro ('8').",
      "Errada: os parênteses na 2ª linha somam 5 + 3 = 8 antes de juntar com o texto.",
      "Errada: usar '+' entre texto e números é 100% válido em Java."
    ]
  },
  {
    id: "q0_2", mod: "m0",
    titulo: "2. Tipos Primitivos e String em Java",
    enunciado: "Qual das linhas abaixo possui um ERRO DE COMPILAÇÃO em Java?",
    codigo: `int idade = 20;           // Linha 1
double salario = 2500.50; // Linha 2
string nome = "Rafael";   // Linha 3
boolean ativo = true;     // Linha 4`,
    alts: [
      "Linha 1, porque inteiro em Java se escreve 'integer'.",
      "Linha 2, porque decimal em Java usa vírgula (2500,50).",
      "Linha 3, porque 'String' em Java é uma Classe e OBRIGATORIAMENTE começa com 'S' maiúsculo.",
      "Linha 4, porque boolean só aceita 0 ou 1."
    ],
    correta: 2,
    explicacao: "Em Java, int, double e boolean são tipos primitivos (começam com letra minúscula). Já 'String' é uma Classe do pacote java.lang, portanto DEVE começar com S maiúsculo: String nome = \"Rafael\";",
    porAlt: [
      "Errada: o tipo primitivo inteiro em Java é 'int'.",
      "Errada: no código-fonte sempre usamos ponto decimal (2500.50).",
      "Certa! Escrever 'string' com 's' minúsculo dá erro de compilação imediato.",
      "Errada: em Java, boolean só aceita 'true' ou 'false' (nunca 0 ou 1)."
    ]
  },
  {
    id: "q0_3", mod: "m0",
    titulo: "3. Divisão de Inteiros (Pegadinha de Prova!)",
    enunciado: "Qual valor será guardado na variável 'resultado' e impresso no console?",
    codigo: `int a = 7;
int b = 2;
double resultado = a / b;
System.out.println(resultado);`,
    alts: [
      "3.5",
      "3.0",
      "3",
      "4.0"
    ],
    correta: 1,
    explicacao: "Muita atenção! Como 'a' (7) e 'b' (2) são ambos 'int', a divisão 'a / b' é uma DIVISÃO INTEIRA: 7 dividido por 2 dá 3 (descarta o ',5' na hora!). Depois, esse 3 é guardado dentro da variável 'double resultado', virando '3.0'! Para dar 3.5, um dos números precisava ser double: '(double) a / b' ou '7.0 / 2'.",
    porAlt: [
      "Errada: como 7 e 2 são int, o Java corta a parte decimal antes mesmo de guardar no double!",
      "Certa! 7 / 2 entre inteiros resulta em 3, que ao entrar num double é impresso como 3.0.",
      "Errada: variáveis double sempre imprimem pelo menos uma casa decimal (.0).",
      "Errada: divisão inteira trunca (corta), nunca arredonda para cima."
    ]
  },
  {
    id: "q0_4", mod: "m0",
    titulo: "4. Comparação com '==' vs Atribuição com '='",
    enunciado: "Analise o bloco if/else abaixo. O que será impresso?",
    codigo: `int nota = 5;
if (nota >= 6) {
    System.out.print("Aprovado ");
} else {
    System.out.print("Exame ");
}
System.out.print("Fim");`,
    alts: [
      "Aprovado Fim",
      "Exame Fim",
      "Aprovado Exame Fim",
      "Apenas Exame"
    ],
    correta: 1,
    explicacao: "Como 'nota' vale 5, a condição 'nota >= 6' é falsa (false). Portanto, o programa entra no bloco 'else' e imprime 'Exame '. Depois que o if/else acaba, a linha 'System.out.print(\"Fim\")' está fora do else, então ela roda sempre! Resultado: 'Exame Fim'.",
    porAlt: [
      "Errada: 5 não é maior ou igual a 6.",
      "Certa! Entra no else ('Exame ') e depois executa a linha seguinte fora do bloco ('Fim').",
      "Errada: nunca entra no if e no else ao mesmo tempo.",
      "Errada: o comando 'System.out.print(\"Fim\")' está fora do else, logo é executado."
    ]
  },
  {
    id: "q0_5", mod: "m0",
    titulo: "5. Teste de Mesa com Laço 'for'",
    enunciado: "Faça o teste de mesa: qual será o valor final da variável 'soma' impresso na tela?",
    codigo: `int soma = 0;
for (int i = 1; i <= 4; i++) {
    soma = soma + i;
}
System.out.println(soma);`,
    alts: [
      "4",
      "6",
      "10",
      "15"
    ],
    correta: 2,
    explicacao: "Vamos rastrear volta por volta (i vai de 1 até 4):\n• 1ª volta (i=1): soma = 0 + 1 = 1\n• 2ª volta (i=2): soma = 1 + 2 = 3\n• 3ª volta (i=3): soma = 3 + 3 = 6\n• 4ª volta (i=4): soma = 6 + 4 = 10\nQuando i vira 5, 'i <= 4' dá falso e o laço termina. Imprime 10!",
    porAlt: [
      "Errada: 4 é apenas o último valor de i, mas estamos acumulando em 'soma'.",
      "Errada: 6 é a soma apenas até i = 3; como a condição é 'i <= 4', o 4 também entra!",
      "Certa! 1 + 2 + 3 + 4 = 10.",
      "Errada: 15 seria se o laço fosse até i <= 5."
    ]
  },
  {
    id: "q0_6", mod: "m0",
    titulo: "6. Comparando Strings em Java (.equals vs ==)",
    enunciado: "Em Java, qual é a forma CORRETA e segura de verificar se duas variáveis do tipo String possuem o mesmo texto?",
    codigo: `String s1 = "USCS";
String s2 = lerDoTeclado();
// Como comparar se o texto de s1 é igual ao de s2?`,
    alts: [
      "if (s1 = s2)",
      "if (s1.equals(s2))",
      "if (s1 === s2)",
      "if (String.compare(s1, s2))"
    ],
    correta: 1,
    explicacao: "Como String em Java é um OBJETO (e não um tipo primitivo), usar '==' compara se as duas variáveis apontam para o mesmo endereço de memória, e não o texto! Para comparar o conteúdo de texto de duas Strings em Java, SEMPRE usamos 's1.equals(s2)'!",
    porAlt: [
      "Errada: um único '=' é atribuição, não comparação.",
      "Certa! O método .equals() compara letra por letra o conteúdo de duas Strings.",
      "Errada: o operador '===' existe em JavaScript, mas não existe em Java.",
      "Errada: o método padrão da classe String é .equals() ou .equalsIgnoreCase()."
    ]
  },

  // ==========================================
  // MÓDULO 1: CLASSES, OBJETOS E NEW
  // ==========================================
  {
    id: "q1_1", mod: "m1",
    titulo: "7. Classe vs Objeto (Conceito Fundamental)",
    enunciado: "Na Programação Orientada a Objetos em Java, qual alternativa define corretamente CLASSE e OBJETO?",
    codigo: `public class Celular {
    String marca;
}
// No main:
Celular meuAparelho = new Celular();`,
    alts: [
      "Celular é o objeto e meuAparelho é a classe.",
      "A Classe ('Celular') é o molde/modelo que define atributos e métodos; o Objeto ('meuAparelho') é a instância concreta criada na memória com 'new'.",
      "Uma classe só pode gerar no máximo 1 objeto no programa.",
      "O comando 'new' serve para apagar a classe da memória."
    ],
    correta: 1,
    explicacao: "A Classe é o projeto/molde (não ocupa espaço de dados individuais até ser instanciada). O Objeto é a instância viva criada na memória Heap quando executamos 'new Celular()'.",
    porAlt: [
      "Errada: inverteu os dois conceitos.",
      "Certa! Definição perfeita para questões abertas ou fechadas da prova.",
      "Errada: uma única classe pode instanciar milhares de objetos diferentes.",
      "Errada: o operador 'new' aloca memória e cria o objeto."
    ]
  },
  {
    id: "q1_2", mod: "m1",
    titulo: "8. Dois Objetos Independentes na Memória",
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
    explicacao: "Cada 'new Conta()' cria um objeto separado na memória. 'c1.saldo' passou a valer 250. Depois, 'c2.saldo' recebeu o valor de c1.saldo (250) + 50 = 300. Portanto, imprime '250 e 300'.",
    porAlt: [
      "Errada: c1.saldo foi alterado para 250 antes da conta de c2.",
      "Certa! c1 tem 250 e c2 tem 300.",
      "Errada: somar 50 para guardar em c2 não modifica o saldo de c1.",
      "Errada: o código compila e roda sem erros."
    ]
  },
  {
    id: "q1_3", mod: "m1",
    titulo: "9. Duas Variáveis Apontando para o MESMO Objeto!",
    enunciado: "ATENÇÃO! Olhe a diferença quando NÃO usamos dois 'new'. O que será impresso abaixo?",
    codigo: `public class Conta {
    int saldo = 100;
}

public class Teste {
    public static void main(String[] args) {
        Conta c1 = new Conta();
        Conta c2 = c1; // c2 aponta para o MESMO objeto de c1!
        c2.saldo = 500;
        System.out.println(c1.saldo);
    }
}`,
    alts: [
      "100",
      "500",
      "600",
      "NullPointerException"
    ],
    correta: 1,
    explicacao: "Essa é a questão favorita de professores de POO! Só existe UM 'new Conta()' no código! Quando fazemos 'Conta c2 = c1;', não criamos outra conta: apenas copiamos a flecha (referência). Tanto 'c1' quanto 'c2' apontam para a MESMA conta na memória! Logo, mudar 'c2.saldo = 500' muda o saldo da única conta existente, e 'c1.saldo' imprime 500!",
    porAlt: [
      "Errada: como c2 e c1 apontam para o mesmo objeto no Heap, alterar por c2 altera o objeto visto por c1.",
      "Certa! Existe apenas 1 objeto na memória com duas variáveis apontando para ele.",
      "Errada: o sinal '=' substituiu o valor 100 por 500, não somou.",
      "Errada: c1 foi devidamente instanciado com new Conta()."
    ]
  },
  {
    id: "q1_4", mod: "m1",
    titulo: "10. Armadilha do NullPointerException",
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
      "Errada: 'Rafael' é String.",
      "Certa! Sem 'new Aluno()', a referência é null e tentar usar o ponto (a.nome) gera NullPointerException.",
      "Errada: println aceita qualquer tipo de dado.",
      "Errada: apenas a classe inicial precisa ter o método main."
    ]
  },
  {
    id: "q1_5", mod: "m1",
    titulo: "11. Valores Padrão de Atributos (Default Values)",
    enunciado: "Quando criamos um objeto com 'new', se não dermos valor inicial aos atributos da classe, com quais valores padrão eles nascem no Java?",
    codigo: `public class Cliente {
    String nome;
    int idade;
    double credito;
    boolean vip;
}`,
    alts: [
      "Nascem todos valendo lixo de memória imprevisível.",
      "String nasce 'null', int nasce '0', double nasce '0.0' e boolean nasce 'false'.",
      "String nasce '\"\"', int nasce '1', double nasce '1.0' e boolean nasce 'true'.",
      "O código não compila se você não inicializar os atributos."
    ],
    correta: 1,
    explicacao: "Em Java, todo ATRIBUTO de classe recebe um valor padrão automático quando o objeto é criado no Heap: objetos/Strings começam como 'null', inteiros como '0', decimais como '0.0' e booleanos como 'false'!",
    porAlt: [
      "Errada: diferente da linguagem C, o Java zera automaticamente todos os atributos de um objeto.",
      "Certa! Regra oficial do Java: referências = null, int = 0, double = 0.0, boolean = false.",
      "Errada: boolean começa como false e números começam zerados.",
      "Errada: atributos de classe não precisam ser inicializados manualmente para compilar."
    ]
  },
  {
    id: "q1_6", mod: "m1",
    titulo: "12. Atributo da Classe vs Variável Local",
    enunciado: "No código abaixo, quais são os ATRIBUTOS da classe Lampada?",
    codigo: `public class Lampada {
    String cor;
    boolean ligada;

    public void testar(int voltagem) {
        int tempo = 10;
        System.out.println(voltagem + tempo);
    }
}`,
    alts: [
      "voltagem e tempo",
      "cor e ligada",
      "testar e Lampada",
      "cor, ligada, voltagem e tempo"
    ],
    correta: 1,
    explicacao: "Atributos (variáveis de instância) são declarados diretamente dentro da classe, fora de qualquer método: 'cor' e 'ligada'. Já 'voltagem' é um parâmetro do método e 'tempo' é uma variável local que morre quando o método 'testar' acaba!",
    porAlt: [
      "Errada: voltagem é parâmetro e tempo é variável local do método.",
      "Certa! 'cor' e 'ligada' pertencem ao objeto Lampada.",
      "Errada: Lampada é o nome da classe e testar é o nome do método.",
      "Errada: variáveis criadas dentro de métodos não são atributos do objeto."
    ]
  },

  // ==========================================
  // MÓDULO 2: MÉTODOS, PARÂMETROS, VOID VS RETURN
  // ==========================================
  {
    id: "q2_1", mod: "m2",
    titulo: "13. Erro Clássico de Método sem return",
    enunciado: "Qual erro impede a classe abaixo de compilar?",
    codigo: `public class Calculadora {
    public void mostrarDobro(int x) {
        System.out.println(x * 2);
    }

    public int somar(int a, int b) {
        int res = a + b;
    }
}`,
    alts: [
      "O método 'mostrarDobro' precisava ter 'return 0;'.",
      "O método 'somar' prometeu retornar um 'int' na assinatura, mas não possui a instrução 'return res;'.",
      "Um método não pode receber dois parâmetros int.",
      "Não há erro nenhum."
    ],
    correta: 1,
    explicacao: "Sempre que o tipo do método NÃO for 'void' (por exemplo, 'public int somar'), o método é obrigado a devolver um valor daquele tipo com a palavra-chave 'return'!",
    porAlt: [
      "Errada: métodos void não retornam valor.",
      "Certa! Prometeu 'int', tem que ter 'return valorInteiro;'.",
      "Errada: métodos podem ter quantos parâmetros precisarem.",
      "Errada: o compilador Java acusa 'missing return statement'."
    ]
  },
  {
    id: "q2_2", mod: "m2",
    titulo: "14. Rastreando Chamadas de Métodos",
    enunciado: "Faça o teste de mesa: o que será impresso ao rodar o método main?",
    codigo: `public class Caixa {
    int valor = 10;

    public void adicionar(int x) {
        valor = valor + x;
    }

    public int triplicar() {
        return valor * 3;
    }

    public static void main(String[] args) {
        Caixa c = new Caixa();
        c.adicionar(5);
        int resultado = c.triplicar();
        System.out.println(c.valor + " e " + resultado);
    }
}`,
    alts: [
      "10 e 30",
      "15 e 45",
      "45 e 45",
      "15 e 30"
    ],
    correta: 1,
    explicacao: "Passo a passo:\n1) 'c.valor' começa em 10.\n2) 'c.adicionar(5)' muda 'c.valor' para 10 + 5 = 15.\n3) 'c.triplicar()' retorna 'valor * 3' (15 * 3 = 45), mas repare que NÃO altera o atributo 'valor' (apenas devolve 45 para a variável 'resultado').\n4) Imprime '15 e 45'!",
    porAlt: [
      "Errada: esqueceu que c.adicionar(5) somou 5 ao valor inicial 10.",
      "Certa! O atributo c.valor vale 15 e o retorno de triplicar() vale 45.",
      "Errada: triplicar() apenas retorna 'valor * 3', sem fazer 'valor = valor * 3'.",
      "Errada: quando triplicar() roda, valor já é 15 (15 * 3 = 45)."
    ]
  },
  {
    id: "q2_3", mod: "m2",
    titulo: "15. Tentando Guardar Retorno de um Método void",
    enunciado: "Por que a linha destacada no main abaixo gera ERRO DE COMPILAÇÃO?",
    codigo: `public class Impressora {
    public void exibirMensagem() {
        System.out.println("Olá USCS!");
    }

    public static void main(String[] args) {
        Impressora imp = new Impressora();
        String texto = imp.exibirMensagem(); // <-- ERRO AQUI!
    }
}`,
    alts: [
      "Porque o método exibirMensagem() é 'void' (não devolve nada), logo não pode ser atribuído a uma variável String.",
      "Porque faltou passar um parâmetro dentro de exibirMensagem().",
      "Porque Impressora não pode ser instanciada com new.",
      "Porque System.out.println é proibido fora do main."
    ],
    correta: 0,
    explicacao: "Um método 'void' apenas executa uma ação e não devolve valor algum. Tentar fazer 'String texto = imp.exibirMensagem();' dá erro 'void cannot be converted to String'.",
    porAlt: [
      "Certa! Métodos void são chamados sozinhos na linha: 'imp.exibirMensagem();'.",
      "Errada: o método foi declarado sem parâmetros, então chamá-lo sem argumentos está certo.",
      "Errada: Impressora é uma classe concreta normal.",
      "Errada: qualquer método pode usar System.out.println."
    ]
  },
  {
    id: "q2_4", mod: "m2",
    titulo: "16. Método Retornando boolean (Verdadeiro ou Falso)",
    enunciado: "O que será impresso por este programa?",
    codigo: `public class Estudante {
    double media;

    public boolean estaAprovado() {
        return media >= 6.0;
    }

    public static void main(String[] args) {
        Estudante e = new Estudante();
        e.media = 7.5;
        System.out.println(e.estaAprovado());
    }
}`,
    alts: [
      "7.5",
      "true",
      "false",
      "media >= 6.0"
    ],
    correta: 1,
    explicacao: "A expressão 'media >= 6.0' avalia se 7.5 é maior ou igual a 6.0. Como isso é verdade, ela resulta no valor booleano 'true', que é retornado pelo método e impresso na tela!",
    porAlt: [
      "Errada: o método retorna o resultado da comparação (boolean), não a média.",
      "Certa! 7.5 >= 6.0 é verdadeiro (true).",
      "Errada: 7.5 é maior que 6.0.",
      "Errada: não há aspas na expressão, então ela é calculada antes de retornar."
    ]
  },
  {
    id: "q2_5", mod: "m2",
    titulo: "17. O que acontece DEPOIS do comando return?",
    enunciado: "Quando o Java executa a linha 'return' dentro de um método, o que acontece?",
    codigo: `public int verificar(int n) {
    if (n < 0) {
        return 0;
    }
    return n * 10;
}`,
    alts: [
      "Ele continua executando as linhas de baixo do método normalmente.",
      "O método encerra IMEDIATAMENTE naquele ponto e devolve o valor para quem o chamou.",
      "Ele reinicia o método desde a primeira linha.",
      "Ele apaga o objeto da memória."
    ],
    correta: 1,
    explicacao: "O comando 'return' funciona como uma saída de emergência imediata: assim que é atingido, o método termina na hora e devolve o resultado! Se você chamar 'verificar(-5)', ele entra no if, retorna 0 e nem passa pela linha 'return n * 10;'.",
    porAlt: [
      "Errada: qualquer código colocado logo abaixo de um return incondicional nem compila (Unreachable code).",
      "Certa! O 'return' devolve o valor e encerra a execução do método imediatamente.",
      "Errada: quem repete código é laço (for/while), não return.",
      "Errada: return apenas encerra o método atual."
    ]
  },

  // ==========================================
  // MÓDULO 3: CONSTRUTORES, SOBRECARGA E THIS
  // ==========================================
  {
    id: "q3_1", mod: "m3",
    titulo: "18. Pegadinha do 'void' no Construtor",
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
    explicacao: "PEGADINHA CLÁSSICA DE PROVA! Construtor NUNCA tem tipo de retorno (nem mesmo 'void'). Ao escrever 'public void Produto(String n)', o programador criou um método comum chamado Produto, e não um construtor! Por isso 'new Produto(\"Mouse\")' dá erro de compilação.",
    porAlt: [
      "Errada: por causa do 'void', esse bloco não é reconhecido como construtor pelo comando 'new'.",
      "Certa! Para ser construtor, deve ser escrito 'public Produto(String n)' sem a palavra void.",
      "Errada: a chamada 'new Produto(\"Mouse\")' nem compila.",
      "Errada: não existe deleção de atributo."
    ]
  },
  {
    id: "q3_2", mod: "m3",
    titulo: "19. O Bug de Esquecer o 'this'",
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
    explicacao: "Quando o parâmetro tem o mesmo nome do atributo ('nome'), sem usar 'this.nome = nome;', o comando 'nome = nome;' apenas atribui o parâmetro a ele mesmo! O atributo do objeto ('p.nome') nunca foi alterado e continua valendo 'Vazio'!",
    porAlt: [
      "Errada: para gravar 'Rafael' no atributo da classe, era obrigatório escrever 'this.nome = nome;'.",
      "Certa! O atributo da classe permaneceu com seu valor inicial 'Vazio'.",
      "Errada: o atributo foi inicializado com \"Vazio\" na linha 2.",
      "Errada: 'nome = nome;' compila sem erro sintático, mas causa esse erro lógico."
    ]
  },
  {
    id: "q3_3", mod: "m3",
    titulo: "20. Quando o Construtor Vazio Desaparece!",
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
      "Porque quando você cria qualquer construtor com parâmetros, o Java deixa de criar o construtor vazio padrão gratuitamente.",
      "Porque faltou a palavra 'extends' na classe Livro.",
      "Porque 'String titulo' não é privado."
    ],
    correta: 1,
    explicacao: "Se você não escrever nenhum construtor, o Java cria 'public Livro() {}' invisivelmente para você. Mas se você criar 'public Livro(String titulo)', o Java NÃO cria mais o vazio! Para usar 'new Livro()', você precisa declarar 'public Livro() {}' explicitamente.",
    porAlt: [
      "Errada: você pode ter construtor vazio, basta escrevê-lo na classe.",
      "Certa! Questão garantida em provas de POO.",
      "Errada: extends não tem relação com isso.",
      "Errada: o erro é na chamada do construtor inexistente."
    ]
  },
  {
    id: "q3_4", mod: "m3",
    titulo: "21. Sobrecarga de Construtores na Prática",
    enunciado: "Analise a classe Pedido com 2 construtores sobrecarregados. O que será impresso?",
    codigo: `public class Pedido {
    String item;
    int qtd;

    public Pedido(String item) {
        this.item = item;
        this.qtd = 1;
    }

    public Pedido(String item, int qtd) {
        this.item = item;
        this.qtd = qtd;
    }

    public static void main(String[] args) {
        Pedido p1 = new Pedido("Cafe");
        Pedido p2 = new Pedido("Pao", 4);
        System.out.println(p1.qtd + p2.qtd);
    }
}`,
    alts: [
      "4",
      "5",
      "2",
      "Erro porque existem dois construtores com o mesmo nome"
    ],
    correta: 1,
    explicacao: "'new Pedido(\"Cafe\")' tem apenas 1 argumento String, então chama o 1º construtor (que define p1.qtd = 1). Já 'new Pedido(\"Pao\", 4)' tem String e int, então chama o 2º construtor (p2.qtd = 4). Soma: 1 + 4 = 5!",
    porAlt: [
      "Errada: p1.qtd foi inicializado com 1 no primeiro construtor (1 + 4 = 5).",
      "Certa! Isso se chama Sobrecarga de Construtores (Overload): o Java escolhe qual chamar pelos parâmetros.",
      "Errada: p2.qtd recebeu 4.",
      "Errada: ter vários construtores com listas de parâmetros diferentes é totalmente válido e se chama Sobrecarga."
    ]
  },
  {
    id: "q3_5", mod: "m3",
    titulo: "22. Chamando um Construtor de Dentro de Outro: this(...)",
    enunciado: "O que faz o comando 'this(\"Sem nome\", 0);' dentro do construtor vazio abaixo?",
    codigo: `public class Aluno {
    String nome;
    int idade;

    public Aluno() {
        this("Sem nome", 0);
    }

    public Aluno(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}`,
    alts: [
      "Dá erro de compilação porque 'this' só pode ser usado com ponto (this.nome).",
      "Chama o outro construtor da própria classe Aluno que recebe (String, int), reaproveitando o código de inicialização!",
      "Apaga o objeto atual.",
      "Chama o construtor da classe mãe."
    ],
    correta: 1,
    explicacao: "Em Java, 'this(...)' com parênteses na 1ª linha de um construtor serve para chamar outro construtor da MESMA classe! Assim, quando alguém faz 'new Aluno()', ele repassa \"Sem nome\" e 0 para o construtor completo!",
    porAlt: [
      "Errada: 'this(...)' na primeira linha do construtor é sintaxe oficial do Java.",
      "Certa! 'this(...)' chama outro construtor da mesma classe; já 'super(...)' chama o construtor da classe mãe.",
      "Errada: não apaga nada.",
      "Errada: quem chama o construtor da classe mãe é 'super(...)'."
    ]
  },

  // ==========================================
  // MÓDULO 4: ENCAPSULAMENTO (PRIVATE, PUBLIC, PROTECTED, GET/SET, UML)
  // ==========================================
  {
    id: "q4_1", mod: "m4",
    titulo: "23. Bloqueio do Modificador private",
    enunciado: "Considere as duas classes abaixo. O que acontece ao tentar compilar a classe Principal?",
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
      "Imprime null."
    ],
    correta: 1,
    explicacao: "Atributos marcados como 'private' são invisíveis fora da própria classe onde foram declarados. Na classe Principal, o acesso direto 'c.senha' é proibido pelo compilador; deve-se usar 'c.getSenha()'.",
    porAlt: [
      "Errada: private bloqueia acesso direto de outras classes.",
      "Certa! Esse é o coração do Encapsulamento.",
      "Errada: nem chega a compilar.",
      "Errada: nem compila."
    ]
  },
  {
    id: "q4_2", mod: "m4",
    titulo: "24. Validação dentro do Método Setter",
    enunciado: "Faça o teste de mesa: qual será o valor impresso no final do main?",
    codigo: `public class Produto {
    private double preco = 50.0;

    public double getPreco() {
        return this.preco;
    }

    public void setPreco(double novoPreco) {
        if (novoPreco > 0) {
            this.preco = novoPreco;
        }
    }

    public static void main(String[] args) {
        Produto p = new Produto();
        p.setPreco(120.0);
        p.setPreco(-30.0);
        System.out.println(p.getPreco());
    }
}`,
    alts: [
      "-30.0",
      "120.0",
      "50.0",
      "90.0"
    ],
    correta: 1,
    explicacao: "Veja a grande vantagem do Encapsulamento:\n1) 'p.preco' começa em 50.0.\n2) 'p.setPreco(120.0)': como 120.0 > 0 é verdadeiro, 'this.preco' vira 120.0.\n3) 'p.setPreco(-30.0)': como -30.0 > 0 é FALSO, o setter ignora o valor negativo e protege o objeto!\n4) 'p.getPreco()' retorna 120.0!",
    porAlt: [
      "Errada: o if (novoPreco > 0) barrou a entrada do valor negativo -30.0.",
      "Certa! O primeiro setPreco mudou para 120.0 e o segundo foi barrado pela validação.",
      "Errada: o valor 50.0 foi substituído por 120.0 na primeira chamada.",
      "Errada: o setter substitui o valor quando válido, não soma 120 com -30."
    ]
  },
  {
    id: "q4_3", mod: "m4",
    titulo: "25. Traduzindo Diagrama UML para Código Java",
    enunciado: "Em um diagrama de classes UML do Prof. Jacinto aparecem os símbolos '-', '+' e '#'. O que cada um significa no código Java?",
    codigo: `------------------------------
|          Funcionario       |
------------------------------
| - cpf : String             |
| # salario : double         |
------------------------------
| + calcularFerias() : double|
------------------------------`,
    alts: [
      "'-' = public, '#' = private, '+' = protected",
      "'-' = private, '#' = protected, '+' = public",
      "'-' = atributo, '#' = construtor, '+' = método",
      "'-' = void, '#' = int, '+' = double"
    ],
    correta: 1,
    explicacao: "Tabela obrigatória para a prova:\n• Menos (-) = private (trancado)\n• Cerquilha (#) = protected (protegido p/ herança)\n• Mais (+) = public (aberto para todos)",
    porAlt: [
      "Errada: inverteu os modificadores.",
      "Certa! '-' é private, '#' é protected e '+' é public.",
      "Errada: os sinais indicam visibilidade/acesso.",
      "Errada: o tipo de retorno aparece depois dos dois-pontos (: double)."
    ]
  },
  {
    id: "q4_4", mod: "m4",
    titulo: "26. Assinatura Correta de Getter e Setter",
    enunciado: "Se uma classe possui o atributo 'private String email;', quais são as assinaturas padrão do seu Getter e do seu Setter?",
    codigo: `public class Usuario {
    private String email;
    // Como escrever o getEmail e o setEmail?
}`,
    alts: [
      "public void getEmail(String e)  e  public String setEmail()",
      "public String getEmail()  e  public void setEmail(String email)",
      "private String getEmail()  e  private void setEmail(String email)",
      "public int getEmail()  e  public boolean setEmail()"
    ],
    correta: 1,
    explicacao: "Regra prática:\n• GET (pegar/ler): não precisa de parâmetro e RETORNA o tipo do atributo -> 'public String getEmail()'.\n• SET (alterar/gravar): é 'void' e RECEBE como parâmetro o novo valor do mesmo tipo do atributo -> 'public void setEmail(String email)'.",
    porAlt: [
      "Errada: inverteu os retornos e parâmetros do get com o set.",
      "Certa! Get devolve String sem parâmetros; Set é void e recebe a nova String.",
      "Errada: getters e setters precisam ser 'public' para poderem ser chamados de fora da classe!",
      "Errada: o tipo do atributo é String, não int."
    ]
  },
  {
    id: "q4_5", mod: "m4",
    titulo: "27. Diferença entre private, protected e public",
    enunciado: "Qual modificador de acesso permite que um atributo seja acessado diretamente pelas CLASSES FILHAS (Subclasses via herança), mas esconde de classes externas de outros pacotes?",
    codigo: `public class Conta {
    _________ double saldo; // Visível na classe filha ContaPoupanca!
}`,
    alts: [
      "private",
      "protected",
      "static",
      "void"
    ],
    correta: 1,
    explicacao: "O 'protected' (# na UML) é o meio-termo feito sob medida para a Herança: ele protege o atributo do mundo externo, mas deixa as classes filhas (subclasses) acessarem diretamente!",
    porAlt: [
      "Errada: 'private' bloqueia até mesmo as classes filhas de acessarem diretamente.",
      "Certa! 'protected' libera acesso para subclasses e classes do mesmo pacote.",
      "Errada: 'static' define membro da classe, não visibilidade.",
      "Errada: 'void' é ausência de retorno em método."
    ]
  },

  // ==========================================
  // MÓDULO 5: HERANÇA (EXTENDS E SUPER)
  // ==========================================
  {
    id: "q5_1", mod: "m5",
    titulo: "28. Sintaxe de Herança e Construtor Pai (super)",
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
    explicacao: "Como 'Moto extends Veiculo', Moto herda o atributo 'protected String marca'. O comando 'super(marca)' na 1ª linha do construtor de Moto chama o construtor de Veiculo, que guarda \"Honda\" em 'this.marca'.",
    porAlt: [
      "Errada: 'super(marca)' preencheu o atributo herdado marca com 'Honda'.",
      "Certa! Imprime 'Honda 300cc'.",
      "Errada: Moto herdou 'marca' de Veiculo através do 'extends'.",
      "Errada: cilindradas recebeu 300."
    ]
  },
  {
    id: "q5_2", mod: "m5",
    titulo: "29. Ordem de Execução dos Construtores na Herança",
    enunciado: "Quando instanciamos uma classe Filha ('new Filha()'), qual construtor executa PRIMEIRO?",
    codigo: `class Mae {
    public Mae() {
        System.out.print("1-Mãe ");
    }
}

class Filha extends Mae {
    public Filha() {
        System.out.print("2-Filha ");
    }

    public static void main(String[] args) {
        Filha f = new Filha();
    }
}`,
    alts: [
      "2-Filha 1-Mãe",
      "1-Mãe 2-Filha",
      "Apenas 2-Filha",
      "Apenas 1-Mãe"
    ],
    correta: 1,
    explicacao: "Na herança, a base (Mãe/Superclasse) SEMPRE é construída antes do topo (Filha/Subclasse)! Mesmo quando você não escreve 'super()' no construtor da Filha, o Java coloca um 'super()' invisível na 1ª linha do construtor da Filha. Por isso imprime '1-Mãe 2-Filha'!",
    porAlt: [
      "Errada: uma filha não pode existir antes de a parte mãe ser inicializada.",
      "Certa! Primeiro roda o construtor da Superclasse (Mãe) e depois o da Subclasse (Filha).",
      "Errada: o construtor da mãe sempre é chamado.",
      "Errada: o construtor da filha roda logo após o da mãe terminar."
    ]
  },
  {
    id: "q5_3", mod: "m5",
    titulo: "30. Regra da 1ª Linha do super(...)",
    enunciado: "Por que o construtor da classe Aluno abaixo dá ERRO DE COMPILAÇÃO?",
    codigo: `public class Pessoa {
    protected String nome;
    public Pessoa(String nome) {
        this.nome = nome;
    }
}

public class Aluno extends Pessoa {
    private int ra;
    public Aluno(String nome, int ra) {
        this.ra = ra;
        super(nome); // <--- OLHE ESTA LINHA!
    }
}`,
    alts: [
      "Porque o comando 'super(nome);' OBRIGATORIAMENTE precisa ser a PRIMEIRA linha dentro do construtor da classe filha!",
      "Porque deveria ser escrito 'Pessoa(nome);' em vez de 'super(nome);'.",
      "Porque 'ra' não pode ser int.",
      "Porque Aluno não pode ter atributos próprios."
    ],
    correta: 0,
    explicacao: "Regra rígida do compilador Java: a chamada 'super(...)' (ou 'this(...)') TEM QUE SER A PRIMEIRA INSTRUÇÃO dentro do construtor! Colocar 'this.ra = ra;' antes do 'super(nome);' impede o código de compilar.",
    porAlt: [
      "Certa! Basta inverter as duas linhas, colocando 'super(nome);' na 1ª linha do construtor.",
      "Errada: para chamar o construtor da superclasse usa-se sempre a palavra 'super'.",
      "Errada: ra pode ser int normalmente.",
      "Errada: a subclasse pode adicionar quantos atributos e métodos novos quiser."
    ]
  },
  {
    id: "q5_4", mod: "m5",
    titulo: "31. Atributo private na Superclasse vs Subclasse",
    enunciado: "Na classe Mãe abaixo, 'segredo' é PRIVATE. Como a classe Filha consegue ler esse valor?",
    codigo: `public class Mae {
    private String segredo = "Cofre123";

    public String getSegredo() {
        return this.segredo;
    }
}

public class Filha extends Mae {
    public void mostrar() {
        // Como imprimir o segredo aqui dentro de Filha?
    }
}`,
    alts: [
      "Fazendo System.out.println(this.segredo); diretamente.",
      "Chamando o método público herdado: System.out.println(this.getSegredo());",
      "Uma classe filha nunca consegue acessar nada da mãe, nem por métodos.",
      "Usando a palavra new Mae.segredo."
    ],
    correta: 1,
    explicacao: "Mesmo sendo filha ('extends Mae'), um atributo 'private' da mãe continua trancado para acesso direto ('this.segredo' dá erro!). Porém, como 'getSegredo()' é 'public', a filha herda esse método e pode chamar 'getSegredo()' normalmente!",
    porAlt: [
      "Errada: como 'segredo' é private (e não protected), nem a classe filha pode acessar 'this.segredo' direto.",
      "Certa! Atributos privados da superclasse são acessados na subclasse através dos métodos getters/setters públicos ou protected.",
      "Errada: métodos públicos e protected são herdados normalmente.",
      "Errada: sintaxe inválida."
    ]
  },
  {
    id: "q5_5", mod: "m5",
    titulo: "32. Herança Múltipla de Classes em Java?",
    enunciado: "Um aluno tentou escrever: 'public class RoboCachorro extends Robo, Cachorro { }'. O que o compilador Java faz?",
    codigo: `public class RoboCachorro extends Robo, Cachorro {
    // ...
}`,
    alts: [
      "Compila normalmente e herda das duas classes.",
      "Dá ERRO DE COMPILAÇÃO, porque o Java NÃO permite herança múltipla de classes (uma classe só pode ter 1 único 'extends').",
      "Compila, mas ignora a segunda classe.",
      "Só compila se colocar ponto e vírgula no lugar da vírgula."
    ],
    correta: 1,
    explicacao: "Em Java, uma classe pode herdar de APENAS UMA superclasse ('extends UmaClasse'). Para ter múltiplos comportamentos, o Java usa Interfaces ('implements Interface1, Interface2')!",
    porAlt: [
      "Errada: Java proíbe herança múltipla entre classes para evitar o 'Problema do Diamante'.",
      "Certa! No máximo 1 'extends', mas quantos 'implements' (interfaces) quiser.",
      "Errada: gera erro sintático imediato.",
      "Errada: não é permitido de forma alguma com extends."
    ]
  },

  // ==========================================
  // MÓDULO 6: POLIMORFISMO, @OVERRIDE VS OVERLOAD
  // ==========================================
  {
    id: "q6_1", mod: "m6",
    titulo: "33. Polimorfismo Dinâmico na Prática",
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
    explicacao: "Em 'Funcionario f2 = new Diretor();', o objeto REAL criado na memória (lado direito, no 'new') é um Diretor! Portanto, ao chamar 'f2.calcularBonus()', o Java executa o método sobrescrito (@Override) da classe Diretor (retornando 500.0). Soma: 100.0 + 500.0 = 600.0!",
    porAlt: [
      "Errada: f2 é uma instância de Diretor, então usa o método sobrescrito de Diretor (500.0).",
      "Certa! 100.0 + 500.0 = 600.0.",
      "Errada: f1 é apenas um Funcionario comum (100.0).",
      "Errada: uma variável do tipo da Superclasse pode referenciar qualquer objeto de suas Subclasses."
    ]
  },
  {
    id: "q6_2", mod: "m6",
    titulo: "34. Sobrescrita (@Override) vs Sobrecarga (Overload)",
    enunciado: "Na prova teórica da N3, qual alternativa explica sem erro a diferença entre Sobrescrita (Override) e Sobrecarga (Overload)?",
    codigo: `// 1) @Override na classe filha: mesmo nome e mesmos parâmetros.
// 2) Overload: mesmo nome, mas parâmetros diferentes!`,
    alts: [
      "Sobrescrita muda os parâmetros na mesma classe; Sobrecarga mantém os parâmetros na classe filha.",
      "Sobrescrita (@Override) redefine na subclasse um método herdado com a MESMA assinatura; Sobrecarga (Overload) cria métodos de mesmo nome mas com PARÂMETROS DIFERENTES.",
      "Ambos só funcionam em interfaces.",
      "Não existe diferença, são sinônimos em Java."
    ],
    correta: 1,
    explicacao: "Essa cai em 9 de cada 10 provas de POO:\n• SOBRESCRITA (@Override): precisa de Herança + MESMO nome + MESMOS parâmetros.\n• SOBRECARGA (Overload): MESMO nome + PARÂMETROS DIFERENTES (quantidade ou tipos diferentes).",
    porAlt: [
      "Errada: trocou as definições.",
      "Certa! Grave essa frase para a N3.",
      "Errada: funcionam em classes normais.",
      "Errada: são mecanismos completamente distintos de polimorfismo."
    ]
  },
  {
    id: "q6_3", mod: "m6",
    titulo: "35. Usando super.metodo() dentro do @Override",
    enunciado: "O que será impresso ao executar o código abaixo?",
    codigo: `class Conta {
    public double taxa() {
        return 10.0;
    }
}

class ContaVip extends Conta {
    @Override
    public double taxa() {
        return super.taxa() + 5.0;
    }

    public static void main(String[] args) {
        ContaVip v = new ContaVip();
        System.out.println(v.taxa());
    }
}`,
    alts: [
      "10.0",
      "15.0",
      "5.0",
      "Loop infinito (StackOverflowError)"
    ],
    correta: 1,
    explicacao: "Dentro do método sobrescrito 'taxa()' de ContaVip, a chamada 'super.taxa()' executa o método original da classe mãe Conta (que retorna 10.0) e soma + 5.0 = 15.0! (Nota: se tivesse escrito 'this.taxa()' sem o 'super', aí sim chamaria a si mesmo em loop infinito!).",
    porAlt: [
      "Errada: somou 5.0 ao resultado de super.taxa().",
      "Certa! super.taxa() retorna 10.0, somado com 5.0 dá 15.0.",
      "Errada: não ignorou o super.taxa().",
      "Errada: como usou 'super.taxa()', chamou a versão da mãe e não gerou recursão infinita."
    ]
  },
  {
    id: "q6_4", mod: "m6",
    titulo: "36. Sobrescrevendo o método toString()",
    enunciado: "Para que serve sobrescrever o método '@Override public String toString()' dentro de uma classe em Java?",
    codigo: `public class Aluno {
    String nome = "Rafael";

    @Override
    public String toString() {
        return "Aluno: " + this.nome;
    }
}`,
    alts: [
      "Para converter o nome do aluno em número inteiro.",
      "Para que, ao imprimir o objeto direto no 'System.out.println(aluno)', apareça um texto legível ('Aluno: Rafael') em vez do código estranho de memória ('Aluno@1b6d3586').",
      "Para apagar todas as Strings da classe.",
      "Para criar um construtor novo."
    ],
    correta: 1,
    explicacao: "Toda classe em Java herda automaticamente da classe 'Object'. Se você não sobrescrever o método 'toString()', dar 'System.out.println(objeto)' imprime 'NomeDaClasse@ CodigoHexadecimal'. Quando você coloca '@Override public String toString()', o println passa a mostrar o texto formatado que você retornou!",
    porAlt: [
      "Errada: toString() retorna uma String, não um int.",
      "Certa! O Prof. Jacinto adora cobrar o toString() nas classes de exercício.",
      "Errada: não apaga nada.",
      "Errada: toString() é um método que retorna String, não um construtor."
    ]
  },
  {
    id: "q6_5", mod: "m6",
    titulo: "37. Array Polimórfico de Objetos",
    enunciado: "Faça o teste de mesa do laço polimórfico abaixo. O que será impresso?",
    codigo: `class Forma {
    public int lados() { return 0; }
}
class Triangulo extends Forma {
    @Override public int lados() { return 3; }
}
class Quadrado extends Forma {
    @Override public int lados() { return 4; }
}

public class Teste {
    public static void main(String[] args) {
        Forma f1 = new Triangulo();
        Forma f2 = new Quadrado();
        System.out.println(f1.lados() + f2.lados());
    }
}`,
    alts: [
      "0",
      "7",
      "3",
      "4"
    ],
    correta: 1,
    explicacao: "'f1' aponta para um 'new Triangulo()', logo 'f1.lados()' retorna 3. 'f2' aponta para um 'new Quadrado()', logo 'f2.lados()' retorna 4. A soma 3 + 4 imprime 7!",
    porAlt: [
      "Errada: o polimorfismo chama os métodos sobrescritos nas subclasses Triangulo e Quadrado.",
      "Certa! 3 (do Triangulo) + 4 (do Quadrado) = 7.",
      "Errada: somou f1.lados() com f2.lados().",
      "Errada: 3 + 4 = 7."
    ]
  },

  // ==========================================
  // MÓDULO 7: ABSTRACT, INTERFACE, STATIC, ARRAYLIST E EXCEÇÕES (N3!)
  // ==========================================
  {
    id: "q7_1", mod: "m7",
    titulo: "38. Regra de Ouro de Classes Abstratas (abstract class)",
    enunciado: "O que acontece ao tentar compilar o código abaixo?",
    codigo: `public abstract class Conta {
    protected double saldo;
    public abstract void atualizarTaxa();
}

public class Banco {
    public static void main(String[] args) {
        Conta c = new Conta(); // <--- OLHE ESTA LINHA!
    }
}`,
    alts: [
      "Cria o objeto Conta com saldo 0.0.",
      "Dá ERRO DE COMPILAÇÃO em 'new Conta()', pois classes abstratas ('abstract class') NUNCA podem ser instanciadas diretamente com 'new'!",
      "Imprime null.",
      "Funciona se tirarmos a palavra public."
    ],
    correta: 1,
    explicacao: "Uma classe marcada com 'abstract' é um molde incompleto (serve apenas como Superclasse para ser herdada por classes concretas, como 'class ContaCorrente extends Conta'). Por isso, fazer 'new Conta()' é proibido pelo compilador!",
    porAlt: [
      "Errada: classes abstratas não podem ser instanciadas diretamente.",
      "Certa! Você só pode dar 'new' nas subclasses concretas (ex: 'Conta c = new ContaCorrente();').",
      "Errada: não compila.",
      "Errada: o bloqueio vem da palavra 'abstract'."
    ]
  },
  {
    id: "q7_2", mod: "m7",
    titulo: "39. Obrigação da Subclasse ao Herdar Método Abstrato",
    enunciado: "Se a classe 'Animal' tem o método 'public abstract void emitirSom();' e a classe concreta 'Cachorro extends Animal' for criada, o que 'Cachorro' é OBRIGADO a fazer para compilar?",
    codigo: `public abstract class Animal {
    public abstract void emitirSom(); // Sem corpo {}!
}

public class Cachorro extends Animal {
    // O que é obrigatório ter aqui?
}`,
    alts: [
      "Nada, pode ficar vazia.",
      "É obrigada a sobrescrever (@Override) e implementar o corpo do método 'public void emitirSom() { ... }'.",
      "É obrigada a apagar a classe Animal.",
      "É obrigada a criar um método main."
    ],
    correta: 1,
    explicacao: "Todo método 'abstract' na classe mãe funciona como uma ordem: qualquer classe filha concreta ('Cachorro') é OBRIGADA a implementar aquele método colocando o bloco '{ ... }' com o código!",
    porAlt: [
      "Errada: se a classe concreta não implementar os métodos abstratos da mãe, ela não compila.",
      "Certa! A filha concreta deve fornecer o corpo de todos os métodos abstratos herdados.",
      "Errada: não faz sentido.",
      "Errada: método main não é obrigatório em classes de modelo."
    ]
  },
  {
    id: "q7_3", mod: "m7",
    titulo: "40. Interfaces e a Palavra 'implements'",
    enunciado: "Qual palavra-chave uma classe usa para assinar o contrato de uma Interface, e quantas interfaces uma mesma classe pode implementar em Java?",
    codigo: `public interface Tributavel {
    double calcularImposto();
}
public interface Autenticavel {
    boolean login(String senha);
}`,
    alts: [
      "Usa 'extends' e só pode implementar 1 interface.",
      "Usa 'implements' e pode implementar VÁRIAS interfaces separadas por vírgula (ex: implements Tributavel, Autenticavel).",
      "Usa 'interface' e não precisa programar os métodos.",
      "Usa 'super' no cabeçalho da classe."
    ],
    correta: 1,
    explicacao: "Diferente da herança de classes ('extends', limitada a 1), uma classe pode assinar quantos contratos de interface quiser usando 'implements Interface1, Interface2'!",
    porAlt: [
      "Errada: classe assinando interface usa 'implements', e pode várias.",
      "Certa! Ex: 'public class Gerente extends Funcionario implements Autenticavel, Tributavel'.",
      "Errada: a classe concreta é obrigada a implementar todos os métodos da interface.",
      "Errada: super é usado dentro de construtores/métodos."
    ]
  },
  {
    id: "q7_4", mod: "m7",
    titulo: "41. Tratamento de Exceções: try / catch / finally",
    enunciado: "O que será impresso no console ao executar o código abaixo (questão clássica de N3)?",
    codigo: `public class ProvaN3 {
    public static void main(String[] args) {
        try {
            System.out.print("A ");
            int x = 10 / 0; // Divisão por zero!
            System.out.print("B ");
        } catch (ArithmeticException e) {
            System.out.print("C ");
        } finally {
            System.out.print("D");
        }
    }
}`,
    alts: [
      "A B C D",
      "A C D",
      "A B D",
      "C D"
    ],
    correta: 1,
    explicacao: "Rastreamento exato:\n1) Entra no try e imprime 'A '.\n2) Na linha '10 / 0' explode ArithmeticException! O Java ABORTA o resto do bloco try (pula o 'B ') e salta direto para o 'catch', imprimindo 'C '.\n3) Por fim, o bloco 'finally' SEMPRE roda (dando erro ou não), imprimindo 'D'.\nResultado final: 'A C D'!",
    porAlt: [
      "Errada: 'B ' está depois da linha que gerou erro dentro do try, então nunca é executado.",
      "Certa! Imprime A, dá erro, entra no catch (C) e executa o finally (D).",
      "Errada: como houve divisão por zero, pula B e entra no catch (C).",
      "Errada: 'A ' estava antes do erro, então foi impresso."
    ]
  },
  {
    id: "q7_5", mod: "m7",
    titulo: "42. E quando NÃO dá erro dentro do try?",
    enunciado: "E se a divisão dentro do 'try' funcionar normalmente SEM erro? O que será impresso abaixo?",
    codigo: `public class ProvaN3 {
    public static void main(String[] args) {
        try {
            System.out.print("A ");
            int x = 10 / 2; // Funciona normal (x = 5)!
            System.out.print("B ");
        } catch (ArithmeticException e) {
            System.out.print("C ");
        } finally {
            System.out.print("D");
        }
    }
}`,
    alts: [
      "Apenas A B",
      "A B D",
      "A B C D",
      "A D"
    ],
    correta: 1,
    explicacao: "Como '10 / 2' não deu erro:\n1) O bloco 'try' roda até o fim: imprime 'A ' e depois 'B '.\n2) O bloco 'catch' é IGNORADO porque não houve exceção.\n3) O bloco 'finally' roda SEMPRE, mesmo quando tudo dá certo! Então imprime 'D'.\nResultado: 'A B D'!",
    porAlt: [
      "Errada: esqueceu que o bloco 'finally' executa sempre, inclusive quando não há erro!",
      "Certa! Roda todo o try (A B), pula o catch e roda o finally (D).",
      "Errada: o catch (C) só executa se uma exceção ocorrer no try.",
      "Errada: como não houve erro, o 'B ' também é impresso."
    ]
  },
  {
    id: "q7_6", mod: "m7",
    titulo: "43. Manipulando Lista de Objetos com ArrayList",
    enunciado: "Analise as operações na lista dinâmica ArrayList abaixo. O que será impresso?",
    codigo: `import java.util.ArrayList;

public class ListaTeste {
    public static void main(String[] args) {
        ArrayList<String> cursos = new ArrayList<>();
        cursos.add("ADS");
        cursos.add("Direito");
        cursos.add("Medicina");
        cursos.remove(1); // Remove o índice 1!
        System.out.println(cursos.size() + " - " + cursos.get(1));
    }
}`,
    alts: [
      "3 - Direito",
      "2 - Medicina",
      "2 - ADS",
      "3 - Medicina"
    ],
    correta: 1,
    explicacao: "Em Java, os índices de ArrayList começam em ZERO (0):\n• Índice 0: \"ADS\"\n• Índice 1: \"Direito\"\n• Índice 2: \"Medicina\"\nQuando fazemos 'cursos.remove(1)', removemos \"Direito\"! A lista passa a ter tamanho 2 ('cursos.size()' = 2), e \"Medicina\" escorrega para o índice 1! Portanto, 'cursos.get(1)' retorna \"Medicina\". Imprime: '2 - Medicina'!",
    porAlt: [
      "Errada: remove(1) diminuiu o tamanho para 2 e tirou Direito da lista.",
      "Certa! Ficaram 2 elementos: [0] = ADS e [1] = Medicina.",
      "Errada: ADS está no índice 0 (cursos.get(0)).",
      "Errada: após remover 1 item, cursos.size() passou de 3 para 2."
    ]
  },
  {
    id: "q7_7", mod: "m7",
    titulo: "44. Atributos e Métodos 'static' (Da Classe vs Do Objeto)",
    enunciado: "Olhe o atributo 'static int contador = 0;'. O que será impresso no final?",
    codigo: `public class Senha {
    public static int contador = 0;

    public Senha() {
        contador++;
    }

    public static void main(String[] args) {
        new Senha();
        new Senha();
        new Senha();
        System.out.println(Senha.contador);
    }
}`,
    alts: [
      "1",
      "3",
      "0",
      "Erro porque atributo static não pode ser somado"
    ],
    correta: 1,
    explicacao: "Quando um atributo tem a palavra 'static', ele NÃO pertence a um único objeto individual: ele é COMPARTILHADO pela Classe inteira! Como chamamos 'new Senha()' 3 vezes, o construtor incrementou o mesmo 'contador' compartilhado 3 vezes (1 -> 2 -> 3). Imprime 3!",
    porAlt: [
      "Errada: seria 1 se o atributo NÃO fosse static (cada objeto teria o seu próprio contador começando em 0).",
      "Certa! Atributos 'static' são únicos para toda a classe e compartilhados entre todas as instâncias.",
      "Errada: o construtor fez contador++ três vezes.",
      "Errada: variáveis static (sem final) podem ser alteradas normalmente."
    ]
  },
  {
    id: "q7_8", mod: "m7",
    titulo: "45. A Palavra-Chave 'final' em Java",
    enunciado: "Para que serve a palavra 'final' em 'public final double PI = 3.14;'?",
    codigo: `public class Matematica {
    public final double PI = 3.1415;
}`,
    alts: [
      "Indica que é a última linha da classe.",
      "Transforma a variável em uma CONSTANTE (seu valor não pode mais ser alterado depois de atribuído).",
      "Apaga a variável após o uso.",
      "Permite dividir por zero."
    ],
    correta: 1,
    explicacao: "A palavra 'final' em Java trava o elemento:\n• Em uma variável/atributo ('final double PI = 3.14;'): vira uma CONSTANTE (tentar mudar depois dá erro de compilação!).\n• Em um método ('public final void pagar()'): proíbe as classes filhas de sobrescreverem (@Override) esse método.\n• Em uma classe ('public final class String'): proíbe qualquer classe de herdar ('extends') dela!",
    porAlt: [
      "Errada: a posição na classe não importa.",
      "Certa! 'final' em atributo cria uma constante imutável.",
      "Errada: quem limpa memória é o Garbage Collector.",
      "Errada: divisão inteira por zero sempre lança ArithmeticException."
    ]
  },
  {
    id: "q7_9", mod: "m7",
    titulo: "46. Associação e Composição (Objeto dentro de Objeto)",
    enunciado: "Uma classe pode ter como atributo um OBJETO de outra classe! O que será impresso abaixo?",
    codigo: `class Endereco {
    String cidade = "Sao Caetano do Sul";
}

class Faculdade {
    String sigla = "USCS";
    Endereco local = new Endereco();
}

public class Main {
    public static void main(String[] args) {
        Faculdade f = new Faculdade();
        System.out.println(f.sigla + " - " + f.local.cidade);
    }
}`,
    alts: [
      "USCS - null",
      "USCS - Sao Caetano do Sul",
      "Erro porque uma classe não pode usar outra classe como atributo.",
      "Endereco - USCS"
    ],
    correta: 1,
    explicacao: "Isso se chama Associação/Composição ('Faculdade TEM UM Endereco')! Para acessar a cidade dentro do endereço da faculdade, navegamos com ponto: 'f.local.cidade', que imprime 'USCS - Sao Caetano do Sul'!",
    porAlt: [
      "Errada: o atributo 'local' já foi instanciado com 'new Endereco()' e cidade vale 'Sao Caetano do Sul'.",
      "Certa! Navegação entre objetos compostos usando ponto (f.local.cidade).",
      "Errada: objetos compostos são a base da Orientação a Objetos.",
      "Errada: f.sigla é 'USCS'."
    ]
  },
  {
    id: "q7_10", mod: "m7",
    titulo: "47. Diferença entre throw e throws em Exceções",
    enunciado: "Em tratamento de exceções na N3, qual a diferença entre 'throw' (no singular) e 'throws' (com S no final)?",
    codigo: `public void sacar(double v) throws Exception {
    if (v <= 0) {
        throw new Exception("Valor inválido!");
    }
}`,
    alts: [
      "Não há diferença, pode usar qualquer um.",
      "'throw new ...' é usado DENTRO do método para disparar/lançar um erro na hora; 'throws' vai na ASSINATURA do método para avisar que aquele método pode repassar uma exceção para quem o chamou.",
      "'throws' captura o erro como o catch.",
      "'throw' encerra o computador."
    ],
    correta: 1,
    explicacao: "Olhe o código do enunciado:\n• Na assinatura ('sacar(...) throws Exception'): 'throws' com S avisa quem chamar o método que ele pode lançar aquela exceção.\n• Dentro do if ('throw new Exception(...)') sem S: efetivamente cria e dispara a bomba (exceção) naquele instante!",
    porAlt: [
      "Errada: trocar um pelo outro gera erro de compilação imediato.",
      "Certa! 'throw' dispara a exceção dentro do corpo; 'throws' declara na assinatura do método.",
      "Errada: quem captura é o bloco 'catch'.",
      "Errada: apenas lança um objeto de exceção na JVM."
    ]
  },
  {
    id: "q7_11", mod: "m7",
    titulo: "48. Operador instanceof no Polimorfismo",
    enunciado: "Para que serve o operador 'instanceof' no código abaixo?",
    codigo: `Animal a = new Cachorro();
if (a instanceof Cachorro) {
    System.out.println("É um cachorro!");
}`,
    alts: [
      "Para transformar um Gato em Cachorro.",
      "Para testar em tempo de execução se o objeto apontado pela variável 'a' é realmente uma instância da classe 'Cachorro' (retornando true ou false).",
      "Para criar um novo Cachorro na memória.",
      "Para apagar a herança."
    ],
    correta: 1,
    explicacao: "Quando recebemos uma referência genérica ('Animal a'), o operador 'a instanceof Cachorro' verifica se o objeto real na memória é um Cachorro (devolvendo true) antes de fazermos uma conversão (casting)!",
    porAlt: [
      "Errada: instanceof apenas verifica e retorna boolean.",
      "Certa! Muito usado junto com polimorfismo para checar o tipo real do objeto.",
      "Errada: quem cria instância é o 'new'.",
      "Errada: não altera a estrutura da classe."
    ]
  },
  {
    id: "q7_12", mod: "m1",
    titulo: "49. Quantos Objetos Foram Criados na Memória?",
    enunciado: "Conte com atenção: quantos objetos da classe Produto foram realmente instanciados (construídos no Heap) pelo código abaixo?",
    codigo: `Produto p1 = new Produto();
Produto p2 = new Produto();
Produto p3 = p1;
Produto p4 = null;`,
    alts: [
      "4 objetos",
      "2 objetos",
      "3 objetos",
      "1 objeto"
    ],
    correta: 1,
    explicacao: "Dica matadora para a prova: conte quantas vezes a palavra 'new' foi executada! Existem 4 variáveis (p1, p2, p3, p4), mas apenas DOIS comandos 'new Produto()'! 'p3' aponta para o mesmo objeto de 'p1', e 'p4' não aponta para ninguém (null). Logo, existem apenas 2 objetos na memória!",
    porAlt: [
      "Errada: 4 é o número de variáveis declaradas na Stack, não de objetos no Heap.",
      "Certa! Apenas 2 chamadas 'new Produto()' foram feitas.",
      "Errada: 'p3 = p1' não cria um novo objeto, apenas copia o endereço de p1.",
      "Errada: p1 e p2 criaram objetos independentes."
    ]
  },
  {
    id: "q7_13", mod: "m2",
    titulo: "50. Passagem de Parâmetros Primitivos por Valor",
    enunciado: "O que será impresso por este código?",
    codigo: `public class TesteValor {
    public static void zerar(int numero) {
        numero = 0;
    }

    public static void main(String[] args) {
        int x = 50;
        zerar(x);
        System.out.println(x);
    }
}`,
    alts: [
      "0",
      "50",
      "null",
      "Erro de compilação"
    ],
    correta: 1,
    explicacao: "Em Java, tipos primitivos (int, double, boolean) são passados POR VALOR (vai uma cópia do número 50 para o parâmetro 'numero'). Quando o método 'zerar' faz 'numero = 0', ele zera apenas a cópia local dele! A variável 'x' lá no main continua intacta valendo 50!",
    porAlt: [
      "Errada: 'numero' é apenas uma cópia local do valor de 'x'.",
      "Certa! Variáveis primitivas no main não são alteradas quando passadas como parâmetro para outro método.",
      "Errada: int nunca é null.",
      "Errada: compila perfeitamente."
    ]
  },
  {
    id: "q7_14", mod: "m2",
    titulo: "51. Passagem de Objeto como Parâmetro (Referência!)",
    enunciado: "AGORA COMPARE COM A QUESTÃO ANTERIOR: e quando passamos um OBJETO para um método alterar seu atributo? O que imprime abaixo?",
    codigo: `public class Caixa {
    int saldo = 50;
}

public class TesteObj {
    public static void zerarCaixa(Caixa c) {
        c.saldo = 0;
    }

    public static void main(String[] args) {
        Caixa minhaCaixa = new Caixa();
        zerarCaixa(minhaCaixa);
        System.out.println(minhaCaixa.saldo);
    }
}`,
    alts: [
      "50",
      "0",
      "100",
      "Erro de compilação"
    ],
    correta: 1,
    explicacao: "Quando passamos um OBJETO ('minhaCaixa') para o método, o parâmetro 'c' recebe a flecha que aponta para o MESMO objeto na memória Heap! Por isso, fazer 'c.saldo = 0' altera o atributo lá dentro do objeto real, e 'minhaCaixa.saldo' passa a valer 0!",
    porAlt: [
      "Errada: diferente de int primitivo, 'c' aponta para o mesmo objeto 'minhaCaixa' no Heap!",
      "Certa! Alterar um atributo através da referência recebida no parâmetro altera o objeto original.",
      "Errada: o método atribuiu 0.",
      "Errada: código 100% válido."
    ]
  },
  {
    id: "q7_15", mod: "m3",
    titulo: "52. Quantas vezes o Construtor é executado?",
    enunciado: "Analise o código abaixo. Qual será o texto impresso no console?",
    codigo: `public class Aviso {
    public Aviso() {
        System.out.print("Nasceu! ");
    }

    public static void main(String[] args) {
        Aviso a1 = new Aviso();
        Aviso a2 = new Aviso();
        Aviso a3 = a1;
    }
}`,
    alts: [
      "Nasceu! ",
      "Nasceu! Nasceu! ",
      "Nasceu! Nasceu! Nasceu! ",
      "Não imprime nada porque ninguém chamou um método."
    ],
    correta: 1,
    explicacao: "O construtor roda automaticamente toda vez que usamos o operador 'new'! Como fizemos 'new Aviso()' DUAS vezes (em a1 e em a2), o construtor rodou 2 vezes e imprimiu 'Nasceu! Nasceu! '. Na linha 'Aviso a3 = a1;' não há 'new', então o construtor não roda!",
    porAlt: [
      "Errada: foram feitos dois 'new Aviso()'.",
      "Certa! Cada 'new' aciona o construtor uma vez.",
      "Errada: 'a3 = a1' não tem 'new', portanto não chama o construtor.",
      "Errada: o construtor é chamado automaticamente pelo 'new'."
    ]
  },
  {
    id: "q7_16", mod: "m4",
    titulo: "53. Encapsulamento de boolean: isAtivo()",
    enunciado: "Para atributos do tipo 'private boolean ativo;', qual é a convenção oficial do Java para o nome do método Getter?",
    codigo: `public class Conta {
    private boolean ativo;
    // Qual é o Getter padrão para boolean?
}`,
    alts: [
      "public void setAtivo()",
      "public boolean isAtivo() (ou getAtivo())",
      "public int booleanAtivo()",
      "private boolean isAtivo()"
    ],
    correta: 1,
    explicacao: "Em Java, para variáveis booleanas ('ativo', 'ligado', 'aprovado'), o Getter padrão costuma usar o prefixo 'is' ('public boolean isAtivo() { return this.ativo; }') ou 'getAtivo()'.",
    porAlt: [
      "Errada: setAtivo é o Setter.",
      "Certa! O prefixo 'is' é a convenção clássica do Java para Getters booleanos.",
      "Errada: o tipo de retorno deve ser boolean.",
      "Errada: o Getter precisa ser public."
    ]
  },
  {
    id: "q7_17", mod: "m5",
    titulo: "54. Relação 'É UM' (Herança) vs 'TEM UM' (Composição)",
    enunciado: "Na modelagem Orientada a Objetos, como decidimos quando usar Herança ('extends') e quando usar Associação/Composição (atributo)?",
    codigo: `// Caso 1: Cachorro ______ Animal
// Caso 2: Carro ______ Motor`,
    alts: [
      "Cachorro TEM UM Animal; Carro É UM Motor.",
      "Cachorro É UM Animal (Herança -> extends); Carro TEM UM Motor (Composição -> atributo 'private Motor motor;').",
      "Nos dois casos usamos extends.",
      "Nos dois casos usamos interface."
    ],
    correta: 1,
    explicacao: "Teste da frase em português:\n• 'Cachorro É UM Animal?' SIM! Então é Herança ('class Cachorro extends Animal').\n• 'Carro É UM Motor?' NÃO, Carro TEM UM Motor! Então Motor é um atributo dentro da classe Carro ('private Motor motor;')!",
    porAlt: [
      "Errada: inverteu as relações.",
      "Certa! 'É UM' = Herança (extends); 'TEM UM' = Composição/Agregação (atributo).",
      "Errada: Carro extends Motor estaria conceitualmente errado.",
      "Errada: nem Animal nem Motor são contratos puros."
    ]
  },
  {
    id: "q7_18", mod: "m5",
    titulo: "55. Toda Classe em Java Herda de Quem?",
    enunciado: "Quando criamos 'public class Cliente { }' sem escrever 'extends', de qual classe nativa do Java ela herda automaticamente?",
    codigo: `public class Cliente {
    // Mesmo sem escrever 'extends', ela é filha de quem?
}`,
    alts: [
      "De nenhuma classe.",
      "Da classe 'Object' (java.lang.Object), que é a raiz de todas as classes do Java.",
      "Da classe 'Main'.",
      "Da classe 'System'."
    ],
    correta: 1,
    explicacao: "Em Java, TODA classe herda direta ou indiretamente da superclasse universal 'Object'! É por isso que todo objeto em Java já nasce tendo métodos como '.toString()' e '.equals()'!",
    porAlt: [
      "Errada: toda classe sem extends explícito recebe 'extends Object' implicitamente.",
      "Certa! 'Object' é a mãe de todas as classes em Java.",
      "Errada: Main é apenas um nome comum criado pelo programador.",
      "Errada: System é uma classe utilitária final."
    ]
  },
  {
    id: "q7_19", mod: "m6",
    titulo: "56. Identificando Sobrecarga (Overload) Inválida",
    enunciado: "Por que os dois métodos abaixo na MESMA classe dão ERRO DE COMPILAÇÃO?",
    codigo: `public class Calculadora {
    public int calcular(int x) {
        return x * 2;
    }

    public double calcular(int x) {
        return x * 2.5;
    }
}`,
    alts: [
      "Porque na Sobrecarga (Overload) é OBRIGATÓRIO mudar os PARÂMETROS; mudar apenas o tipo de retorno (de int para double) mantendo '(int x)' igual dá erro!",
      "Porque não pode usar double em método.",
      "Porque o nome calcular é proibido.",
      "Não dá erro, compila normalmente."
    ],
    correta: 0,
    explicacao: "Se alguém chamar 'calc.calcular(10)', como o Java saberia qual dos dois chamar se ambos recebem '(int x)'?! Por isso, para fazer Sobrecarga (Overload), você é OBRIGADO a mudar a lista de parâmetros (ex: '(int x)' e '(double x)' ou '(int x, int y)'). Mudar só o retorno não vale!",
    porAlt: [
      "Certa! Pegadinha clássica de sobrecarga: os parâmetros precisam ser diferentes!",
      "Errada: double é permitido normalmente.",
      "Errada: calcular é um identificador válido.",
      "Errada: o compilador acusa 'method calcular(int) is already defined'."
    ]
  },
  {
    id: "q7_20", mod: "m7",
    titulo: "57. Percorrendo ArrayList com for-each",
    enunciado: "Qual será o resultado impresso pelo laço 'for (int n : numeros)' abaixo?",
    codigo: `import java.util.ArrayList;

public class SomaLista {
    public static void main(String[] args) {
        ArrayList<Integer> numeros = new ArrayList<>();
        numeros.add(10);
        numeros.add(20);
        numeros.add(30);

        int total = 0;
        for (int n : numeros) {
            total += n;
        }
        System.out.println(total);
    }
}`,
    alts: [
      "3",
      "60",
      "30",
      "102030"
    ],
    correta: 1,
    explicacao: "O laço 'for (int n : numeros)' (chamado for-each) passa por cada número guardado no ArrayList (10, depois 20, depois 30) e soma na variável 'total' ('total += n' é o mesmo que 'total = total + n'). Resultado: 10 + 20 + 30 = 60!",
    porAlt: [
      "Errada: 3 seria numeros.size().",
      "Certa! Soma todos os elementos da lista: 10 + 20 + 30 = 60.",
      "Errada: acumulou os três valores.",
      "Errada: são inteiros (Integer), então '+' soma matematicamente."
    ]
  },
  {
    id: "q7_21", mod: "m7",
    titulo: "58. Exceção de Índice Fora do Limite (IndexOutOfBounds)",
    enunciado: "Se uma lista tem 2 elementos (índices 0 e 1) e tentarmos acessar 'lista.get(5)', o que acontece?",
    codigo: `ArrayList<String> nomes = new ArrayList<>();
nomes.add("Ana");   // índice 0
nomes.add("Bruno"); // índice 1
System.out.println(nomes.get(5)); // <-- O que acontece aqui?`,
    alts: [
      "Imprime null sem dar erro.",
      "Lança uma exceção em tempo de execução (IndexOutOfBoundsException), pois o índice 5 não existe na lista!",
      "Cria automaticamente 4 posições vazias.",
      "Imprime 'Bruno'."
    ],
    correta: 1,
    explicacao: "Tentar acessar uma posição negativa ou maior/igual ao tamanho da lista ('size()') dispara imediatamente a exceção IndexOutOfBoundsException!",
    porAlt: [
      "Errada: em Java, acessar índice inexistente não retorna null, lança exceção.",
      "Certa! Os únicos índices válidos nessa lista são 0 e 1.",
      "Errada: o método get() apenas lê, não expande a lista.",
      "Errada: Bruno está no índice 1."
    ]
  },
  {
    id: "q7_22", mod: "m7",
    titulo: "59. Método Estático: Math.max e Chamada Direta pela Classe",
    enunciado: "Por que conseguimos chamar 'Calculo.dobrar(10)' direto pelo nome da Classe, SEM precisar fazer 'new Calculo()'?",
    codigo: `public class Calculo {
    public static int dobrar(int v) {
        return v * 2;
    }

    public static void main(String[] args) {
        System.out.println(Calculo.dobrar(10));
    }
}`,
    alts: [
      "Porque todo método que retorna int não precisa de new.",
      "Porque o método foi declarado com a palavra-chave 'static', pertencendo diretamente à Classe Calculo!",
      "Porque a classe não tem atributos.",
      "Isso dá erro de compilação; sempre precisa de new."
    ],
    correta: 1,
    explicacao: "Métodos marcados como 'static' pertencem à própria Classe e podem ser chamados diretamente usando 'NomeDaClasse.nomeDoMetodo()', sem precisar instanciar objeto com 'new'!",
    porAlt: [
      "Errada: o que dispensa o 'new' é o modificador 'static', não o tipo de retorno.",
      "Certa! É assim que funciona o próprio 'public static void main' e 'Math.sqrt()'.",
      "Errada: mesmo sem atributos, métodos sem static exigiriam 'new'.",
      "Errada: compila e imprime 20."
    ]
  },
  {
    id: "q7_23", mod: "m7",
    titulo: "60. Revisão Geral N3: Juntando Todos os Pilares!",
    enunciado: "Questão Desafio N3: Analise o código completo abaixo que uneClasse Abstrata, Herança, Construtor com super, Encapsulamento e Polimorfismo. O que será impresso?",
    codigo: `abstract class Pagamento {
    protected double valor;
    public Pagamento(double valor) {
        this.valor = valor;
    }
    public abstract double calcularTotal();
}

class Pix extends Pagamento {
    public Pix(double valor) {
        super(valor);
    }
    @Override
    public double calcularTotal() {
        return this.valor * 0.90; // 10% de desconto!
    }
}

public class Loja {
    public static void main(String[] args) {
        Pagamento p = new Pix(200.0);
        System.out.println(p.calcularTotal());
    }
}`,
    alts: [
      "200.0",
      "180.0",
      "Erro porque Pagamento é abstract e apareceu em 'Pagamento p = ...'",
      "0.0"
    ],
    correta: 1,
    explicacao: "Fechando com chave de ouro!\n1) 'Pagamento p = new Pix(200.0);' é 100% válido! Não podemos dar 'new Pagamento()', mas podemos usar 'Pagamento' como tipo da variável apontando para 'new Pix(200.0)' (Polimorfismo!).\n2) O construtor de Pix chama 'super(200.0)', guardando 200.0 em 'this.valor'.\n3) 'p.calcularTotal()' executa o método '@Override' de Pix: 200.0 * 0.90 = 180.0!",
    porAlt: [
      "Errada: o método sobrescrito em Pix aplica * 0.90 (desconto de 10%).",
      "Certa! Se você entendeu essa questão, você está pronto para tirar 10 na N3 do Prof. Jacinto!",
      "Errada: o que é proibido em classe abstrata é usar no 'new' (lado direito); usar como tipo da variável (lado esquerdo) é polimorfismo puro!",
      "Errada: 'super(valor)' inicializou this.valor com 200.0."
    ]
  }
];

