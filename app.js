(function(){
  const STORAGE_KEY = "missao-java-poo-v1";

  function carregarEstado() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch(e) {}
    return {
      aba: "hoje",
      modulosFeitos: {},
      acertos: {},
      erros: {},
      pdfsLidos: [],
      questoesExtras: [],
      moduloAulaAtual: "m0",
      praticaAulaResp: {},
      filtroTreino: "todos",
      indiceQuestao: 0,
      respostaSelecionada: null,
      cardVirado: {},
      passoMemoria: 0
    };
  }

  let estado = carregarEstado();
  if (!estado.praticaAulaResp) estado.praticaAulaResp = {};

  function salvarEstado() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    } catch(e) {}
  }

  function todasQuestoes() {
    return (window.QUESTOES_JAVA || []).concat(estado.questoesExtras || []);
  }

  function esc(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function toast(msg) {
    const antigo = document.querySelector(".toast");
    if (antigo) antigo.remove();
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2800);
  }

  function soltarConfete() {
    const c = document.getElementById("confete");
    if (!c) return;
    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    const pecas = Array.from({length: 45}, () => ({
      x: Math.random() * c.width,
      y: -10,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 4 + 3,
      cor: ["#bf2b26","#e0a02c","#4c6b3c","#2f5d70"][Math.floor(Math.random()*4)],
      tam: Math.random() * 7 + 5
    }));
    let quadros = 0;
    function animar() {
      ctx.clearRect(0, 0, c.width, c.height);
      pecas.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        ctx.fillStyle = p.cor;
        ctx.fillRect(p.x, p.y, p.tam, p.tam);
      });
      if (++quadros < 65) requestAnimationFrame(animar);
      else ctx.clearRect(0, 0, c.width, c.height);
    }
    animar();
  }

  function renderTopo() {
    const totalAcertos = Object.keys(estado.acertos).length;
    const totalErros = Object.keys(estado.erros).filter(k => estado.erros[k]).length;

    return `
      <header class="topo">
        <div class="retrato" title="Java POO">☕</div>
        <div class="topo-txt">
          <div class="eyebrow">USCS • RUMO AO 10 NA N3</div>
          <h1>Missão <em>Java POO</em></h1>
        </div>
        <div style="text-align:right">
          <span class="chip" style="color:var(--verde)">✓ ${totalAcertos} acertos</span>
          ${totalErros > 0 ? `<span class="chip" style="color:var(--vermelho)">✗ ${totalErros} p/ revisar</span>` : ""}
        </div>
      </header>
    `;
  }

  function renderSimuladorMemoria() {
    const passos = [
      {
        cmd: "Estado inicial (Antes do new)",
        explicacao: "Nenhuma variável criada ainda. Clique nos botões abaixo para ver o que o Java faz na memória RAM passo a passo!",
        stack: ["(vazio)"],
        heap: ["(vazio)"]
      },
      {
        cmd: '1º Passo: Aluno a1 = new Aluno("Rafael", 8.5);',
        explicacao: "A variável 'a1' nasce na STACK guardando uma flecha (@endereço #101). O comando 'new Aluno(...)' constrói o OBJETO de verdade lá no HEAP com nome='Rafael' e nota=8.5!",
        stack: ['a1 ──► aponta p/ #101'],
        heap: ['[#101 Objeto Aluno]\n  nome: "Rafael"\n  nota: 8.5']
      },
      {
        cmd: '2º Passo: Aluno a2 = new Aluno("Lívia", 9.8);',
        explicacao: "Outro 'new Aluno(...)'! Nasce um SEGUNDO objeto totalmente independente no HEAP (#202). Alterar a1 não afeta a2!",
        stack: ['a1 ──► aponta p/ #101', 'a2 ──► aponta p/ #202'],
        heap: ['[#101 Objeto Aluno]\n  nome: "Rafael"\n  nota: 8.5', '[#202 Objeto Aluno]\n  nome: "Lívia"\n  nota: 9.8']
      },
      {
        cmd: '3º Passo: a1.setNota(10.0);',
        explicacao: "O método 'setNota(10.0)' segue a flecha de 'a1' (#101) e muda o atributo 'nota' lá dentro do objeto #101 para 10.0!",
        stack: ['a1 ──► aponta p/ #101', 'a2 ──► aponta p/ #202'],
        heap: ['[#101 Objeto Aluno]\n  nome: "Rafael"\n  nota: 10.0  (MUDOU!)', '[#202 Objeto Aluno]\n  nome: "Lívia"\n  nota: 9.8']
      }
    ];
    const p = passos[estado.passoMemoria || 0];
    return `
      <section class="card">
        <div class="eyebrow">SIMULADOR VISUAL • ENTENDA O "NEW"</div>
        <h3>O que acontece na Memória do Java?</h3>
        <p class="small muted">Clique nos passos para enxergar a diferença entre a variável (Stack) e o Objeto criado com <b>new</b> (Heap):</p>
        <div class="abas-area">
          ${passos.map((item, idx) => `
            <button class="opcao" aria-pressed="${(estado.passoMemoria||0)===idx}" data-mem-step="${idx}">
              Passo ${idx}
            </button>
          `).join("")}
        </div>
        <div class="code-java">${esc(p.cmd)}</div>
        <p style="font-weight:700;color:var(--azul)">💡 ${esc(p.explicacao)}</p>
        <div class="mem-grid">
          <div class="mem-col">
            <h4>📌 Memória STACK (Variáveis)</h4>
            ${p.stack.map(s => `<div class="mem-item">${esc(s)}</div>`).join("")}
          </div>
          <div class="mem-col">
            <h4>🏠 Memória HEAP (Objetos criados com new)</h4>
            ${p.heap.map(h => `<div class="mem-item" style="white-space:pre-line">${esc(h)}</div>`).join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderHoje() {
    const totalMod = window.MODULOS_POO.length;
    const feitosMod = Object.keys(estado.modulosFeitos).filter(k => estado.modulosFeitos[k]).length;
    const pct = Math.round((feitosMod / totalMod) * 100);

    return `
      ${renderTopo()}

      <section class="card">
        <div class="eyebrow">MÉTODO LER ➔ PRATICAR ➔ ENTENDER</div>
        <h2>Plano Completo para Amassar na N3 (${pct}%)</h2>
        <p class="muted">Mesmo começando do <b>zero absoluto</b> em Java: comece pelo <b>Módulo 0</b> abaixo. Em cada aula você <b>1) Lê a analogia simples</b>, <b>2) Completa o código na tela</b> e <b>3) Resolve questões de prova</b>!</p>
        <div class="linha-btns">
          <button class="btn" data-abrir-aula="m0">🚀 Começar do Zero (Módulo 0)</button>
          <button class="btn ghost" data-ir-treino="todos">⚡ Simulado N3 (${todasQuestoes().length} questões)</button>
        </div>
      </section>

      ${renderSimuladorMemoria()}

      <section class="card">
        <div class="eyebrow">CRONOGRAMA DO ZERO ATÉ A N3 (PROF. JACINTO)</div>
        <h3>Trilha de Estudo Guiada</h3>
        <ul class="tarefas">
          ${window.MODULOS_POO.map(m => {
            const feito = !!estado.modulosFeitos[m.id];
            const qtdQ = todasQuestoes().filter(q => q.mod === m.id).length;
            return `
              <li class="tarefa ${feito ? 'feita' : ''}">
                <button class="check" data-toggle-mod="${m.id}" title="Marcar módulo como estudado">
                  ${feito ? "✓" : ""}
                </button>
                <div>
                  <span class="chip" style="color:${m.cor}">${esc(m.tag)}</span>
                  <div class="t-tit">${esc(m.titulo)}</div>
                  <div class="t-det">${esc(m.resumoCurto)}</div>
                  <div class="t-acoes">
                    <button class="btn mini azul" data-abrir-aula="${m.id}">1. Ler &amp; Praticar</button>
                    <button class="btn mini ghost" data-ir-treino="${m.id}">2. Questões (${qtdQ})</button>
                  </div>
                </div>
              </li>
            `;
          }).join("")}
        </ul>
      </section>
    `;
  }

  function renderAulas() {
    const modAtual = window.MODULOS_POO.find(m => m.id === estado.moduloAulaAtual) || window.MODULOS_POO[0];
    const feito = !!estado.modulosFeitos[modAtual.id];
    const dp = modAtual.desafioPratico;
    const respPratica = estado.praticaAulaResp[modAtual.id];
    const jaPraticou = respPratica !== undefined && respPratica !== null;

    return `
      ${renderTopo()}

      <div class="abas-area" role="tablist">
        ${window.MODULOS_POO.map(m => `
          <button class="opcao" aria-pressed="${m.id === modAtual.id}" data-sel-aula="${m.id}">
            Mód ${m.ordem}: ${esc(m.titulo.split("(")[0].split(":")[0].trim())}
          </button>
        `).join("")}
      </div>

      <article class="card">
        <span class="chip" style="color:${modAtual.cor}">${esc(modAtual.tag)}</span>
        <h2>${esc(modAtual.titulo)}</h2>

        <div class="card flat" style="background:var(--papel-3);border-color:var(--sol);margin-top:12px">
          <div class="eyebrow" style="color:var(--vermelho)">PASSO 1 • LER A ANALOGIA (SEM ENROLAÇÃO)</div>
          <p style="font-size:16.5px;font-weight:600;margin-top:6px;margin-bottom:0">${esc(modAtual.analogia)}</p>
        </div>

        <h3>📌 Regras de Ouro para a N3:</h3>
        <ul>
          ${modAtual.explicacao.map(item => `<li style="margin-bottom:8px">${esc(item)}</li>`).join("")}
        </ul>

        <h3>💻 Código Java Comentado (Linha por Linha):</h3>
        <div class="code-java">${esc(modAtual.codigo)}</div>

        ${dp ? `
          <div class="card flat" style="background:var(--papel-3);border-color:var(--azul);margin:16px 0">
            <div class="eyebrow" style="color:var(--azul)">PASSO 2 • PRATICAR O CÓDIGO AGORA (TOQUE PARA COMPLETAR)</div>
            <p style="font-weight:700;margin:6px 0">${esc(dp.instrucao)}</p>
            <div class="code-java">${esc(dp.lacunaCodigo)}</div>
            <div class="alts">
              ${dp.opcoes.map((op, idx) => {
                let cls = "alt";
                if (jaPraticou) {
                  if (idx === dp.correta) cls += " certa";
                  else if (idx === respPratica) cls += " errada-alt";
                  else cls += " apagada";
                }
                return `
                  <button class="${cls}" data-pratica-mod="${modAtual.id}" data-pratica-idx="${idx}">
                    <span class="letra">${idx + 1}</span>
                    <span class="mono" style="font-weight:700">${esc(op)}</span>
                  </button>
                `;
              }).join("")}
            </div>
            ${jaPraticou ? `
              <div class="feedback ${respPratica === dp.correta ? 'ok' : 'nao'}" style="margin-top:10px">
                <b>${respPratica === dp.correta ? "✅ Isso mesmo! Você completou o código Java!" : "💡 Olha como fica o código certo:"}</b>
                <p>${esc(dp.explicacaoPratica)}</p>
              </div>
            ` : ""}
          </div>
        ` : ""}

        <div class="card flat" style="background:color-mix(in srgb,var(--vermelho) 10%,var(--papel-3));border-color:var(--vermelho)">
          <div class="eyebrow" style="color:var(--vermelho)">⚠️ PEGADINHAS DE PROVA DO PROF. JACINTO</div>
          <ul style="margin:8px 0 0;padding-left:20px">
            ${modAtual.pegadinhas.map(p => `<li style="margin-bottom:6px;font-weight:700">${esc(p)}</li>`).join("")}
          </ul>
        </div>

        <h3>🎬 Vídeo-Aulas Recomendadas:</h3>
        <div class="linha-btns">
          ${modAtual.videos.map(v => `
            <a class="btn ghost mini" href="${esc(v.url)}" target="_blank" rel="noopener">▶️ ${esc(v.titulo)}</a>
          `).join("")}
        </div>

        <div class="serrilha"></div>

        <div class="linha-btns">
          <button class="btn verde" data-toggle-mod="${modAtual.id}">
            ${feito ? "✓ Módulo Concluído (Desmarcar)" : "✓ Marcar Módulo como Estudado"}
          </button>
          <button class="btn" data-ir-treino="${modAtual.id}">
            ⚡ Passo 3: Resolver Questões deste Módulo
          </button>
        </div>
      </article>
    `;
  }

  function renderTreino() {
    const todas = todasQuestoes();
    const filtradas = estado.filtroTreino === "todos"
      ? todas
      : todas.filter(q => q.mod === estado.filtroTreino);

    if (estado.indiceQuestao >= filtradas.length) {
      estado.indiceQuestao = 0;
    }
    const q = filtradas[estado.indiceQuestao];

    return `
      ${renderTopo()}

      <div class="abas-area">
        <button class="opcao" aria-pressed="${estado.filtroTreino === 'todos'}" data-filtro-q="todos">
          Todas (${todas.length})
        </button>
        ${window.MODULOS_POO.map(m => {
          const count = todas.filter(x => x.mod === m.id).length;
          return `
            <button class="opcao" aria-pressed="${estado.filtroTreino === m.id}" data-filtro-q="${m.id}">
              Mód ${m.ordem} (${count})
            </button>
          `;
        }).join("")}
        ${estado.questoesExtras.length > 0 ? `
          <button class="opcao" aria-pressed="${estado.filtroTreino === 'pdf'}" data-filtro-q="pdf">
            📄 Dos PDFs (${estado.questoesExtras.length})
          </button>
        ` : ""}
      </div>

      ${!q ? `
        <div class="card">
          <h3>Nenhuma questão neste filtro ainda.</h3>
        </div>
      ` : renderCardQuestao(q, estado.indiceQuestao, filtradas.length)}
    `;
  }

  function renderCardQuestao(q, idx, total) {
    const modInfo = window.MODULOS_POO.find(m => m.id === q.mod);
    const jaRespondeu = estado.respostaSelecionada !== null;
    const acertou = estado.respostaSelecionada === q.correta;
    const letras = ["A", "B", "C", "D"];

    return `
      <section class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
          <span class="chip" style="color:${modInfo ? modInfo.cor : 'var(--azul)'}">
            ${modInfo ? esc(modInfo.tag) : "PDF DO JACINTO"}
          </span>
          <span class="mono small">Questão ${idx + 1} de ${total}</span>
        </div>

        <h3>${esc(q.titulo)}</h3>
        <div class="pergunta">${esc(q.enunciado)}</div>

        ${q.codigo ? `<div class="code-java">${esc(q.codigo)}</div>` : ""}

        <div class="alts">
          ${q.alts.map((textoAlt, i) => {
            let cls = "alt";
            if (jaRespondeu) {
              if (i === q.correta) cls += " certa";
              else if (i === estado.respostaSelecionada) cls += " errada-alt";
              else cls += " apagada";
            }
            return `
              <button class="${cls}" data-resp-q="${i}" ${jaRespondeu ? "disabled" : ""}>
                <span class="letra">${letras[i]}</span>
                <span>${esc(textoAlt)}</span>
              </button>
            `;
          }).join("")}
        </div>

        ${jaRespondeu ? `
          <div class="feedback ${acertou ? 'ok' : 'nao'}">
            <b>${acertou ? "🎉 Na mosca! Você acertou!" : "❌ Quase! Olha a explicação mastigada:"}</b>
            <p style="font-weight:700">${esc(q.explicacao)}</p>
            ${q.porAlt ? `
              <div style="margin-top:10px">
                ${q.porAlt.map((exp, i) => `
                  <div class="errada"><b>${letras[i]})</b> ${esc(exp)}</div>
                `).join("")}
              </div>
            ` : ""}
            <div class="linha-btns">
              <button class="btn" data-prox-q="1">Próxima Questão ➔</button>
              ${modInfo ? `<button class="btn ghost mini" data-abrir-aula="${modInfo.id}">📖 Rever Aula do Módulo ${modInfo.ordem}</button>` : ""}
            </div>
          </div>
        ` : `
          <div class="linha-btns" style="margin-top:14px">
            <button class="btn ghost mini" data-ant-q="1">⬅ Anterior</button>
            <button class="btn ghost mini" data-prox-q="1">Pular ➔</button>
          </div>
        `}
      </section>
    `;
  }

  function renderErros() {
    const idsErros = Object.keys(estado.erros).filter(k => estado.erros[k]);
    const qsErros = todasQuestoes().filter(q => idsErros.includes(q.id));

    return `
      ${renderTopo()}

      <section class="card">
        <div class="eyebrow">CADERNO DE ERROS AUTOMÁTICO</div>
        <h2>Questões para Revisar (${qsErros.length})</h2>
        ${qsErros.length === 0 ? `
          <p class="muted">🎉 Você não tem nenhuma questão pendente no caderno de erros! Quando errar uma questão na aba <b>Questões</b>, ela aparece aqui automaticamente para você treinar até acertar.</p>
        ` : `
          <p class="muted">Acertar a questão limpa ela do seu caderno de erros:</p>
          <ul class="tarefas">
            ${qsErros.map(q => `
              <li class="tarefa">
                <button class="check" data-limpar-erro="${q.id}" title="Marcar como dominada">✗</button>
                <div>
                  <div class="t-tit">${esc(q.titulo)}</div>
                  <div class="t-det">${esc(q.enunciado)}</div>
                  <div class="t-acoes">
                    <button class="btn mini" data-refazer-erro="${q.id}">⚡ Refazer Agora</button>
                  </div>
                </div>
              </li>
            `).join("")}
          </ul>
        `}
      </section>

      <section class="card">
        <div class="eyebrow">MEMORIZAÇÃO RÁPIDA • FLASHCARDS</div>
        <h2>Cartões de Sintaxe Java (${window.FLASHCARDS_JAVA.length})</h2>
        <p class="small muted">Clique em qualquer cartão para virar e ver a resposta exata de prova:</p>
        <div class="tarefas">
          ${window.FLASHCARDS_JAVA.map((fc, idx) => {
            const virado = !!estado.cardVirado[fc.id];
            return `
              <div class="card flat" style="background:var(--papel-3);margin-bottom:8px;cursor:pointer" data-virar-card="${fc.id}">
                <div class="eyebrow">CARTÃO #${idx + 1} • CLIQUE PARA VIRAR</div>
                <p style="font-weight:800;font-size:16px;margin:6px 0">${esc(fc.p)}</p>
                ${virado ? `
                  <div style="border-top:2px dashed var(--tinta);margin-top:8px;padding-top:8px;color:var(--verde);font-weight:700;white-space:pre-line">${esc(fc.r)}</div>
                ` : `<span class="small muted">👆 Toque para revelar a resposta</span>`}
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderPdfs() {
    return `
      ${renderTopo()}

      <section class="card">
        <div class="eyebrow">LEITOR DE AULAS DO PROF. JACINTO</div>
        <h2>Importar PDFs ou Lista do Classroom</h2>
        <p>Você pode <b>selecionar os PDFs do Prof. Jacinto</b> direto do seu celular ou PC (o app lê todas as páginas na hora, resume os conceitos de Java do arquivo e gera questões novas!) ou <b>colar abaixo o texto que chegou no seu e-mail</b>:</p>

        <label class="dropzone" for="input-pdf">
          <div style="font-size:36px">📄</div>
          <div style="font-weight:800;font-size:17px">Toque aqui para escolher PDF(s) da aula do Prof. Jacinto</div>
          <div class="small muted">Lê múltiplos PDFs de uma vez e gera resumo + questões</div>
          <input type="file" id="input-pdf" accept="application/pdf" multiple style="display:none">
        </label>

        <div id="status-pdf" class="small mono" style="margin:8px 0;color:var(--azul)"></div>

        <div class="serrilha"></div>

        <h3>Ou cole aqui o texto/lista que chegou no seu E-mail ou exercício do Jacinto:</h3>
        <textarea id="texto-manual" placeholder="Cole aqui a lista de PDFs que chegou no seu e-mail, ou um enunciado/código Java do Prof. Jacinto para o app destrinchar..."></textarea>
        <div class="linha-btns">
          <button class="btn azul" id="btn-processar-texto">🧠 Analisar Texto e Gerar Resumo + Questões</button>
        </div>
      </section>

      ${estado.pdfsLidos.length > 0 ? `
        <section class="card">
          <div class="eyebrow">MATERIAIS DO JACINTO JÁ PROCESSADOS (${estado.pdfsLidos.length})</div>
          <h3>Seus Resumos de Aula Extraídos</h3>
          ${estado.pdfsLidos.map((doc, i) => `
            <div class="card flat" style="background:var(--papel-3);margin-bottom:12px">
              <span class="chip" style="color:var(--azul)">DOCUMENTO #${i + 1}</span>
              <h3>${esc(doc.nome)}</h3>
              <p class="small muted">Tópicos de Java identificados: <b>${esc(doc.topicos.join(", "))}</b></p>
              <div style="white-space:pre-line;font-size:14.5px;border-left:3px solid var(--sol);padding-left:10px;margin:8px 0">${esc(doc.resumo)}</div>
              <div class="linha-btns">
                <button class="btn mini" data-ir-treino="pdf">⚡ Resolver Questões Geradas</button>
              </div>
            </div>
          `).join("")}
        </section>
      ` : ""}
    `;
  }

  function analisarConteudoJava(nomeArquivo, textoExtraido) {
    const t = textoExtraido.toLowerCase();
    const topicos = [];
    const pontosResumo = [];
    const novasQuestoes = [];

    if (t.includes("class ") || t.includes("objeto") || t.includes("instância") || t.includes("new ")) {
      topicos.push("Classes e Objetos (new)");
      pontosResumo.push("• O documento aborda criação de Classes (molde) e instanciação de Objetos na memória com 'new'.");
    }
    if (t.includes("construtor") || t.includes("this.")) {
      topicos.push("Construtores e this");
      pontosResumo.push("• Destaca o uso de Construtores (mesmo nome da classe, sem void) e 'this' para diferenciar atributos de parâmetros.");
      novasQuestoes.push({
        id: "pdf_q_" + Date.now() + "_1",
        mod: "pdf",
        titulo: `[Do Material: ${nomeArquivo}] Construtor e this`,
        enunciado: `Com base no material '${nomeArquivo}', qual é a forma correta de declarar um construtor na classe 'Cliente' que inicializa o atributo 'nome'?`,
        codigo: `public class Cliente {\n    private String nome;\n    // Qual construtor abaixo está correto?\n}`,
        alts: [
          "public void Cliente(String nome) { this.nome = nome; }",
          "public Cliente(String nome) { this.nome = nome; }",
          "public String Cliente(String nome) { return nome; }",
          "private new Cliente(String nome) { nome = nome; }"
        ],
        correta: 1,
        explicacao: "Construtores têm exatamente o nome da classe ('Cliente') e NÃO possuem tipo de retorno (nem void), usando 'this.nome = nome' para atribuir ao atributo."
      });
    }
    if (t.includes("private") || t.includes("encapsulamento") || t.includes("get") || t.includes("set")) {
      topicos.push("Encapsulamento (get/set)");
      pontosResumo.push("• Cobra Encapsulamento: proteger atributos com 'private' e expor acesso controlado via métodos públicos get e set.");
    }
    if (t.includes("extends") || t.includes("herança") || t.includes("superclasse") || t.includes("subclasse") || t.includes("super(")) {
      topicos.push("Herança (extends / super)");
      pontosResumo.push("• Trabalha Herança ('extends'): reaproveitamento de atributos/métodos da superclasse e chamada 'super()' no construtor filho.");
      novasQuestoes.push({
        id: "pdf_q_" + Date.now() + "_2",
        mod: "pdf",
        titulo: `[Do Material: ${nomeArquivo}] Herança na Prática`,
        enunciado: `Segundo os conceitos de Herança presentes em '${nomeArquivo}', como a classe 'Aluno' herda da classe 'Pessoa' e chama seu construtor?`,
        codigo: `public class Aluno ________ Pessoa {\n    public Aluno(String nome) {\n        ________(nome);\n    }\n}`,
        alts: [
          "implements / this",
          "extends / super",
          "inherits / parent",
          "extends / new"
        ],
        correta: 1,
        explicacao: "Em Java, herança entre classes usa a palavra 'extends', e a chamada ao construtor da classe mãe na 1ª linha usa 'super(nome);'."
      });
    }
    if (t.includes("polimorfismo") || t.includes("override") || t.includes("sobrescrita") || t.includes("sobrecarga")) {
      topicos.push("Polimorfismo (@Override / Overload)");
      pontosResumo.push("• Explora Polimorfismo: sobrescrita de métodos na subclasse (@Override) e/ou sobrecarga de métodos (Overload).");
    }
    if (t.includes("abstract") || t.includes("interface") || t.includes("implements")) {
      topicos.push("Classes Abstratas e Interfaces");
      pontosResumo.push("• Aborda Classes Abstratas ('abstract class', que não podem sofrer 'new') e Contratos ('interface' / 'implements').");
    }

    if (topicos.length === 0) {
      topicos.push("Conceitos Gerais de Java / Exercícios");
      pontosResumo.push("• Material catalogado! Revise os trechos principais abaixo:");
    }

    const trechoLimpo = textoExtraido.replace(/\s+/g, " ").trim().slice(0, 650);
    pontosResumo.push(`\nTrecho extraído do documento:\n"${trechoLimpo}${textoExtraido.length > 650 ? "..." : ""}"`);

    estado.pdfsLidos.unshift({
      nome: nomeArquivo,
      topicos: topicos,
      resumo: pontosResumo.join("\n")
    });

    if (novasQuestoes.length > 0) {
      estado.questoesExtras = novasQuestoes.concat(estado.questoesExtras || []);
    }
    salvarEstado();
  }

  async function lerArquivosPdf(files) {
    const statusEl = document.getElementById("status-pdf");
    if (!window.pdfjsLib) {
      toast("Biblioteca PDF ainda carregando, tente novamente em 2 segundos.");
      return;
    }
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

    for (const file of files) {
      if (statusEl) statusEl.textContent = `Lendo páginas de: ${file.name}...`;
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let textoTotal = "";
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        textoTotal += content.items.map(item => item.str).join(" ") + "\n";
      }
      analisarConteudoJava(file.name, textoTotal);
    }
    toast(`✅ ${files.length} PDF(s) do Prof. Jacinto lidos e transformados em resumo + questões!`);
    render();
  }

  function atualizarNav() {
    const links = document.querySelectorAll("nav.abas a");
    const qtdErros = Object.keys(estado.erros).filter(k => estado.erros[k]).length;

    links.forEach(a => {
      const aba = a.getAttribute("data-aba");
      if (aba === estado.aba) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");

      const bolinhaAntiga = a.querySelector(".bolinha");
      if (bolinhaAntiga) bolinhaAntiga.remove();

      if (aba === "erros" && qtdErros > 0) {
        const b = document.createElement("span");
        b.className = "bolinha";
        b.textContent = qtdErros;
        a.appendChild(b);
      }
    });
  }

  function render() {
    const app = document.getElementById("app");
    if (!app) return;

    if (estado.aba === "hoje") app.innerHTML = renderHoje();
    else if (estado.aba === "aulas") app.innerHTML = renderAulas();
    else if (estado.aba === "treino") app.innerHTML = renderTreino();
    else if (estado.aba === "erros") app.innerHTML = renderErros();
    else if (estado.aba === "pdfs") app.innerHTML = renderPdfs();

    atualizarNav();

    const inputPdf = document.getElementById("input-pdf");
    if (inputPdf) {
      inputPdf.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          lerArquivosPdf(e.target.files);
        }
      });
    }

    const btnTexto = document.getElementById("btn-processar-texto");
    if (btnTexto) {
      btnTexto.addEventListener("click", () => {
        const txt = (document.getElementById("texto-manual") || {}).value || "";
        if (!txt.trim()) {
          toast("Cole algum texto ou lista primeiro!");
          return;
        }
        analisarConteudoJava("Material Colado (USCS / Prof. Jacinto)", txt);
        toast("✅ Conteúdo analisado e adicionado ao seu plano!");
        render();
      });
    }
  }

  document.addEventListener("click", (e) => {
    const linkAba = e.target.closest("nav.abas a");
    if (linkAba) {
      e.preventDefault();
      estado.aba = linkAba.getAttribute("data-aba");
      salvarEstado();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    const praticaBtn = e.target.closest("[data-pratica-mod]");
    if (praticaBtn) {
      const modId = praticaBtn.getAttribute("data-pratica-mod");
      const idx = parseInt(praticaBtn.getAttribute("data-pratica-idx"), 10);
      estado.praticaAulaResp[modId] = idx;
      const modObj = window.MODULOS_POO.find(m => m.id === modId);
      if (modObj && modObj.desafioPratico && idx === modObj.desafioPratico.correta) {
        soltarConfete();
      }
      salvarEstado();
      render();
      return;
    }

    const memBtn = e.target.closest("[data-mem-step]");
    if (memBtn) {
      estado.passoMemoria = parseInt(memBtn.getAttribute("data-mem-step"), 10);
      salvarEstado();
      render();
      return;
    }

    const toggleMod = e.target.closest("[data-toggle-mod]");
    if (toggleMod) {
      const id = toggleMod.getAttribute("data-toggle-mod");
      estado.modulosFeitos[id] = !estado.modulosFeitos[id];
      if (estado.modulosFeitos[id]) {
        soltarConfete();
        toast("🎉 Módulo marcado como concluído!");
      }
      salvarEstado();
      render();
      return;
    }

    const abrirAula = e.target.closest("[data-abrir-aula]");
    if (abrirAula) {
      estado.moduloAulaAtual = abrirAula.getAttribute("data-abrir-aula");
      estado.aba = "aulas";
      salvarEstado();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    const selAula = e.target.closest("[data-sel-aula]");
    if (selAula) {
      estado.moduloAulaAtual = selAula.getAttribute("data-sel-aula");
      salvarEstado();
      render();
      return;
    }

    const irTreino = e.target.closest("[data-ir-treino]");
    if (irTreino) {
      estado.filtroTreino = irTreino.getAttribute("data-ir-treino");
      estado.indiceQuestao = 0;
      estado.respostaSelecionada = null;
      estado.aba = "treino";
      salvarEstado();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    const irAba = e.target.closest("[data-ir-aba]");
    if (irAba) {
      estado.aba = irAba.getAttribute("data-ir-aba");
      salvarEstado();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    const filtroQ = e.target.closest("[data-filtro-q]");
    if (filtroQ) {
      estado.filtroTreino = filtroQ.getAttribute("data-filtro-q");
      estado.indiceQuestao = 0;
      estado.respostaSelecionada = null;
      salvarEstado();
      render();
      return;
    }

    const respQ = e.target.closest("[data-resp-q]");
    if (respQ) {
      const idxResp = parseInt(respQ.getAttribute("data-resp-q"), 10);
      const todas = todasQuestoes();
      const filtradas = estado.filtroTreino === "todos"
        ? todas
        : todas.filter(q => q.mod === estado.filtroTreino);
      const qAtual = filtradas[estado.indiceQuestao];
      estado.respostaSelecionada = idxResp;

      if (qAtual) {
        if (idxResp === qAtual.correta) {
          estado.acertos[qAtual.id] = true;
          delete estado.erros[qAtual.id];
          soltarConfete();
        } else {
          estado.erros[qAtual.id] = true;
        }
      }
      salvarEstado();
      render();
      return;
    }

    const proxQ = e.target.closest("[data-prox-q]");
    if (proxQ) {
      const todas = todasQuestoes();
      const filtradas = estado.filtroTreino === "todos"
        ? todas
        : todas.filter(q => q.mod === estado.filtroTreino);
      estado.indiceQuestao = (estado.indiceQuestao + 1) % Math.max(1, filtradas.length);
      estado.respostaSelecionada = null;
      salvarEstado();
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
      return;
    }

    const antQ = e.target.closest("[data-ant-q]");
    if (antQ) {
      const todas = todasQuestoes();
      const filtradas = estado.filtroTreino === "todos"
        ? todas
        : todas.filter(q => q.mod === estado.filtroTreino);
      estado.indiceQuestao = (estado.indiceQuestao - 1 + filtradas.length) % Math.max(1, filtradas.length);
      estado.respostaSelecionada = null;
      salvarEstado();
      render();
      return;
    }

    const refazerErro = e.target.closest("[data-refazer-erro]");
    if (refazerErro) {
      const id = refazerErro.getAttribute("data-refazer-erro");
      const todas = todasQuestoes();
      const idx = todas.findIndex(q => q.id === id);
      if (idx >= 0) {
        estado.filtroTreino = "todos";
        estado.indiceQuestao = idx;
        estado.respostaSelecionada = null;
        estado.aba = "treino";
        salvarEstado();
        render();
      }
      return;
    }

    const limparErro = e.target.closest("[data-limpar-erro]");
    if (limparErro) {
      const id = limparErro.getAttribute("data-limpar-erro");
      delete estado.erros[id];
      salvarEstado();
      render();
      return;
    }

    const virarCard = e.target.closest("[data-virar-card]");
    if (virarCard) {
      const id = virarCard.getAttribute("data-virar-card");
      estado.cardVirado[id] = !estado.cardVirado[id];
      salvarEstado();
      render();
      return;
    }
  });

  render();
})();
