import { useState, useRef } from "react";

// ─── FIXED CONSTANTS ──────────────────────────────────────────────────────────

const ADVOGADO_NOME = "LUCAS MIRANDA";
const ADVOGADO_OAB  = "OAB/BA 21.641";

function getTodayFormatted() {
  const d = new Date();
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

// ─── TESE SÚMULA 492 (íntegra, imutável — parágrafos renumerados no pós-processamento) ───

const TESE_SUMULA_492 = `[SECAO_SUMULA]. VEÍCULO LOCADO NA ÉPOCA DOS FATOS. A INAPLICABILIDADE DO ENUNCIADO 492 DA SÚMULA DO STF.

99001. Por meio do enunciado 492 de sua Súmula, o STF chegou a entendimento segundo o qual "a empresa locadora de veículos responde, civil e solidariamente com o locatário, pelos danos por este causados a terceiro, no uso do carro locado".

99002. Ocorre que, analisando-se os fundamentos fáticos e jurídicos dos precedentes que justificaram a emissão do enunciado, vê-se que a razão de decidir dos referidos precedentes não se aplica ao presente caso.

99003. É o que será demonstrado, após uma breve contextualização histórica.

[SECAO_SUMULA].1. Os precedentes que deram origem ao enunciado 492 da Súmula do STF.

99004. O Enunciado 492 da Súmula do STF foi editado em 1966, ainda sob a vigência do Código Civil de 1916 e antes mesmo da Constituição de 1988. Ele se originou de basicamente três precedentes.

99005. O primeiro precedente que motivou a edição do enunciado decorreu do Recurso Extraordinário 60.477, julgado em 07/06/1996, teve como contexto fático a ausência de cautela da locadora ao locar veículo para sujeito que não possuía habilitação. Assim, fundado na noção de culpa, o referido julgado entendeu que a locadora seria solidariamente responsável com o condutor do veículo.

99006. O segundo acórdão foi o Recurso Extraordinário n. 62.247, julgado em 1967, em que a locadora de veículos foi considerada responsável, sob o fundamento de que "laborou em culposa negligência por falta de adequada cobertura da eventual incapacidade econômica do arrendatário, que desaparece sem compor os prejuízos causados".

99007. Por fim, tem-se o Recurso Extraordinário n. 63.562, que, baseando-se nos dois recursos anteriores, afirma que a empresa locadora possui responsabilidade solidária pelos acidentes causados pelo motorista do veículo locado.

99008. O que se vê, portanto, é que a origem do enunciado teve como objetivo reconhecer a responsabilidade solidária da empresa locadora quando verificada a existência de culpa da locadora. Isto é, nas hipóteses de responsabilidade civil subjetiva.

99009. Frise-se, aqui, que não se trata apenas da verificação da culpa do motorista, no momento do acidente. Mas todos os precedentes que baseiam o entendimento sumular exigiram que, também em relação ao contrato de locação, houvesse conduta culposa da locadora — seja por firmar contrato com pessoa inabilitada ou com locatário com incapacidade econômica. Tais circunstâncias devem ser respeitadas para fins da aplicação do entendimento contido no enunciado, inclusive em atenção ao art. 926, §2º, do CPC.

99010. Contudo, o enunciado, da forma editada, levou os Tribunais do país à sua aplicação indiscriminada, que, ao ignorar a necessidade de conduta culposa ligada ao contrato de locação, criou hipótese de responsabilidade civil objetiva, a qual não está prevista no ordenamento jurídico brasileiro. Assim, a aplicação do referido enunciado sem qualquer averiguação da existência do elemento subjetivo no caso concreto mostra-se incorreta — afinal, não dialoga com a razão de decidir dos precedentes que deram origem ao enunciado 492 da Súmula do STF.

[SECAO_SUMULA].2. A descriteriosa aplicação do enunciado 492 da Súmula do STF e a violação a normas relativas à responsabilidade civil.

99011. Como demonstrado, o enunciado 492 da Súmula do STF foi originado de precedentes que reconheceram a responsabilidade da locadora de veículos em razão da existência de culpa. Isto é, em situações em que a locadora agiu com negligência ao firmar o contrato, o que foi aferido e comprovado no caso concreto.

99012. Isso não obstante, verifica-se na jurisprudência a aplicação do referido enunciado sem analisar as circunstâncias fáticas dos precedentes que o ensejaram. Em outras palavras, por vezes, o enunciado é aplicado independentemente de se aferir a existência ou não de culpa da locadora, criando-se uma espécie de responsabilidade objetiva.

99013. Essa aplicabilidade do enunciado, contudo, viola uma série de normas jurídicas.

99014. Primeiro, há violação às normas decorrentes do sistema de precedentes judiciais, sobretudo o art. 926, §2º, do CPC. O referido dispositivo visa evitar o problema histórico da criação de enunciados de súmula de forma abstrata, sem transmitir as circunstâncias fáticas dos casos concretos que justificaram a emissão da própria súmula.

99015. Nesse sentido, Fredie Didier Jr. leciona que a norma decorrente do art. 926, §2º, do CPC integra o dever de uniformização da Jurisprudência pelo Tribunal, sendo que o seu objetivo é "esclarecer que o correto exercício deste dever de editar enunciados sumulares pressupõe a fidelidade do tribunal à base fática a partir da qual a jurisprudência sumulada foi construída. Cumpre preservar o caráter de concretude do direito judicial que se constrói. Produz-se norma geral, mas a partir de casos concretos."

99016. A norma tem evidente aplicabilidade nos atos de redação e emissão dos enunciados, mas também acarreta diretriz de interpretação para tais enunciados. Os enunciados de Súmula devem ser interpretados de acordo com as circunstâncias fáticas e fundamentação dos precedentes que os geraram, não apenas na literalidade do enunciado.

99017. No caso, o enunciado n. 492 da Súmula do STF foi emitido há quase 60 (sessenta) anos, muito antes do advento do CPC/2015 e da norma contida no art. 926, §2º, do CPC — de modo que sua interpretação não deve se limitar à literalidade de sua redação.

99018. Como já demonstrado, o aprofundamento nas circunstâncias fáticas dos precedentes que justificaram o enunciado sumular indicam que as locadoras só foram responsabilizadas em casos em que havia conduta culposa na contratação da locação — seja por locar veículo a pessoa inabilitada, seja por disponibilizar o bem a sujeito com incapacidade econômica.

99019. Com isso, aplicar o enunciado sem a verificação dessas mesmas circunstâncias fáticas — conduta culposa da locadora — implica violação ao dever de uniformização da Jurisprudência decorrente do art. 926 e §§ do CPC.

99020. Segundo, há também violação à norma decorrente do art. 265 do Código Civil, segundo a qual "a solidariedade não se presume; resulta da lei ou da vontade das partes". Isso porque aplicar o enunciado sem verificação de culpa da locadora implica responsabilizá-la por atos de terceiro, sem que haja qualquer norma jurídica que justifique tal conclusão.

99021. Veja-se que, nos casos em que há culpa da locadora, sua responsabilidade decorre do art. 186, Código Civil. Mas se não há o elemento subjetivo no caso concreto, não há nenhuma norma jurídica que determine a responsabilidade solidária da empresa locadora de veículo.

99022. Terceiro. Isso também implica violação às normas decorrentes dos arts. 932 c/c art. 933 do Código Civil. O art. 932 estabelece rol taxativo com hipóteses de responsabilidade solidária, não contendo qualquer menção à hipótese de locadoras de veículo responder pelos danos causados pelo locatário.

99023. Quarto. A dispensa da culpa da locadora também viola o art. 927, parágrafo único, Código Civil. O risco de ocorrência de acidente de veículos não é um risco inerente à atividade de locação de veículos, de modo que não há fundamento para responsabilização objetiva.

99024. Quinto. A responsabilização sem prática de ato ilícito também viola a norma decorrente do art. 931, Código Civil. O veículo locado estava em perfeito estado de conservação no momento de sua locação, não havendo defeito de fabricação — fato incontroverso.

99025. Assim, vê-se que o enunciado n. 492 da Súmula do STF não deve ser aplicado em casos que não for comprovada a culpa da locadora de automóveis, de modo que os pedidos formulados em inicial devem ser julgados improcedentes.`;

// ─── POST-PROCESSING ──────────────────────────────────────────────────────────

// Renumbers all Arabic-numeral paragraphs (e.g. "3. Texto") sequentially throughout the document.
// Roman numeral section headers (I., II., I.1., etc.) are NOT affected.
function renumberParagraphs(text) {
  let counter = 1;
  return text.split("\n").map(line => {
    // Match lines starting with one or more digits, a period, then a space
    // This excludes Roman numerals (I, V, X only) and sub-sections like "II.1."
    if (/^\d+\.\s/.test(line)) {
      const rest = line.replace(/^\d+\.\s+?/, "");
      return `${counter++}. ${rest}`;
    }
    return line;
  }).join("\n");
}

// Replaces [SECAO_SUMULA] placeholder with the correct Roman numeral
function applySumulaSection(text, sectionNum) {
  const roman = ["I","II","III","IV","V","VI","VII","VIII"][sectionNum - 1] || String(sectionNum);
  return text.replace(/\[SECAO_SUMULA\]/g, roman);
}

// ─── PROMPTS ──────────────────────────────────────────────────────────────────

const EXTRACT_SYSTEM = `Você é um assistente jurídico especializado. Analise o(s) documento(s) anexados (petição inicial e documentos do processo) e extraia as informações em formato JSON puro, sem markdown, sem backticks, sem explicações.

Retorne EXATAMENTE este JSON (preencha os campos encontrados, deixe "" para os não encontrados):
{
  "VARA": "",
  "COMARCA": "",
  "NUMERO_PROCESSO": "",
  "NOME_AUTOR": "",
  "NOME_REU": "",
  "CNPJ_REU": "",
  "resumo_fatos_autor": "Resumo objetivo dos fatos narrados pelo autor na inicial",
  "pedidos_autor": "Lista dos pedidos formulados pelo autor",
  "documentos_juntados": "Lista e descrição de cada documento anexado pelo autor",
  "teses_autor": "Principais argumentos jurídicos do autor",
  "pontos_fracos_inicial": "Pontos frágeis ou inconsistências identificados na inicial e nos documentos",
  "preliminares": "Preliminares identificadas que podem ser arguidas em defesa (ex: ilegitimidade passiva ad causam, inépcia da petição inicial, carência de ação, prescrição, decadência, falta de interesse de agir). Deixe VAZIO se não houver nenhuma."
}`;

function buildContestacaoSystem(usarSumula, temPreliminar) {
  // Dynamically build section numbering
  // I = fatos (always)
  // II = preliminares (if any)
  // next = sumula (if applicable)
  // next = tese principal
  // next = ausência provas
  // last = pedidos

  const toRoman = (n) => ["I","II","III","IV","V","VI","VII"][n-1];
  let idx = 1;
  const secFatos     = toRoman(idx++);
  const secPrelim    = temPreliminar ? toRoman(idx++) : null;
  const secSumula    = usarSumula    ? toRoman(idx++) : null;
  const secTese      = toRoman(idx++);
  const secAusencia  = toRoman(idx++);
  const secPedidos   = toRoman(idx++);

  const sumulaNum = secSumula ? ["I","II","III","IV","V","VI","VII"].indexOf(secSumula) + 1 : null;

  const prelimBlock = temPreliminar ? `
${secPrelim}. DAS PRELIMINARES

[Desenvolva cada preliminar identificada com profundidade e fundamento legal. Para cada uma: apresente o argumento, cite o dispositivo legal pertinente (CPC/CC) e requeira o reconhecimento pelo juízo. Seja objetivo e técnico.]
` : "";

  const sumulaBlock = usarSumula ? `
[INSERIR_TESE_SUMULA_492_AQUI]
` : "";

  return `Você é um advogado especializado em litigância empresarial. Gere uma contestação completa e profissional seguindo EXATAMENTE esta estrutura:

AO JUÍZO DA {VARA} DA COMARCA DE {COMARCA}

Processo n. {NUMERO_PROCESSO}

{NOME_REU}, pessoa jurídica de direito privado inscrita no CNPJ sob n. {CNPJ_REU}, por intermédio de seus advogados (procuração em anexo), com escritório situado na {ENDERECO_ESCRITORIO}, vem a Vossa Excelência apresentar

CONTESTAÇÃO

em face da demanda ajuizada por {NOME_AUTOR} pelas razões a seguir expostas.

1. Inicialmente, requer que todas as intimações e comunicações relativas aos presentes autos sejam expedidas exclusivamente em nome do advogado ${ADVOGADO_NOME} (${ADVOGADO_OAB}), sob pena de nulidade nos termos do art. 272, §§2º e 5º e art. 280 do Código de Processo Civil.

${secFatos}. DA CORRETA COMPREENSÃO DOS FATOS

[Narre os fatos sob a ótica do réu com parágrafos numerados sequencialmente. Ao longo desta seção, impugne especificamente os documentos apresentados pelo autor integrando a impugnação à narrativa. NÃO crie subseção separada para impugnação.]
${prelimBlock}${sumulaBlock}
${secTese}. {TITULO_TESE_PRINCIPAL}

[Desenvolva a tese principal com profundidade, citando legislação e doutrina. Parágrafos numerados.]

${secAusencia}. DA AUSÊNCIA DE COMPROVAÇÃO DO ALEGADO NA INICIAL

[Desenvolva com base nos pontos frágeis identificados. Parágrafos numerados.]

${secPedidos}. DOS PEDIDOS

Por tudo quanto exposto, requer:

a) o julgamento totalmente improcedente dos pedidos formulados na petição inicial, {PEDIDO_PRINCIPAL};

b) subsidiariamente, caso não seja este o entendimento de Vossa Excelência, que eventual condenação observe estritamente os limites do que restar efetivamente comprovado nos autos;

c) a condenação da parte autora ao pagamento das custas processuais e honorários advocatícios sucumbenciais, nos termos do art. 85 do Código de Processo Civil;

d) produção de todas as provas admitidas em direito.

Nestes termos,
Pede deferimento.

Da Cidade de {CIDADE_ASSINATURA}, ${getTodayFormatted()}.

${ADVOGADO_NOME}
${ADVOGADO_OAB}

INSTRUÇÕES OBRIGATÓRIAS:
- Substitua todos os {CAMPOS} pelos dados fornecidos
- NUMERE todos os parágrafos de texto com números arábicos sequenciais (1. 2. 3. ...) ao longo de TODO o documento, incluindo dentro de cada seção
- NÃO crie seção separada de impugnação de documentos — integre à seção de fatos
- NÃO inclua seção de tempestividade
- A assinatura é SEMPRE ${ADVOGADO_NOME} / ${ADVOGADO_OAB} — não altere
- A data é SEMPRE ${getTodayFormatted()} — não altere
- Retorne APENAS o texto da contestação, sem markdown, sem asteriscos
${usarSumula ? `- Onde aparece [INSERIR_TESE_SUMULA_492_AQUI], mantenha esse marcador exato — ele será substituído automaticamente pela tese completa` : ""}
${sumulaNum ? `- A tese da Súmula 492 está na seção ${secSumula} (número romano ${sumulaNum})` : ""}`;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

// Extract full text from a PDF File object using pdfjs-dist (npm package)
async function extractPdfText(file) {
  const pdfjsLib = await import("pdfjs-dist");
  // Use the bundled worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pages = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map(item => item.str).join(" ");
    pages.push(`[Página ${i}]\n${pageText}`);
  }
  return pages.join("\n\n");
}

// Read an image file as base64
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Build API content blocks — PDFs as extracted text, images as base64
function buildContentBlocks(files, textPrompt) {
  const blocks = [];
  for (const f of files) {
    if (f.type === "application/pdf") {
      blocks.push({
        type: "text",
        text: `=== DOCUMENTO: ${f.name} ===\n\n${f.text || "(texto não extraído)"}`,
      });
    } else if (f.base64) {
      blocks.push({ type: "image", source: { type: "base64", media_type: f.type, data: f.base64 } });
    }
  }
  blocks.push({ type: "text", text: textPrompt });
  return blocks;
}

// Safe API call — chama a função Netlify diretamente
async function callApi(payload) {
  const res = await fetch("/.netlify/functions/anthropic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const rawText = await res.text();
  if (!rawText || rawText.trim() === "") {
    throw new Error(`Resposta vazia do servidor (HTTP ${res.status}).`);
  }

  let data;
  try {
    data = JSON.parse(rawText);
  } catch {
    throw new Error(`Resposta inválida: ${rawText.slice(0, 200)}`);
  }

  if (data.error) {
    throw new Error(typeof data.error === "string" ? data.error : (data.error.message || JSON.stringify(data.error)));
  }

  return data;
}

function downloadAsDoc(text, filename) {
  const escape = (s) =>
    s.replace(/\\/g, "\\\\").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
     .split("").map(c => { const code = c.charCodeAt(0); return code > 127 ? `\\u${code}?` : c; }).join("");

  const lines = text.split("\n");
  let body = "";
  for (const line of lines) {
    const t = line.trim();
    const isTitle   = t.startsWith("AO JUÍZO") || t === "CONTESTAÇÃO";
    const isSection = /^[IVX]+\.\s/.test(t) || /^[IVX]+\.[IVX0-9]+\.\s/.test(t);
    const isQuote   = /^["“”]/.test(t);
    const esc = escape(line);
    if (isTitle)
      body += `{\\pard\\qc\\b\\fs28 ${esc}\\par}\n`;
    else if (isSection)
      body += `{\\pard\\qj\\b\\fs24 ${esc}\\par}\n`;
    else if (isQuote)
      body += `{\\pard\\qj\\li720\\ri720\\fs22 ${esc}\\par}\n`;
    else if (t === "")
      body += `{\\pard\\par}\n`;
    else
      body += `{\\pard\\qj\\fs24 ${esc}\\par}\n`;
  }

  const rtf = `{\\rtf1\\ansi\\ansicpg1252\\deff0\n{\\fonttbl{\\f0\\froman\\fcharset0 Times New Roman;}}\n{\\colortbl ;\\red0\\green0\\blue0;}\n\\paperw12240\\paperh15840\\margl1800\\margr1800\\margt1440\\margb1440\\f0\\cf1\n${body}\n}`;
  const blob = new Blob([rtf], { type: "application/rtf" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ─── STYLE CONSTANTS ─────────────────────────────────────────────────────────

const S = {
  input: { width: "100%", boxSizing: "border-box", background: "#0d1f2d", border: "1px solid #2a4a6b", borderRadius: 7, padding: "9px 12px", color: "#d6e8f5", fontSize: 13, fontFamily: "Arial, sans-serif", outline: "none" },
  inputGreen: { width: "100%", boxSizing: "border-box", background: "#0d1f2d", border: "1px solid #2a6e4a", borderRadius: 7, padding: "9px 12px", color: "#d6e8f5", fontSize: 13, fontFamily: "Arial, sans-serif", outline: "none" },
  label: { display: "block", fontSize: 10, marginBottom: 5, fontFamily: "Arial, sans-serif", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: "bold" },
  wrap: { marginBottom: 14 },
};

// ─── FIELD COMPONENTS — outside main to prevent remount on re-render ──────────

const ManualInput = ({ label, value, onChange, placeholder, rows }) => (
  <div style={S.wrap}>
    <label style={{ ...S.label, color: "#5b9ecf" }}>{label}</label>
    {rows ? <textarea value={value} onChange={onChange} rows={rows} placeholder={placeholder} style={{ ...S.input, resize: "vertical" }} />
          : <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={S.input} />}
  </div>
);

const ExtractedInput = ({ label, value, onChange, rows }) => (
  <div style={S.wrap}>
    <label style={{ ...S.label, color: "#5bc98e" }}>
      🤖 {label} <span style={{ color: "#3a6e4a", fontWeight: "normal", textTransform: "none", letterSpacing: 0 }}>— extraído, edite se necessário</span>
    </label>
    {rows ? <textarea value={value} onChange={onChange} rows={rows} style={{ ...S.inputGreen, resize: "vertical" }} />
          : <input type="text" value={value} onChange={onChange} style={S.inputGreen} />}
  </div>
);

const StepBar = ({ active }) => (
  <div style={{ display: "flex", gap: 6 }}>
    {["1 · Documentos", "2 · Revisão", "3 · Contestação"].map((s, i) => (
      <div key={i} style={{ padding: "5px 13px", borderRadius: 20, fontSize: 11, background: i === active ? "#1a6eb5" : "#0d1f2d", border: "1px solid " + (i <= active ? "#4db8ff88" : "#1e3a55"), color: i === active ? "#fff" : (i < active ? "#4db8ff" : "#4a7a9b") }}>{s}</div>
    ))}
  </div>
);

const Header = ({ active, extra }) => (
  <div style={{ background: "#0d1f2d", borderBottom: "1px solid #1e3a55", padding: "16px 28px", display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}>
    <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #1a6eb5, #4db8ff)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>⚖️</div>
    <div>
      <div style={{ fontSize: 15, fontWeight: "bold", letterSpacing: 1, color: "#d6e8f5" }}>GERADOR DE CONTESTAÇÃO</div>
      <div style={{ fontSize: 10, color: "#4db8ff", letterSpacing: 2, textTransform: "uppercase" }}>Assistente Jurídico com IA · Litigância em Massa</div>
    </div>
    <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
      <StepBar active={active} />
      {extra}
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function GeradorContestacao() {
  const [files, setFiles]             = useState([]);
  const [extracted, setExtracted]     = useState({});
  const [manual, setManual]           = useState({});
  const [usarSumula, setUsarSumula]   = useState(null);
  const [contestacao, setContestacao] = useState("");
  const [step, setStep]               = useState("upload");
  const [loading, setLoading]         = useState(false);
  const [loadingMsg, setLoadingMsg]   = useState("");
  const [error, setError]             = useState("");
  const fileRef = useRef();

  const setExt = (key) => (e) => setExtracted(prev => ({ ...prev, [key]: e.target.value }));
  const setMan = (key) => (e) => setManual(prev => ({ ...prev, [key]: e.target.value }));

  const addFiles = async (newFiles) => {
    const processed = [];
    for (const f of newFiles) {
      if (f.type === "application/pdf") {
        setLoadingMsg(`Lendo ${f.name}...`);
        setLoading(true);
        try {
          const text = await extractPdfText(f);
          processed.push({ name: f.name, type: f.type, text, size: f.size });
        } catch {
          processed.push({ name: f.name, type: f.type, text: "(erro ao extrair texto)", size: f.size });
        }
      } else {
        // Images: keep as base64
        const base64 = await fileToBase64(f);
        processed.push({ name: f.name, type: f.type, base64, size: f.size });
      }
    }
    setLoading(false);
    setLoadingMsg("");
    setFiles(prev => [...prev, ...processed]);
  };

  const handleExtract = async () => {
    if (!files.length) { setError("Anexe ao menos um documento."); return; }
    setLoading(true); setError("");
    setLoadingMsg("Analisando os documentos...");
    try {
      const content = buildContentBlocks(files, "Analise todos os documentos e extraia as informações conforme instruído.");
      const data = await callApi({ model: "claude-sonnet-4-20250514", max_tokens: 4000, system: EXTRACT_SYSTEM, messages: [{ role: "user", content }] });
      const raw   = data.content?.map(b => b.text || "").join("") || "";
      const clean = raw.replace(/```json|```/g, "").trim();
      setExtracted(JSON.parse(clean));
      setManual({ ENDERECO_ESCRITORIO: "Rua Ewerton Visco, 290, Edif. Boulevard Side Empresarial, Salas 1503/1504, Caminho das Árvores, Salvador, Bahia", CIDADE_ASSINATURA: "Salvador/BA", TESE_PRINCIPAL: "" });
      setUsarSumula(null);
      setStep("review");
    } catch (err) {
      setError("Erro ao extrair dados: " + (err.message || "Tente novamente."));
    } finally { setLoading(false); }
  };

  const handleGenerate = async () => {
    if (usarSumula === null) { setError("❗ Responda se deve incluir a tese da Súmula 492."); return; }
    setLoading(true); setError("");
    setLoadingMsg("Elaborando a contestação completa...");
    try {
      const d = { ...extracted, ...manual };
      const temPreliminar = !!(d.preliminares && d.preliminares.trim());

      // Determine which Roman numeral the súmula section gets
      let sumulaSectionNum = 2; // default if no prelim
      if (usarSumula) {
        sumulaSectionNum = temPreliminar ? 3 : 2;
      }

      const content = buildContentBlocks(files, `
Gere a contestação completa com os seguintes dados:

PROCESSO: Vara: ${d.VARA} | Comarca: ${d.COMARCA} | Nº: ${d.NUMERO_PROCESSO}
PARTES: Autor: ${d.NOME_AUTOR} | Réu: ${d.NOME_REU} | CNPJ: ${d.CNPJ_REU}
ESCRITÓRIO: ${d.ENDERECO_ESCRITORIO}
CIDADE: ${d.CIDADE_ASSINATURA}

ANÁLISE DA INICIAL:
- Fatos do Autor: ${d.resumo_fatos_autor}
- Pedidos: ${d.pedidos_autor}
- Documentos juntados: ${d.documentos_juntados}
- Teses do Autor: ${d.teses_autor}
- Pontos frágeis: ${d.pontos_fracos_inicial}
${temPreliminar ? `- PRELIMINARES A ARGUIR: ${d.preliminares}` : "- SEM PRELIMINARES"}

TESE DA DEFESA: ${d.TESE_PRINCIPAL || "Desenvolva a melhor tese com base nos documentos."}
${usarSumula ? `\nINCLUAR TESE SÚMULA 492: Sim — mantenha o marcador [INSERIR_TESE_SUMULA_492_AQUI] exatamente onde a tese deve ser inserida.` : ""}

Siga rigorosamente a estrutura e as instruções do template.`);

      const data = await callApi({ model: "claude-sonnet-4-20250514", max_tokens: 4000, system: buildContestacaoSystem(usarSumula, temPreliminar), messages: [{ role: "user", content }] });
      let text = data.content?.map(b => b.text || "").join("") || "";

      // Debug: log what we got
      console.log("API response stop_reason:", data.stop_reason);
      console.log("Content blocks:", data.content?.length);
      console.log("Text length:", text.length);
      console.log("First 200 chars:", text.slice(0, 200));

      if (!text.trim()) {
        throw new Error(`A IA retornou resposta vazia. stop_reason: ${data.stop_reason}, blocos: ${data.content?.length}`);
      }

      // Insert tese with correct section number
      if (usarSumula) {
        const teseFinal = applySumulaSection(TESE_SUMULA_492, sumulaSectionNum);
        text = text.replace("[INSERIR_TESE_SUMULA_492_AQUI]", teseFinal);
      }

      // Renumber all Arabic paragraphs sequentially
      text = renumberParagraphs(text);

      if (!text.trim()) {
        throw new Error("Erro no processamento do texto gerado. Tente novamente.");
      }

      setContestacao(text);
      setStep("result");
    } catch (err) {
      setError("Erro ao gerar contestação: " + (err.message || "Tente novamente."));
    } finally { setLoading(false); }
  };

  const handleDownload = () => {
    const proc = (extracted?.NUMERO_PROCESSO || "").replace(/[^0-9]/g, "").slice(0, 10) || "contestacao";
    downloadAsDoc(contestacao, `Contestacao_${proc}.doc`);
  };

  const resetAll = () => { setFiles([]); setExtracted({}); setManual({}); setContestacao(""); setUsarSumula(null); setStep("upload"); setError(""); };

  // ── STEP: UPLOAD ──────────────────────────────────────────────────────────────
  if (step === "upload") return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#09151f", minHeight: "100vh", color: "#d6e8f5", display: "flex", flexDirection: "column" }}>
      <Header active={0} />
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: 40 }}>
        <div style={{ width: "100%", maxWidth: 620 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 32, marginBottom: 10 }}>📂</div>
            <div style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Anexe a Petição Inicial e Documentos</div>
            <div style={{ fontSize: 13, color: "#4a7a9b", lineHeight: 1.8 }}>
              A IA lê os documentos, extrai os dados do processo,<br />
              detecta preliminares e identifica pontos frágeis.
            </div>
          </div>

          <div onDrop={(e) => { e.preventDefault(); addFiles(Array.from(e.dataTransfer.files)); }}
               onDragOver={(e) => e.preventDefault()}
               onClick={() => fileRef.current.click()}
               style={{ border: "2px dashed #1e3a55", borderRadius: 14, padding: "40px 30px", textAlign: "center", cursor: "pointer", background: "#0d1f2d", marginBottom: 20 }}>
            <input ref={fileRef} type="file" multiple accept=".pdf,.png,.jpg,.jpeg" style={{ display: "none" }}
              onChange={(e) => addFiles(Array.from(e.target.files))} />
            <div style={{ fontSize: 36, marginBottom: 10 }}>⬆️</div>
            <div style={{ fontSize: 14, marginBottom: 6 }}>Arraste arquivos aqui ou clique para selecionar</div>
            <div style={{ fontSize: 12, color: "#4a7a9b" }}>PDF, PNG, JPG · Petição Inicial + todos os documentos juntados</div>
          </div>

          {files.length > 0 && (
            <div style={{ background: "#0d1f2d", border: "1px solid #1e3a55", borderRadius: 10, padding: 16, marginBottom: 20 }}>
              {files.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 4px", borderBottom: i < files.length - 1 ? "1px solid #1e3a5533" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span>{f.type === "application/pdf" ? "📄" : "🖼️"}</span>
                    <div>
                      <div style={{ fontSize: 13 }}>{f.name}</div>
                      <div style={{ fontSize: 11, color: "#4a7a9b" }}>{(f.size / 1024).toFixed(1)} KB</div>
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setFiles(f => f.filter((_, j) => j !== i)); }}
                    style={{ background: "#ff444411", border: "1px solid #ff444433", borderRadius: 6, padding: "4px 10px", color: "#ff8888", cursor: "pointer", fontSize: 12 }}>✕</button>
                </div>
              ))}
            </div>
          )}

          {error && <div style={{ background: "#ff444422", border: "1px solid #ff444444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#ff8888", marginBottom: 16 }}>{error}</div>}

          <button onClick={handleExtract} disabled={loading || !files.length} style={{
            width: "100%", padding: 14, borderRadius: 10, border: "none",
            background: files.length ? "linear-gradient(135deg, #1a6eb5, #4db8ff)" : "#1e3a55",
            color: files.length ? "#fff" : "#4a7a9b", fontSize: 15, fontWeight: "bold",
            cursor: files.length ? "pointer" : "not-allowed", letterSpacing: 1,
          }}>
            {loading ? `⏳ ${loadingMsg}` : "🔍 ANALISAR DOCUMENTOS"}
          </button>
        </div>
      </div>
    </div>
  );

  // ── STEP: REVIEW ──────────────────────────────────────────────────────────────
  if (step === "review") {
    const temPreliminar = !!(extracted.preliminares && extracted.preliminares.trim());
    return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#09151f", height: "100vh", color: "#d6e8f5", display: "flex", flexDirection: "column" }}>
      <Header active={1} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>

        {/* LEFT: Extracted */}
        <div style={{ borderRight: "1px solid #1e3a55", overflowY: "auto", padding: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <div style={{ width: 32, height: 32, background: "#1a4a2a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>🤖</div>
            <div>
              <div style={{ fontSize: 12, fontWeight: "bold", color: "#5bc98e" }}>EXTRAÍDO DOS DOCUMENTOS</div>
              <div style={{ fontSize: 11, color: "#4a7a9b" }}>Revise e corrija se necessário</div>
            </div>
          </div>
          <ExtractedInput label="Vara"               value={extracted.VARA || ""}               onChange={setExt("VARA")} />
          <ExtractedInput label="Comarca"            value={extracted.COMARCA || ""}            onChange={setExt("COMARCA")} />
          <ExtractedInput label="Número do Processo" value={extracted.NUMERO_PROCESSO || ""}   onChange={setExt("NUMERO_PROCESSO")} />
          <ExtractedInput label="Nome do Autor"      value={extracted.NOME_AUTOR || ""}         onChange={setExt("NOME_AUTOR")} />
          <ExtractedInput label="Nome do Réu"        value={extracted.NOME_REU || ""}           onChange={setExt("NOME_REU")} />
          <ExtractedInput label="CNPJ do Réu"        value={extracted.CNPJ_REU || ""}           onChange={setExt("CNPJ_REU")} />

          <div style={{ borderTop: "1px solid #1e3a55", margin: "18px 0 16px" }} />
          <div style={{ fontSize: 10, fontWeight: "bold", color: "#5bc98e", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 14 }}>📋 Análise da Inicial</div>
          <ExtractedInput label="Resumo dos fatos narrados pelo autor" value={extracted.resumo_fatos_autor || ""}    onChange={setExt("resumo_fatos_autor")}    rows={3} />
          <ExtractedInput label="Pedidos do autor"                     value={extracted.pedidos_autor || ""}          onChange={setExt("pedidos_autor")}          rows={2} />
          <ExtractedInput label="Documentos juntados pelo autor"       value={extracted.documentos_juntados || ""}   onChange={setExt("documentos_juntados")}    rows={3} />
          <ExtractedInput label="Teses jurídicas do autor"             value={extracted.teses_autor || ""}            onChange={setExt("teses_autor")}            rows={2} />
          <ExtractedInput label="Pontos frágeis / inconsistências"      value={extracted.pontos_fracos_inicial || ""} onChange={setExt("pontos_fracos_inicial")}  rows={3} />

          {/* PRELIMINARES — highlighted if detected */}
          <div style={{ marginTop: 4 }}>
            <div style={{
              background: temPreliminar ? "#1a2d1a" : "#1a1a2d",
              border: `1px solid ${temPreliminar ? "#2a6e4a" : "#2a2a6e"}`,
              borderRadius: 10, padding: "14px 16px", marginBottom: 14
            }}>
              <div style={{ fontSize: 10, fontWeight: "bold", color: temPreliminar ? "#5bc98e" : "#9b9bff", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 6 }}>
                {temPreliminar ? "⚠️ PRELIMINARES DETECTADAS — SEÇÃO II SERÁ INCLUÍDA" : "ℹ️ PRELIMINARES — nenhuma detectada"}
              </div>
              <ExtractedInput
                label={temPreliminar ? "Preliminares identificadas (edite se necessário)" : "Preliminares — deixe vazio se não houver"}
                value={extracted.preliminares || ""}
                onChange={setExt("preliminares")}
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Manual */}
        <div style={{ overflowY: "auto", padding: 24 }}>
          {/* Fixed fields */}
          <div style={{ background: "#1a2d1a", border: "1px solid #2a6e4a", borderRadius: 10, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ fontSize: 10, fontWeight: "bold", color: "#5bc98e", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>🔒 Campos Fixos (automáticos)</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["Advogado", ADVOGADO_NOME], ["OAB", ADVOGADO_OAB], ["Data", getTodayFormatted()]].map(([l, v]) => (
                <div key={l}>
                  <div style={{ fontSize: 10, color: "#4a7a9b", textTransform: "uppercase", letterSpacing: 1 }}>{l}</div>
                  <div style={{ fontSize: 12, color: "#d6e8f5", marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <ManualInput label="Endereço do Escritório" value={manual.ENDERECO_ESCRITORIO || ""}
            onChange={setMan("ENDERECO_ESCRITORIO")} placeholder="Rua X, nº 100, Sala 00, Salvador/BA" />
          <ManualInput label="Cidade de Assinatura" value={manual.CIDADE_ASSINATURA || ""}
            onChange={setMan("CIDADE_ASSINATURA")} placeholder="Salvador/BA" />

          {/* Súmula 492 */}
          <div style={{ background: "#1a1a2d", border: "1px solid #2a2a6e", borderRadius: 10, padding: "16px", marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: "bold", color: "#9b9bff", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 6 }}>
              📜 TESE — INAPLICABILIDADE DA SÚMULA 492 DO STF
            </div>
            <div style={{ fontSize: 12, color: "#8888cc", lineHeight: 1.5, marginBottom: 14 }}>
              Argui que a Súmula 492 não se aplica quando não há culpa comprovada da locadora.
            </div>
            <div style={{ fontSize: 11, color: "#d6e8f5", marginBottom: 10, fontWeight: "bold" }}>Inserir esta tese na contestação?</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setUsarSumula(true)} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: "bold", background: usarSumula === true ? "linear-gradient(135deg, #1a6eb5, #4db8ff)" : "#1a2d44", color: usarSumula === true ? "#fff" : "#4a7a9b", outline: usarSumula === true ? "2px solid #4db8ff" : "none" }}>✅ Sim, inserir</button>
              <button onClick={() => setUsarSumula(false)} style={{ flex: 1, padding: "10px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 13, fontWeight: "bold", background: usarSumula === false ? "#2d1a1a" : "#1a2d44", color: usarSumula === false ? "#ff8888" : "#4a7a9b", outline: usarSumula === false ? "2px solid #ff6666" : "none" }}>❌ Não inserir</button>
            </div>
          </div>

          {/* Estrutura preview */}
          <div style={{ background: "#0d1f2d", border: "1px solid #1e3a55", borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: "bold", color: "#4db8ff", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>📐 Estrutura da contestação</div>
            {(() => {
              const secs = ["I. Da correta compreensão dos fatos"];
              if (temPreliminar) secs.push("II. Das preliminares");
              if (usarSumula)    secs.push(`${temPreliminar ? "III" : "II"}. Inaplicabilidade da Súmula 492`);
              const tIdx = secs.length + 1;
              const toR  = (n) => ["I","II","III","IV","V","VI"][n-1];
              secs.push(`${toR(tIdx)}. Tese principal`);
              secs.push(`${toR(tIdx+1)}. Da ausência de comprovação`);
              secs.push(`${toR(tIdx+2)}. Dos pedidos`);
              return secs.map((s, i) => (
                <div key={i} style={{ fontSize: 12, color: i === 0 ? "#d6e8f5" : i === 1 && temPreliminar ? "#f0c060" : i === (temPreliminar ? 2 : 1) && usarSumula ? "#9b9bff" : "#d6e8f5aa", padding: "3px 0", borderBottom: "1px solid #1e3a5533" }}>{s}</div>
              ));
            })()}
          </div>

          {/* Tese principal */}
          <div style={{ borderTop: "1px solid #1e3a55", paddingTop: 16, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: "bold", color: "#4db8ff", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 14 }}>⚡ TESE PRINCIPAL DA DEFESA</div>
            <ManualInput label="Oriente a IA sobre o argumento central (opcional)" value={manual.TESE_PRINCIPAL || ""}
              onChange={setMan("TESE_PRINCIPAL")} rows={4}
              placeholder="Ex: Validade da cobrança com base na cláusula X. Ausência de prova do alegado defeito." />
            <div style={{ fontSize: 11, color: "#4a7a9b", marginTop: -8, marginBottom: 4 }}>Se não preencher, a IA desenvolverá a melhor tese com base nos documentos.</div>
          </div>

          {error && <div style={{ background: "#ff444422", border: "1px solid #ff444444", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#ff8888", marginBottom: 16 }}>{error}</div>}

          <button onClick={handleGenerate} disabled={loading} style={{
            width: "100%", padding: 14, borderRadius: 10, border: "none",
            background: loading ? "#1e3a55" : "linear-gradient(135deg, #1a6eb5, #4db8ff)",
            color: loading ? "#4a7a9b" : "#fff", fontSize: 15, fontWeight: "bold",
            cursor: loading ? "not-allowed" : "pointer", letterSpacing: 1,
          }}>
            {loading ? `⏳ ${loadingMsg}` : "⚖️ GERAR CONTESTAÇÃO COMPLETA"}
          </button>
          <button onClick={() => setStep("upload")} style={{ width: "100%", marginTop: 10, padding: 10, borderRadius: 10, border: "1px solid #1e3a55", background: "transparent", color: "#4a7a9b", fontSize: 13, cursor: "pointer" }}>
            ← Voltar e adicionar documentos
          </button>
        </div>
      </div>
    </div>
    );
  }

  // ── STEP: RESULT ──────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#09151f", height: "100vh", color: "#d6e8f5", display: "flex", flexDirection: "column" }}>
      <Header active={2} extra={
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={handleDownload} style={{ background: "linear-gradient(135deg, #1a6eb5, #4db8ff)", border: "none", borderRadius: 8, padding: "8px 20px", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: "bold" }}>
            ⬇ Baixar .doc
          </button>
          <button onClick={() => setStep("review")} style={{ background: "transparent", border: "1px solid #1e3a55", borderRadius: 8, padding: "8px 14px", color: "#4a7a9b", cursor: "pointer", fontSize: 12 }}>← Editar</button>
          <button onClick={resetAll} style={{ background: "transparent", border: "1px solid #1e3a55", borderRadius: 8, padding: "8px 14px", color: "#4a7a9b", cursor: "pointer", fontSize: 12 }}>+ Novo caso</button>
        </div>
      } />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden" }}>
        <div style={{ borderRight: "1px solid #1e3a55", overflowY: "auto", padding: "20px 18px", background: "#0d1f2d" }}>
          <div style={{ fontSize: 10, fontWeight: "bold", color: "#5bc98e", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 16 }}>📋 Resumo do Caso</div>
          {[["Processo", extracted?.NUMERO_PROCESSO], ["Vara", extracted?.VARA], ["Comarca", extracted?.COMARCA], ["Autor", extracted?.NOME_AUTOR], ["Réu", extracted?.NOME_REU]].map(([label, val]) => val && (
            <div key={label} style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 10, color: "#4a7a9b", textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
              <div style={{ fontSize: 12, marginTop: 2 }}>{val}</div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #1e3a5555", marginTop: 12, paddingTop: 12 }}>
            <div style={{ fontSize: 10, color: "#9b9bff", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Súmula 492</div>
            <div style={{ fontSize: 12, color: usarSumula ? "#5bc98e" : "#ff8888" }}>{usarSumula ? "✅ Incluída" : "❌ Não incluída"}</div>
          </div>
          {extracted?.preliminares && extracted.preliminares.trim() && (
            <div style={{ borderTop: "1px solid #1e3a5555", marginTop: 12, paddingTop: 12 }}>
              <div style={{ fontSize: 10, color: "#f0c060", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>⚠️ Preliminares</div>
              <div style={{ fontSize: 11, color: "#d6e8f5aa", lineHeight: 1.6 }}>{extracted.preliminares}</div>
            </div>
          )}
        </div>
        <div style={{ overflowY: "auto", padding: "36px 48px", background: "#f7f3ec" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {!contestacao.trim() ? (
              <div style={{ textAlign: "center", color: "#888", fontFamily: "Arial, sans-serif", paddingTop: 60 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>⚠️</div>
                <div style={{ fontSize: 14 }}>O texto da contestação não foi recebido.</div>
                <button onClick={() => setStep("review")} style={{ marginTop: 16, padding: "10px 20px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: "pointer", fontSize: 13 }}>
                  ← Voltar e tentar novamente
                </button>
              </div>
            ) : (
              <textarea
                readOnly
                value={contestacao}
                style={{
                  width: "100%",
                  minHeight: "80vh",
                  fontFamily: "'Georgia','Times New Roman',serif",
                  fontSize: 13.5,
                  lineHeight: 1.9,
                  color: "#1a1a1a",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  resize: "none",
                  textAlign: "justify",
                  whiteSpace: "pre-wrap",
                  boxSizing: "border-box",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
