import { useState, useRef } from "react";

// ─── FIXED CONSTANTS ──────────────────────────────────────────────────────────
const ADVOGADO_NOME = "LUCAS MIRANDA";
const ADVOGADO_OAB  = "OAB/BA 21.641";

function getTodayFormatted() {
  const d = new Date();
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
}

// ─── TESE SÚMULA 492 ──────────────────────────────────────────────────────────
const TESE_SUMULA_492 = `[SECAO_SUMULA]. VEÍCULO LOCADO NA ÉPOCA DOS FATOS. A INAPLICABILIDADE DO ENUNCIADO 492 DA SÚMULA DO STF.

99001. Por meio do enunciado 492 de sua Súmula, o STF chegou a entendimento segundo o qual "a empresa locadora de veículos responde, civil e solidariamente com o locatário, pelos danos por este causados a terceiro, no uso do carro locado".

99002. Ocorre que, analisando-se os fundamentos fáticos e jurídicos dos precedentes que justificaram a emissão do enunciado, vê-se que a razão de decidir dos referidos precedentes não se aplica ao presente caso.

99003. É o que será demonstrado, após uma breve contextualização histórica.

[SECAO_SUMULA].1. Os precedentes que deram origem ao enunciado 492 da Súmula do STF.

99004. O Enunciado 492 da Súmula do STF foi editado em 1966, ainda sob a vigência do Código Civil de 1916 e antes mesmo da Constituição de 1988. Ele se originou de basicamente três precedentes.

99005. O primeiro precedente decorreu do Recurso Extraordinário 60.477, julgado em 07/06/1996, teve como contexto fático a ausência de cautela da locadora ao locar veículo para sujeito que não possuía habilitação. Fundado na noção de culpa, o referido julgado entendeu que a locadora seria solidariamente responsável com o condutor do veículo.

99006. O segundo acórdão foi o Recurso Extraordinário n. 62.247, julgado em 1967, em que a locadora foi considerada responsável sob o fundamento de "culposa negligência por falta de adequada cobertura da eventual incapacidade econômica do arrendatário".

99007. Por fim, tem-se o Recurso Extraordinário n. 63.562, que, baseando-se nos dois anteriores, afirma que a empresa locadora possui responsabilidade solidária pelos acidentes causados pelo motorista do veículo locado.

99008. O que se vê é que a origem do enunciado teve como objetivo reconhecer a responsabilidade solidária da locadora quando verificada a existência de culpa desta. Isto é, nas hipóteses de responsabilidade civil subjetiva.

99009. Frise-se que todos os precedentes exigiram conduta culposa da locadora — seja por firmar contrato com pessoa inabilitada ou com locatário com incapacidade econômica. Tais circunstâncias devem ser respeitadas para fins da aplicação do enunciado, inclusive em atenção ao art. 926, §2º, do CPC.

99010. Contudo, o enunciado levou os Tribunais à sua aplicação indiscriminada, criando hipótese de responsabilidade civil objetiva não prevista no ordenamento jurídico brasileiro.

[SECAO_SUMULA].2. A descriteriosa aplicação do enunciado 492 da Súmula do STF e a violação a normas relativas à responsabilidade civil.

99011. Como demonstrado, o enunciado 492 foi originado de precedentes que reconheceram a responsabilidade da locadora em razão da existência de culpa. Isso não obstante, verifica-se na jurisprudência a aplicação do referido enunciado sem analisar as circunstâncias fáticas dos precedentes, criando-se uma espécie de responsabilidade objetiva.

99012. Essa aplicabilidade viola uma série de normas jurídicas. Primeiro, há violação às normas decorrentes do sistema de precedentes judiciais, sobretudo o art. 926, §2º, do CPC, que visa evitar a criação de enunciados de súmula de forma abstrata, sem transmitir as circunstâncias fáticas dos casos concretos.

99013. Segundo, há violação à norma decorrente do art. 265 do Código Civil, segundo a qual "a solidariedade não se presume; resulta da lei ou da vontade das partes".

99014. Terceiro. Isso também implica violação às normas decorrentes dos arts. 932 c/c art. 933 do Código Civil. O art. 932 estabelece rol taxativo com hipóteses de responsabilidade solidária, não contendo qualquer menção à hipótese de locadoras de veículo responder pelos danos causados pelo locatário.

99015. Quarto. A dispensa da culpa da locadora também viola o art. 927, parágrafo único, Código Civil. O risco de ocorrência de acidente de veículos não é um risco inerente à atividade de locação de veículos.

99016. Quinto. A responsabilização sem prática de ato ilícito também viola a norma decorrente do art. 931, Código Civil. O veículo locado estava em perfeito estado de conservação no momento de sua locação — fato incontroverso.

99017. Assim, vê-se que o enunciado n. 492 da Súmula do STF não deve ser aplicado em casos que não for comprovada a culpa da locadora de automóveis, de modo que os pedidos formulados em inicial devem ser julgados improcedentes.`;

// ─── PLAYBOOK DE TESES ────────────────────────────────────────────────────────
const PLAYBOOK = {
  apenas_bo: `DA NÃO COMPROVAÇÃO DE CULPA E NEXO DE CAUSALIDADE

O motorista do veículo de responsabilidade da ré não praticou conduta culposa no referido acidente, o que impede a responsabilização da LM. Como se sabe, o proprietário do veículo só é responsabilizado por acidentes efetivamente causados pelo condutor de seu automóvel. Para tanto, é necessário que se comprove que o motorista agiu com culpa, o que não se vê no presente caso.

Primeiro, porque a parte autora não comprovou que o acidente ocorreu na forma como narrou. A autora se limita a juntar boletim de ocorrência produzido unilateralmente que, como se sabe, não se presta como prova idônea, pois não respeita o contraditório. O documento contém meras declarações das partes, não gozando de credibilidade probatória. É nesse sentido, inclusive, que vem entendendo a jurisprudência pátria:

"ACIDENTE DE TRÂNSITO — BOLETIM DE OCORRÊNCIA — PROVA UNILATERAL — ÔNUS DA PROVA — ART. 373, INC. I, DO CPC. Não basta ao autor alegar, devendo efetivamente provar os fatos constitutivos de seu direito, sob pena de improcedência de seu pedido. Boletim de Ocorrência é prova unilateral dos fatos. Ausência de outras provas. Recurso parcialmente provido." (Proc. 0008403-82.2019.8.26.0004 — TJSP — Rel.: Rodrigo de Castro Carvalho — 3ª Turma Recursal — DJe em 14/04/2021)

Segundo, a mera versão unilateral constante do boletim de ocorrência não é suficiente para demonstrar a dinâmica do acidente. O relato contido no documento policial baseia-se exclusivamente na versão apresentada pelos envolvidos, sem qualquer análise técnica ou investigação aprofundada. Como se sabe, é ônus de quem alega provar o fato constitutivo de seu direito (art. 373, I, CPC). Contudo, a parte autora não se desincumbe de seu ônus ao não produzir provas mínimas do ocorrido.`,

  alega_perda_total: `DA AUSÊNCIA DE COMPROVAÇÃO DA PERDA TOTAL

Primeiro, o valor apontado pela autora está absolutamente incompatível com os supostos danos. Como se extrai das imagens, não é possível identificar a extensão dos danos que justificariam uma indenização integral.

Segundo, é pacífico na jurisprudência que qualifica-se perda total do veículo segurado quando o valor necessário para realizar seu conserto atinge 75% do valor do bem: "Qualifica-se perda total do veículo segurado quando o valor necessário para realizar seu conserto atinge 75% do valor do bem." (TJSP; Apelação Cível 0002121-84.2015.8.26.0063; Rel.: Adilson de Araujo; 31ª Câmara de Direito Privado; j. 23/05/2017)

No caso, a autora não comprova adequadamente o valor de mercado do veículo na data do sinistro, de modo que não há prova de que houve perda total. Trata-se de afirmação unilateral da demandante sem qualquer comprovação. Seria dever da parte demandante a apresentação de três orçamentos para o conserto do veículo, sobretudo para garantir a lisura da quantificação dos danos, demonstrando, inclusive, que o valor do conserto seria superior ao limite de 75% do valor do bem.`,

  apenas_um_orcamento: `DA INSUFICIÊNCIA PROBATÓRIA DO VALOR INDENIZATÓRIO

A reparação deve se ater ao efetivo prejuízo, sob pena de enriquecimento ilícito da parte autora. Seria dever da parte demandante a apresentação de três orçamentos para o conserto de veículos, sobretudo para garantir a lisura da quantificação dos danos. Trata-se de conduta exigida pelo princípio da boa-fé objetiva, na medida em que a parte tem o dever de mitigar os próprios danos.

Como se extrai dos documentos, o orçamento do conserto foi elaborado de forma unilateral, sem consulta a terceiros especializados. Sem verificar a opinião de profissionais independentes, a parte autora arbitrou os valores que entendeu serem devidos, o que resultou em valor incompatível com os danos que se extraem das imagens.`,

  orcamento_propria_seguradora: `No presente caso, a autora optou por realizar orçamento próprio sem sequer consultar um terceiro desinteressado na lide, cujo valor extrapola em muito o que seria razoável, evidenciando o superfaturamento da indenização paga ao segurado.`,

  colisao_traseira_autor: `DA CULPA EXCLUSIVA DO AUTOR PELA COLISÃO TRASEIRA

A narrativa apresentada pelo autor evidencia de forma cristalina sua própria culpa pelo acidente, na medida em que admite expressamente não ter mantido distância segura do veículo que transitava à sua frente. O art. 29 do Código de Trânsito Brasileiro estabelece de forma inequívoca que "o condutor deverá guardar distância de segurança lateral e frontal entre o seu e os demais veículos".

A jurisprudência é pacífica no sentido de que aquele que colide na traseira de outro veículo presume-se culpado pelo acidente, cabendo-lhe o ônus de provar fato impeditivo, modificativo ou extintivo do direito do autor. No caso, o demandante não logrou êxito em demonstrar qualquer excludente de responsabilidade. A conduta imprudente do autor foi a causa exclusiva do acidente, rompendo qualquer nexo de causalidade entre eventual conduta dos ocupantes do veículo da ré e os danos alegados.`,

  pede_danos_morais_sem_lesao: `DA AUSÊNCIA DE DANOS MORAIS INDENIZÁVEIS

A ausência dos pressupostos para a responsabilização civil já é suficiente para indeferir os danos morais pleiteados. No entanto, por cautela, passa a demonstrar especificamente a ausência de danos.

Conforme entendimento do Superior Tribunal de Justiça, os danos morais decorrentes de acidente de trânsito sem vítima não são presumidos: "Não caracteriza dano moral in re ipsa os danos decorrentes de acidentes de veículos automotores sem vítimas, os quais normalmente se resolvem por meio de reparação de danos patrimoniais. A condenação à compensação de danos morais, nesses casos, depende de comprovação de circunstâncias peculiares que demonstrem o extrapolamento da esfera exclusivamente patrimonial." (REsp nº 1.653.413/RJ — Rel. Min. Marco Aurélio Bellizze — julgado em 05/06/2018)

Deve a parte autora comprovar em que medida sofreu danos morais, quais os direitos foram violados e de que modo a parte ré contribuiu para essa situação. Não foi o que ocorreu no presente caso. O fato de o autor não poder utilizar o veículo não configura, por si só, dano moral indenizável — trata-se de mero aborrecimento decorrente da impossibilidade temporária de uso do bem, o que não atinge direitos da personalidade.`,
};

// ─── BIBLIOTECA DE MODELOS ────────────────────────────────────────────────────
const MODELOS = {
  multa_transito: {
    tipo: "multa_transito",
    titulo: "Multa de Trânsito",
    descricao: "Cobrança de multa de trânsito ao locatário. Responsabilidade contratual do locatário. Força obrigatória dos contratos. Art. 257, §8º do CTB.",
    argumentos_possiveis: [
      "Força obrigatória dos contratos — pacta sunt servanda",
      "Responsabilidade contratual do locatário pelo pagamento de multas (cláusula 5.3)",
      "Obrigação legal da LM de indicar o condutor (art. 257, §8º, CTB)",
      "Pagamento da multa não impede recurso administrativo (art. 284, §2º, CTB)",
      "Ausência de danos morais",
      "Cobrança em dobro indevida — inexistência de prática abusiva",
    ],
  },
  km_excedente: {
    tipo: "km_excedente",
    titulo: "Quilômetro Excedente",
    descricao: "Cobrança por quilometragem excedente ao contratado. Validade da cláusula contratual. Ausência de abusividade.",
    argumentos_possiveis: [
      "Força obrigatória dos contratos — pacta sunt servanda",
      "Validade da cláusula de cobrança por KM excedente",
      "Ausência de abusividade — desgaste do veículo justifica a cobrança",
      "Locatário declarou ciência das condições gerais registradas em cartório",
      "Ausência de nulidade contratual",
    ],
  },
  acidente_transito: {
    tipo: "acidente_transito",
    titulo: "Acidente de Trânsito",
    descricao: "Ação indenizatória decorrente de acidente de trânsito envolvendo veículo da LM. Ausência de culpa. Não comprovação do nexo causal.",
    argumentos_possiveis: [
      "Não comprovação de culpa e nexo de causalidade do condutor do veículo da ré",
      "Boletim de Ocorrência como prova unilateral — insuficiência probatória",
      "Ausência de comprovação dos danos materiais",
      "Ausência de comprovação da perda total (critério de 75% do valor do bem)",
      "Insuficiência de um único orçamento",
      "Orçamento elaborado pela própria seguradora autora — superfaturamento",
      "Culpa exclusiva do autor (colisão traseira — presunção de culpa)",
      "Inaplicabilidade da Súmula 492 do STF",
      "Inaplicabilidade do CDC — não há relação de consumo entre LM e terceiro vítima",
      "Ausência de danos morais — acidente sem vítima (STJ — REsp 1.653.413/RJ)",
      "Ausência de impugnação específica aos danos — não juntou documentação de propriedade do veículo",
    ],
  },
  chave_reserva: {
    tipo: "chave_reserva",
    titulo: "Chave Reserva",
    descricao: "Cobrança pela não devolução da chave reserva ao final do contrato. Validade contratual. Ausência de danos morais.",
    argumentos_possiveis: [
      "Força obrigatória dos contratos — devolução da chave reserva era obrigação contratual (cláusula 7.1)",
      "Ônus da prova — fato negativo, cabe ao autor provar a entrega",
      "Termo de vistoria comprova a ausência da chave",
      "Ausência de ato ilícito — cobrança legítima",
      "Ausência de danos morais",
      "Cobrança em dobro indevida",
      "Ausência de comprovação da negativação",
    ],
  },
  carro_reserva: {
    tipo: "carro_reserva",
    titulo: "Carro Reserva / Atraso no Conserto",
    descricao: "Ausência de obrigação contratual de fornecimento de carro reserva. Cláusula expressa de exclusão. Cobrança durante conserto — cláusula 6.4.",
    argumentos_possiveis: [
      "Ausência de obrigação contratual de carro reserva (cláusula 6.5)",
      "Cobrança das mensalidades durante o conserto — cláusula 6.4 prevê expressamente",
      "Culpa do locatário pelo acidente — causou os danos no veículo",
      "Informação ao locatário sobre o prazo de conserto",
      "Ausência de danos morais",
    ],
  },
  multa_rescisoria: {
    tipo: "multa_rescisoria",
    titulo: "Multa Rescisória",
    descricao: "Validade da multa por rescisão antecipada do contrato. Veículo 0km adquirido exclusivamente para a locação. Prazo de entrega cumprido.",
    argumentos_possiveis: [
      "Força obrigatória dos contratos — multa rescisória prevista em cláusula clara",
      "Veículo 0km adquirido exclusivamente para o contrato — justificativa da multa",
      "Prazo de entrega cumprido dentro do estipulado (65 dias úteis)",
      "Locatário foi informado do prazo de entrega previamente",
      "Ausência de mora da locadora",
      "Ausência de danos morais",
    ],
  },
  atraso_entrega: {
    tipo: "atraso_entrega",
    titulo: "Atraso na Entrega / Não Comparecimento do Locatário",
    descricao: "Veículo disponibilizado dentro do prazo. Não comparecimento do locatário. Ativação contratual. Inaplicabilidade do art. 35, III, CDC.",
    argumentos_possiveis: [
      "Veículo disponibilizado dentro do prazo contratual",
      "Não comparecimento do locatário para retirada — presunção de início da locação (cláusula 1.7)",
      "Inaplicabilidade do art. 35, III, CDC — não houve descumprimento da oferta",
      "Cobranças legítimas — ativação contratual regular",
      "Cláusula exonerativa de responsabilidade por atraso da montadora",
      "Ausência de comprovação da negativação",
      "Ausência de danos morais",
    ],
  },
  manutencao_corretiva: {
    tipo: "manutencao_corretiva",
    titulo: "Manutenção Corretiva x Preventiva",
    descricao: "Distinção entre manutenção preventiva (LM) e corretiva (locatário). Desgaste de peças é corretivo. Responsabilidade do locatário pelo pagamento.",
    argumentos_possiveis: [
      "Distinção contratual entre manutenção preventiva e corretiva",
      "Substituição de peças por desgaste é manutenção corretiva — responsabilidade do locatário",
      "Manutenção preventiva refere-se a revisões periódicas planejadas — não ao caso",
      "Manual do proprietário confirma a distinção",
      "Ausência de ilicitude na cobrança",
      "Ausência de danos morais",
    ],
  },
  venda_usado: {
    tipo: "venda_usado",
    titulo: "Venda de Veículo Usado",
    descricao: "Compra e venda de veículo usado. Ciência do comprador quanto ao estado do bem. Laudo de vistoria prévia. Garantia expirada.",
    argumentos_possiveis: [
      "Veículo alienado nas condições negociadas — ciência do comprador",
      "Laudo de vistoria prévia demonstra estado do bem",
      "Comprador sabia que o veículo era usado — considerado na formação do preço",
      "Garantia expirada — ausência de responsabilidade da vendedora",
      "Ausência de vício oculto — documentos comprovam",
      "Ausência de danos morais",
    ],
  },
  assinatura_digital: {
    tipo: "assinatura_digital",
    titulo: "Assinatura Digital / Validade Contratual",
    descricao: "Validade da assinatura eletrônica. Todas as páginas do contrato foram assinadas. Validade do reajuste. Prazo de reparo dentro do CDC.",
    argumentos_possiveis: [
      "Validade da assinatura digital em todas as páginas (marca d'água eletrônica)",
      "Reparo realizado dentro do prazo de 30 dias do CDC (art. 18, §1º)",
      "Ausência de obrigação de carro reserva — não contratada",
      "Validade do reajuste — previsão contratual",
      "Ausência de danos morais",
    ],
  },
  devolucao_veiculo: {
    tipo: "devolucao_veiculo",
    titulo: "Devolução do Veículo / Cobrança Durante Período de Devolução",
    descricao: "Cobranças devidas até a devolução efetiva do veículo. Veículo permaneceu com o locatário. Procedimento de retirada em localidade sem concessionária.",
    argumentos_possiveis: [
      "Cobranças devidas até a devolução efetiva do bem — previsão contratual",
      "Locatário continuou usufruindo do veículo durante o período questionado",
      "Procedimento de retirada em localidade sem concessionária — prazo necessário",
      "Ausência de ato ilícito — cobrança legítima",
      "Ausência de comprovação da negativação",
      "Ausência de danos morais",
    ],
  },
  negativacao: {
    tipo: "negativacao",
    titulo: "Ausência de Comprovação da Negativação",
    descricao: "Autor não comprova a negativação alegada. Ausência de prova do dano. Regularização antes da ação.",
    argumentos_possiveis: [
      "Ausência de comprovação da negativação — SERASA informa inexistência",
      "Problema resolvido administrativamente antes da ação",
      "Ausência de dano — cobrança legítima",
      "Desvio produtivo não configurado — situação resolvida com celeridade",
      "Legalidade da taxa administrativa prevista em contrato",
      "Valor pleiteado desproporcional — ausência de razoabilidade",
    ],
  },
  geral: {
    tipo: "geral",
    titulo: "Caso Geral / Outros",
    descricao: "Caso que não se enquadra nos modelos específicos. Argumentação geral baseada nos fatos da inicial.",
    argumentos_possiveis: [
      "Ausência de ato ilícito",
      "Força obrigatória dos contratos — pacta sunt servanda",
      "Ausência de danos morais",
      "Ausência de comprovação dos danos materiais",
      "Ausência de nexo causal",
      "Enriquecimento ilícito do autor",
    ],
  },
};

function buildPlaybookInstructions(gatilhos) {
  if (!gatilhos) return "";
  const g = gatilhos;
  const teses = [];
  if (g.apenas_bo === "true")                    teses.push(PLAYBOOK.apenas_bo);
  if (g.alega_perda_total === "true")             teses.push(PLAYBOOK.alega_perda_total);
  if (g.apenas_um_orcamento === "true") {
    let t = PLAYBOOK.apenas_um_orcamento;
    if (g.orcamento_propria_seguradora === "true") t += "\n\n" + PLAYBOOK.orcamento_propria_seguradora;
    teses.push(t);
  }
  if (g.colisao_traseira_autor === "true")        teses.push(PLAYBOOK.colisao_traseira_autor);
  if (g.pede_danos_morais_sem_lesao === "true")   teses.push(PLAYBOOK.pede_danos_morais_sem_lesao);
  return teses.length > 0
    ? `\n\nTESES DO PLAYBOOK JURÍDICO — INSERIR OBRIGATORIAMENTE:\n${teses.join("\n\n---\n")}`
    : "";
}

function applySumulaSection(text, sectionNum) {
  const roman = ["I","II","III","IV","V","VI","VII","VIII"][sectionNum - 1] || String(sectionNum);
  return text.replace(/\[SECAO_SUMULA\]/g, roman);
}

function renumberParagraphs(text) {
  let counter = 1;
  return text.split("\n").map(line => {
    if (/^\d+\.\s/.test(line)) {
      const rest = line.replace(/^\d+\.\s+?/, "");
      return `${counter++}. ${rest}`;
    }
    return line;
  }).join("\n");
}

// ─── PROMPTS ──────────────────────────────────────────────────────────────────
const EXTRACT_SYSTEM = `Você é um assistente jurídico especializado. Analise o(s) documento(s) anexados (petição inicial e documentos do processo) e extraia as informações em formato JSON puro, sem markdown, sem backticks, sem explicações.

Retorne EXATAMENTE este JSON:
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
  "preliminares": "Preliminares identificadas que podem ser arguidas em defesa (ex: ilegitimidade passiva ad causam, inépcia, prescrição, decadência). Deixe VAZIO se não houver.",
  "tipo_caso": "Um dos seguintes: multa_transito | km_excedente | acidente_transito | chave_reserva | carro_reserva | multa_rescisoria | atraso_entrega | manutencao_corretiva | venda_usado | assinatura_digital | devolucao_veiculo | negativacao | geral",
  "argumentos_sugeridos": ["Lista de argumentos jurídicos específicos que podem ser suscitados na contestação, baseados nos fatos concretos desta inicial. Seja específico e detalhado. Inclua ao menos 4 argumentos."],
  "gatilhos": {
    "apenas_bo": "true se a prova principal é apenas boletim de ocorrência. false caso contrário",
    "alega_perda_total": "true se o autor alega perda total do veículo. false caso contrário",
    "apenas_um_orcamento": "true se o autor apresentou apenas um orçamento. false caso contrário",
    "orcamento_propria_seguradora": "true se o orçamento foi elaborado pela própria seguradora autora. false caso contrário",
    "colisao_traseira_autor": "true se o autor colidiu na traseira do veículo da ré. false caso contrário",
    "pede_danos_morais_sem_lesao": "true se o autor pede danos morais mas não há lesão corporal comprovada. false caso contrário"
  }
}`;

function buildContestacaoSystem(usarSumula, temPreliminar, argumentosSelecionados) {
  const toRoman = (n) => ["I","II","III","IV","V","VI","VII","VIII"][n-1];
  let idx = 1;
  const secFatos    = toRoman(idx++);
  const secPrelim   = temPreliminar ? toRoman(idx++) : null;
  const secSumula   = usarSumula    ? toRoman(idx++) : null;
  const secTese     = toRoman(idx++);
  const secAusencia = toRoman(idx++);
  const secPedidos  = toRoman(idx++);
  const sumulaNum   = secSumula ? ["I","II","III","IV","V","VI","VII","VIII"].indexOf(secSumula) + 1 : null;

  const prelimBlock = temPreliminar ? `
${secPrelim}. DAS PRELIMINARES
[Desenvolva cada preliminar identificada com profundidade e fundamento legal.]
` : "";

  const sumulaBlock = usarSumula ? `
[INSERIR_TESE_SUMULA_492_AQUI]
` : "";

  const argBlock = argumentosSelecionados && argumentosSelecionados.length > 0
    ? `\n\nARGUMENTOS SELECIONADOS PELO ADVOGADO — DESENVOLVA CADA UM EM TÓPICO PRÓPRIO:\n${argumentosSelecionados.map((a, i) => `${i+1}. ${a}`).join("\n")}`
    : "";

  return `Você é um advogado especializado em litigância empresarial. Gere uma contestação completa e profissional seguindo EXATAMENTE esta estrutura:

AO JUÍZO DA {VARA} DA COMARCA DE {COMARCA}

Processo n. {NUMERO_PROCESSO}

{NOME_REU}, pessoa jurídica de direito privado inscrita no CNPJ sob n. {CNPJ_REU}, por intermédio de seus advogados (procuração em anexo), com escritório situado na {ENDERECO_ESCRITORIO}, vem a Vossa Excelência apresentar

CONTESTAÇÃO

em face da demanda ajuizada por {NOME_AUTOR} pelas razões a seguir expostas.

1. Inicialmente, requer que todas as intimações e comunicações relativas aos presentes autos sejam expedidas exclusivamente em nome do advogado ${ADVOGADO_NOME} (${ADVOGADO_OAB}), sob pena de nulidade nos termos do art. 272, §§2º e 5º e art. 280 do Código de Processo Civil.

${secFatos}. DA CORRETA COMPREENSÃO DOS FATOS

[Narre os fatos sob a ótica do réu com parágrafos numerados. Impugne os documentos do autor ao longo desta seção — NÃO crie subseção separada para isso.]
${prelimBlock}${sumulaBlock}
${secTese}. {TITULO_TESE_PRINCIPAL}

[Desenvolva CADA argumento selecionado em seu próprio subtópico, com fundamentação extensa, coesa e bem fundamentada. Cite legislação e jurisprudência pertinente. Cada argumento deve ter ao menos 3 parágrafos.]
${argBlock}

${secAusencia}. DA AUSÊNCIA DE COMPROVAÇÃO DO ALEGADO NA INICIAL

[Desenvolva com base nos pontos frágeis identificados. Todos os pedidos da petição inicial devem ser impugnados.]

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
- NUMERE todos os parágrafos de texto com números arábicos sequenciais
- Cada argumentação jurídica deve ser construída em um tópico próprio
- A fundamentação deve ser extensa, coesa, bem fundamentada e em texto contínuo dentro de cada tópico
- NÃO crie seção separada de impugnação de documentos — integre à seção de fatos
- NÃO inclua seção de tempestividade
- Retorne APENAS o texto da contestação, sem markdown, sem asteriscos
${usarSumula ? `- Onde aparece [INSERIR_TESE_SUMULA_492_AQUI], mantenha o marcador exato` : ""}
${sumulaNum ? `- A tese da Súmula 492 está na seção ${secSumula}` : ""}`;
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────
async function extractPdfText(file) {
  const pdfjsLib = await import("pdfjs-dist");
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
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

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function buildContentBlocks(files, textPrompt) {
  const blocks = [];
  for (const f of files) {
    if (f.type === "application/pdf") {
      blocks.push({ type: "text", text: `=== DOCUMENTO: ${f.name} ===\n\n${f.text || "(texto não extraído)"}` });
    } else if (f.base64) {
      blocks.push({ type: "image", source: { type: "base64", media_type: f.type, data: f.base64 } });
    }
  }
  blocks.push({ type: "text", text: textPrompt });
  return blocks;
}

async function callApi(payload) {
  const res = await fetch("/api/anthropic", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const rawText = await res.text();
  if (!rawText || rawText.trim() === "") throw new Error(`Resposta vazia (HTTP ${res.status}).`);
  let data;
  try { data = JSON.parse(rawText); } catch { throw new Error(`Resposta inválida: ${rawText.slice(0, 200)}`); }
  if (data.error) throw new Error(typeof data.error === "string" ? data.error : (data.error.message || JSON.stringify(data.error)));
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
    const esc = escape(line);
    if (isTitle)        body += `{\\pard\\qc\\b\\fs28 ${esc}\\par}\n`;
    else if (isSection) body += `{\\pard\\qj\\b\\fs24 ${esc}\\par}\n`;
    else if (t === "")  body += `{\\pard\\par}\n`;
    else                body += `{\\pard\\qj\\fs24 ${esc}\\par}\n`;
  }
  const rtf = `{\\rtf1\\ansi\\ansicpg1252\\deff0\n{\\fonttbl{\\f0\\froman\\fcharset0 Times New Roman;}}\n{\\colortbl ;\\red0\\green0\\blue0;}\n\\paperw12240\\paperh15840\\margl1800\\margr1800\\margt1440\\margb1440\\f0\\cf1\n${body}\n}`;
  const blob = new Blob([rtf], { type: "application/rtf" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ─── STYLE CONSTANTS ──────────────────────────────────────────────────────────
const S = {
  input: { width:"100%", boxSizing:"border-box", background:"#0d1f2d", border:"1px solid #2a4a6b", borderRadius:7, padding:"9px 12px", color:"#d6e8f5", fontSize:13, fontFamily:"Arial, sans-serif", outline:"none" },
  inputGreen: { width:"100%", boxSizing:"border-box", background:"#0d1f2d", border:"1px solid #2a6e4a", borderRadius:7, padding:"9px 12px", color:"#d6e8f5", fontSize:13, fontFamily:"Arial, sans-serif", outline:"none" },
  label: { display:"block", fontSize:10, marginBottom:5, fontFamily:"Arial, sans-serif", textTransform:"uppercase", letterSpacing:1.2, fontWeight:"bold" },
  wrap: { marginBottom:14 },
};

// ─── FIELD COMPONENTS ─────────────────────────────────────────────────────────
const ManualInput = ({ label, value, onChange, placeholder, rows }) => (
  <div style={S.wrap}>
    <label style={{ ...S.label, color:"#5b9ecf" }}>{label}</label>
    {rows ? <textarea value={value} onChange={onChange} rows={rows} placeholder={placeholder} style={{ ...S.input, resize:"vertical" }} />
          : <input type="text" value={value} onChange={onChange} placeholder={placeholder} style={S.input} />}
  </div>
);

const ExtractedInput = ({ label, value, onChange, rows }) => (
  <div style={S.wrap}>
    <label style={{ ...S.label, color:"#5bc98e" }}>
      🤖 {label} <span style={{ color:"#3a6e4a", fontWeight:"normal", textTransform:"none", letterSpacing:0 }}>— extraído, edite se necessário</span>
    </label>
    {rows ? <textarea value={value} onChange={onChange} rows={rows} style={{ ...S.inputGreen, resize:"vertical" }} />
          : <input type="text" value={value} onChange={onChange} style={S.inputGreen} />}
  </div>
);

const StepBar = ({ active }) => (
  <div style={{ display:"flex", gap:6 }}>
    {["1 · Documentos","2 · Revisão","3 · Argumentos","4 · Contestação"].map((s,i) => (
      <div key={i} style={{ padding:"5px 11px", borderRadius:20, fontSize:10, background:i===active?"#1a6eb5":"#0d1f2d", border:"1px solid "+(i<=active?"#4db8ff88":"#1e3a55"), color:i===active?"#fff":(i<active?"#4db8ff":"#4a7a9b") }}>{s}</div>
    ))}
  </div>
);

const Header = ({ active, extra }) => (
  <div style={{ background:"#0d1f2d", borderBottom:"1px solid #1e3a55", padding:"16px 28px", display:"flex", alignItems:"center", gap:14, flexShrink:0 }}>
    <div style={{ width:38, height:38, background:"linear-gradient(135deg, #1a6eb5, #4db8ff)", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center", fontSize:17 }}>⚖️</div>
    <div>
      <div style={{ fontSize:15, fontWeight:"bold", letterSpacing:1, color:"#d6e8f5" }}>GERADOR DE CONTESTAÇÃO</div>
      <div style={{ fontSize:10, color:"#4db8ff", letterSpacing:2, textTransform:"uppercase" }}>Assistente Jurídico com IA · Litigância em Massa</div>
    </div>
    <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
      <StepBar active={active} />
      {extra}
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function GeradorContestacao() {
  const [files, setFiles]               = useState([]);
  const [extracted, setExtracted]       = useState({});
  const [manual, setManual]             = useState({});
  const [usarSumula, setUsarSumula]     = useState(null);
  const [argumentosSelecionados, setArgumentosSelecionados] = useState([]);
  const [argumentosCustom, setArgumentosCustom] = useState("");
  const [contestacao, setContestacao]   = useState("");
  const [step, setStep]                 = useState("upload");
  const [loading, setLoading]           = useState(false);
  const [loadingMsg, setLoadingMsg]     = useState("");
  const [error, setError]               = useState("");
  const fileRef = useRef();

  const setExt = (key) => (e) => setExtracted(prev => ({ ...prev, [key]: e.target.value }));
  const setMan = (key) => (e) => setManual(prev => ({ ...prev, [key]: e.target.value }));

  const addFiles = async (newFiles) => {
    const processed = [];
    for (const f of newFiles) {
      if (f.type === "application/pdf") {
        setLoadingMsg(`Lendo ${f.name}...`); setLoading(true);
        try {
          const text = await extractPdfText(f);
          processed.push({ name:f.name, type:f.type, text, size:f.size });
        } catch {
          processed.push({ name:f.name, type:f.type, text:"(erro ao extrair texto)", size:f.size });
        }
      } else {
        const base64 = await fileToBase64(f);
        processed.push({ name:f.name, type:f.type, base64, size:f.size });
      }
    }
    setLoading(false); setLoadingMsg("");
    setFiles(prev => [...prev, ...processed]);
  };

  const handleExtract = async () => {
    if (!files.length) { setError("Anexe ao menos um documento."); return; }
    setLoading(true); setError("");
    setLoadingMsg("Analisando os documentos...");
    try {
      const content = buildContentBlocks(files, "Analise todos os documentos e extraia as informações conforme instruído.");
      const data = await callApi({ model:"claude-sonnet-4-20250514", max_tokens:4000, system:EXTRACT_SYSTEM, messages:[{role:"user",content}] });
      const raw   = data.content?.map(b=>b.text||"").join("") || "";
      const clean = raw.replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(clean);
      setExtracted(parsed);
      setManual({ ENDERECO_ESCRITORIO:"Rua Ewerton Visco, 290, Edif. Boulevard Side Empresarial, Salas 1503/1504, Caminho das Árvores, Salvador, Bahia", CIDADE_ASSINATURA:"Salvador/BA", TESE_PRINCIPAL:"" });
      setUsarSumula(null);
      // Pre-select all suggested arguments
      setArgumentosSelecionados(parsed.argumentos_sugeridos || []);
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
      let sumulaSectionNum = temPreliminar ? 3 : 2;

      const todosArgumentos = [
        ...argumentosSelecionados,
        ...(argumentosCustom.trim() ? argumentosCustom.split("\n").filter(Boolean) : []),
      ];

      const playbookInstructions = buildPlaybookInstructions(d.gatilhos);
      const modeloInfo = MODELOS[d.tipo_caso] || MODELOS.geral;

      const content = buildContentBlocks(files, `
Gere a contestação completa com os seguintes dados:

PROCESSO: Vara: ${d.VARA} | Comarca: ${d.COMARCA} | Nº: ${d.NUMERO_PROCESSO}
PARTES: Autor: ${d.NOME_AUTOR} | Réu: ${d.NOME_REU} | CNPJ: ${d.CNPJ_REU}
ESCRITÓRIO: ${d.ENDERECO_ESCRITORIO}
CIDADE: ${d.CIDADE_ASSINATURA}

TIPO DO CASO: ${modeloInfo.titulo} — ${modeloInfo.descricao}

ANÁLISE DA INICIAL:
- Fatos: ${d.resumo_fatos_autor}
- Pedidos: ${d.pedidos_autor}
- Documentos juntados: ${d.documentos_juntados}
- Teses do Autor: ${d.teses_autor}
- Pontos frágeis: ${d.pontos_fracos_inicial}
${temPreliminar ? `- PRELIMINARES A ARGUIR: ${d.preliminares}` : "- SEM PRELIMINARES"}

ARGUMENTOS SELECIONADOS PELO ADVOGADO:
${todosArgumentos.map((a,i) => `${i+1}. ${a}`).join("\n")}

${usarSumula ? "INCLUIR TESE SÚMULA 492: Sim — use o marcador [INSERIR_TESE_SUMULA_492_AQUI]" : ""}
${playbookInstructions}

Siga rigorosamente a estrutura e as instruções do template. Todos os pedidos da inicial devem ser impugnados.`);

      const data = await callApi({ model:"claude-sonnet-4-20250514", max_tokens:8000, system:buildContestacaoSystem(usarSumula, temPreliminar, todosArgumentos), messages:[{role:"user",content}] });
      let text = data.content?.map(b=>b.text||"").join("") || "";

      if (!text.trim()) throw new Error("A IA retornou resposta vazia. Tente novamente.");

      if (usarSumula) {
        const teseFinal = applySumulaSection(TESE_SUMULA_492, sumulaSectionNum);
        text = text.replace("[INSERIR_TESE_SUMULA_492_AQUI]", teseFinal);
      }

      text = renumberParagraphs(text);
      setContestacao(text);
      setStep("result");
    } catch (err) {
      setError("Erro ao gerar contestação: " + (err.message || "Tente novamente."));
    } finally { setLoading(false); }
  };

  const toggleArgumento = (arg) => {
    setArgumentosSelecionados(prev =>
      prev.includes(arg) ? prev.filter(a => a !== arg) : [...prev, arg]
    );
  };

  const handleDownload = () => {
    const proc = (extracted?.NUMERO_PROCESSO || "").replace(/[^0-9]/g,"").slice(0,10) || "contestacao";
    downloadAsDoc(contestacao, `Contestacao_${proc}.doc`);
  };

  const resetAll = () => { setFiles([]); setExtracted({}); setManual({}); setContestacao(""); setUsarSumula(null); setArgumentosSelecionados([]); setArgumentosCustom(""); setStep("upload"); setError(""); };

  // ── STEP: UPLOAD ─────────────────────────────────────────────────────────────
  if (step === "upload") return (
    <div style={{ fontFamily:"Arial, sans-serif", background:"#09151f", minHeight:"100vh", color:"#d6e8f5", display:"flex", flexDirection:"column" }}>
      <Header active={0} />
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:40 }}>
        <div style={{ width:"100%", maxWidth:620 }}>
          <div style={{ textAlign:"center", marginBottom:32 }}>
            <div style={{ fontSize:32, marginBottom:10 }}>📂</div>
            <div style={{ fontSize:20, fontWeight:"bold", marginBottom:10 }}>Anexe a Petição Inicial e Documentos</div>
            <div style={{ fontSize:13, color:"#4a7a9b", lineHeight:1.8 }}>
              A IA lê os documentos, extrai os dados, identifica o tipo de caso,<br />
              sugere os argumentos jurídicos e você escolhe quais usar.
            </div>
          </div>

          <div onDrop={(e)=>{e.preventDefault();addFiles(Array.from(e.dataTransfer.files));}}
               onDragOver={(e)=>e.preventDefault()}
               onClick={()=>fileRef.current.click()}
               style={{ border:"2px dashed #1e3a55", borderRadius:14, padding:"40px 30px", textAlign:"center", cursor:"pointer", background:"#0d1f2d", marginBottom:20 }}>
            <input ref={fileRef} type="file" multiple accept=".pdf,.png,.jpg,.jpeg" style={{ display:"none" }}
              onChange={(e)=>addFiles(Array.from(e.target.files))} />
            <div style={{ fontSize:36, marginBottom:10 }}>⬆️</div>
            <div style={{ fontSize:14, marginBottom:6 }}>Arraste arquivos aqui ou clique para selecionar</div>
            <div style={{ fontSize:12, color:"#4a7a9b" }}>PDF, PNG, JPG · Petição Inicial + todos os documentos juntados</div>
          </div>

          {files.length > 0 && (
            <div style={{ background:"#0d1f2d", border:"1px solid #1e3a55", borderRadius:10, padding:16, marginBottom:20 }}>
              {files.map((f,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 4px", borderBottom:i<files.length-1?"1px solid #1e3a5533":"none" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <span>{f.type==="application/pdf"?"📄":"🖼️"}</span>
                    <div>
                      <div style={{ fontSize:13 }}>{f.name}</div>
                      <div style={{ fontSize:11, color:"#4a7a9b" }}>{(f.size/1024).toFixed(1)} KB</div>
                    </div>
                  </div>
                  <button onClick={(e)=>{e.stopPropagation();setFiles(f=>f.filter((_,j)=>j!==i));}}
                    style={{ background:"#ff444411", border:"1px solid #ff444433", borderRadius:6, padding:"4px 10px", color:"#ff8888", cursor:"pointer", fontSize:12 }}>✕</button>
                </div>
              ))}
            </div>
          )}

          {error && <div style={{ background:"#ff444422", border:"1px solid #ff444444", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#ff8888", marginBottom:16 }}>{error}</div>}

          <button onClick={handleExtract} disabled={loading||!files.length} style={{
            width:"100%", padding:14, borderRadius:10, border:"none",
            background:files.length?"linear-gradient(135deg, #1a6eb5, #4db8ff)":"#1e3a55",
            color:files.length?"#fff":"#4a7a9b", fontSize:15, fontWeight:"bold",
            cursor:files.length?"pointer":"not-allowed", letterSpacing:1,
          }}>
            {loading?`⏳ ${loadingMsg}`:"🔍 ANALISAR DOCUMENTOS"}
          </button>
        </div>
      </div>
    </div>
  );

  // ── STEP: REVIEW ─────────────────────────────────────────────────────────────
  if (step === "review") {
    const temPreliminar = !!(extracted.preliminares && extracted.preliminares.trim());
    return (
    <div style={{ fontFamily:"Arial, sans-serif", background:"#09151f", height:"100vh", color:"#d6e8f5", display:"flex", flexDirection:"column" }}>
      <Header active={1} />
      <div style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 1fr", overflow:"hidden" }}>
        <div style={{ borderRight:"1px solid #1e3a55", overflowY:"auto", padding:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <div style={{ width:32, height:32, background:"#1a4a2a", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>🤖</div>
            <div>
              <div style={{ fontSize:12, fontWeight:"bold", color:"#5bc98e" }}>EXTRAÍDO DOS DOCUMENTOS</div>
              <div style={{ fontSize:11, color:"#4a7a9b" }}>Revise e corrija se necessário</div>
            </div>
          </div>

          {/* Tipo do caso */}
          {extracted.tipo_caso && (
            <div style={{ background:"#1a2d1a", border:"1px solid #2a6e4a", borderRadius:8, padding:"10px 14px", marginBottom:16 }}>
              <div style={{ fontSize:10, color:"#5bc98e", textTransform:"uppercase", letterSpacing:1, marginBottom:4 }}>📋 Tipo de Caso Detectado</div>
              <div style={{ fontSize:13, color:"#d6e8f5", fontWeight:"bold" }}>{(MODELOS[extracted.tipo_caso]||MODELOS.geral).titulo}</div>
              <div style={{ fontSize:11, color:"#4a7a9b", marginTop:2 }}>{(MODELOS[extracted.tipo_caso]||MODELOS.geral).descricao}</div>
            </div>
          )}

          <ExtractedInput label="Vara"               value={extracted.VARA||""}               onChange={setExt("VARA")} />
          <ExtractedInput label="Comarca"            value={extracted.COMARCA||""}            onChange={setExt("COMARCA")} />
          <ExtractedInput label="Número do Processo" value={extracted.NUMERO_PROCESSO||""}   onChange={setExt("NUMERO_PROCESSO")} />
          <ExtractedInput label="Nome do Autor"      value={extracted.NOME_AUTOR||""}         onChange={setExt("NOME_AUTOR")} />
          <ExtractedInput label="Nome do Réu"        value={extracted.NOME_REU||""}           onChange={setExt("NOME_REU")} />
          <ExtractedInput label="CNPJ do Réu"        value={extracted.CNPJ_REU||""}           onChange={setExt("CNPJ_REU")} />

          <div style={{ borderTop:"1px solid #1e3a55", margin:"18px 0 16px" }} />
          <div style={{ fontSize:10, fontWeight:"bold", color:"#5bc98e", letterSpacing:1.2, textTransform:"uppercase", marginBottom:14 }}>📋 Análise da Inicial</div>
          <ExtractedInput label="Resumo dos fatos narrados pelo autor" value={extracted.resumo_fatos_autor||""} onChange={setExt("resumo_fatos_autor")} rows={3} />
          <ExtractedInput label="Pedidos do autor" value={extracted.pedidos_autor||""} onChange={setExt("pedidos_autor")} rows={2} />
          <ExtractedInput label="Documentos juntados pelo autor" value={extracted.documentos_juntados||""} onChange={setExt("documentos_juntados")} rows={3} />
          <ExtractedInput label="Teses jurídicas do autor" value={extracted.teses_autor||""} onChange={setExt("teses_autor")} rows={2} />
          <ExtractedInput label="Pontos frágeis / inconsistências" value={extracted.pontos_fracos_inicial||""} onChange={setExt("pontos_fracos_inicial")} rows={3} />

          {/* Preliminares */}
          <div style={{ marginTop:4 }}>
            <div style={{ background:temPreliminar?"#1a2d1a":"#1a1a2d", border:`1px solid ${temPreliminar?"#2a6e4a":"#2a2a6e"}`, borderRadius:10, padding:"14px 16px", marginBottom:14 }}>
              <div style={{ fontSize:10, fontWeight:"bold", color:temPreliminar?"#5bc98e":"#9b9bff", letterSpacing:1.2, textTransform:"uppercase", marginBottom:6 }}>
                {temPreliminar?"⚠️ PRELIMINARES DETECTADAS":"ℹ️ PRELIMINARES — nenhuma detectada"}
              </div>
              <ExtractedInput
                label={temPreliminar?"Preliminares identificadas":"Deixe vazio se não houver"}
                value={extracted.preliminares||""} onChange={setExt("preliminares")} rows={3} />
            </div>
          </div>

          {/* Gatilhos */}
          {extracted.gatilhos && (
            <div style={{ background:"#1a1a0d", border:"1px solid #4a4a1a", borderRadius:10, padding:"14px 16px", marginBottom:14 }}>
              <div style={{ fontSize:10, fontWeight:"bold", color:"#d4c44a", letterSpacing:1.2, textTransform:"uppercase", marginBottom:10 }}>⚡ TESES DO PLAYBOOK</div>
              {[
                ["apenas_bo","Apenas BO — prova unilateral"],
                ["alega_perda_total","Alegação de perda total"],
                ["apenas_um_orcamento","Apenas um orçamento"],
                ["orcamento_propria_seguradora","Orçamento da própria seguradora"],
                ["colisao_traseira_autor","Colisão traseira do autor"],
                ["pede_danos_morais_sem_lesao","Danos morais sem lesão"],
              ].map(([key,label]) => {
                const ativo = extracted.gatilhos[key] === "true";
                return (
                  <div key={key} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 0", borderBottom:"1px solid #4a4a1a33" }}>
                    <span style={{ fontSize:12, color:ativo?"#d4c44a":"#4a7a9b" }}>{label}</span>
                    <button onClick={()=>setExtracted(prev=>({...prev,gatilhos:{...prev.gatilhos,[key]:ativo?"false":"true"}}))} style={{ background:ativo?"#4a4a1a":"#1a1a2d", border:`1px solid ${ativo?"#d4c44a":"#2a2a6e"}`, borderRadius:20, padding:"3px 12px", fontSize:11, color:ativo?"#d4c44a":"#4a7a9b", cursor:"pointer" }}>
                      {ativo?"✓ Ativo":"Inativo"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div style={{ overflowY:"auto", padding:24 }}>
          {/* Fixed fields */}
          <div style={{ background:"#1a2d1a", border:"1px solid #2a6e4a", borderRadius:10, padding:"14px 16px", marginBottom:20 }}>
            <div style={{ fontSize:10, fontWeight:"bold", color:"#5bc98e", letterSpacing:1.2, textTransform:"uppercase", marginBottom:10 }}>🔒 Campos Fixos</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
              {[["Advogado",ADVOGADO_NOME],["OAB",ADVOGADO_OAB],["Data",getTodayFormatted()]].map(([l,v]) => (
                <div key={l}><div style={{ fontSize:10, color:"#4a7a9b", textTransform:"uppercase", letterSpacing:1 }}>{l}</div><div style={{ fontSize:12, color:"#d6e8f5", marginTop:2 }}>{v}</div></div>
              ))}
            </div>
          </div>

          <ManualInput label="Endereço do Escritório" value={manual.ENDERECO_ESCRITORIO||""} onChange={setMan("ENDERECO_ESCRITORIO")} placeholder="Rua Ewerton Visco, 290..." />
          <ManualInput label="Cidade de Assinatura" value={manual.CIDADE_ASSINATURA||""} onChange={setMan("CIDADE_ASSINATURA")} placeholder="Salvador/BA" />

          {/* Súmula 492 */}
          <div style={{ background:"#1a1a2d", border:"1px solid #2a2a6e", borderRadius:10, padding:"16px", marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:"bold", color:"#9b9bff", letterSpacing:1.2, textTransform:"uppercase", marginBottom:6 }}>📜 TESE — INAPLICABILIDADE DA SÚMULA 492 DO STF</div>
            <div style={{ fontSize:12, color:"#8888cc", lineHeight:1.5, marginBottom:14 }}>Argui que a Súmula 492 não se aplica quando não há culpa comprovada da locadora.</div>
            <div style={{ fontSize:11, color:"#d6e8f5", marginBottom:10, fontWeight:"bold" }}>Inserir esta tese na contestação?</div>
            <div style={{ display:"flex", gap:10 }}>
              <button onClick={()=>setUsarSumula(true)} style={{ flex:1, padding:10, borderRadius:8, border:"none", cursor:"pointer", fontSize:13, fontWeight:"bold", background:usarSumula===true?"linear-gradient(135deg,#1a6eb5,#4db8ff)":"#1a2d44", color:usarSumula===true?"#fff":"#4a7a9b", outline:usarSumula===true?"2px solid #4db8ff":"none" }}>✅ Sim</button>
              <button onClick={()=>setUsarSumula(false)} style={{ flex:1, padding:10, borderRadius:8, border:"none", cursor:"pointer", fontSize:13, fontWeight:"bold", background:usarSumula===false?"#2d1a1a":"#1a2d44", color:usarSumula===false?"#ff8888":"#4a7a9b", outline:usarSumula===false?"2px solid #ff6666":"none" }}>❌ Não</button>
            </div>
          </div>

          {error && <div style={{ background:"#ff444422", border:"1px solid #ff444444", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#ff8888", marginBottom:16 }}>{error}</div>}

          <button onClick={()=>{ if(usarSumula===null){setError("❗ Responda sobre a Súmula 492.");return;} setError(""); setStep("arguments");}} style={{
            width:"100%", padding:14, borderRadius:10, border:"none",
            background:"linear-gradient(135deg, #1a6eb5, #4db8ff)", color:"#fff", fontSize:15, fontWeight:"bold", cursor:"pointer", letterSpacing:1,
          }}>
            Próximo: Selecionar Argumentos →
          </button>
          <button onClick={()=>setStep("upload")} style={{ width:"100%", marginTop:10, padding:10, borderRadius:10, border:"1px solid #1e3a55", background:"transparent", color:"#4a7a9b", fontSize:13, cursor:"pointer" }}>
            ← Voltar e adicionar documentos
          </button>
        </div>
      </div>
    </div>
  );}

  // ── STEP: ARGUMENTS ───────────────────────────────────────────────────────────
  if (step === "arguments") {
    const modeloAtual = MODELOS[extracted.tipo_caso] || MODELOS.geral;
    // Merge: sugeridos pela IA + argumentos do modelo
    const todosDisponiveis = [...new Set([
      ...(extracted.argumentos_sugeridos || []),
      ...modeloAtual.argumentos_possiveis,
    ])];

    return (
    <div style={{ fontFamily:"Arial, sans-serif", background:"#09151f", height:"100vh", color:"#d6e8f5", display:"flex", flexDirection:"column" }}>
      <Header active={2} />
      <div style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 1fr", overflow:"hidden" }}>

        {/* LEFT: Argumentos disponíveis */}
        <div style={{ borderRight:"1px solid #1e3a55", overflowY:"auto", padding:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <div style={{ width:32, height:32, background:"#1a3a5a", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>⚖️</div>
            <div>
              <div style={{ fontSize:12, fontWeight:"bold", color:"#4db8ff" }}>ARGUMENTOS JURÍDICOS DISPONÍVEIS</div>
              <div style={{ fontSize:11, color:"#4a7a9b" }}>Selecione os que deseja incluir na contestação</div>
            </div>
          </div>

          <div style={{ background:"#1a2d44", border:"1px solid #2a4a6b", borderRadius:8, padding:"10px 14px", marginBottom:16 }}>
            <div style={{ fontSize:11, color:"#4db8ff", marginBottom:4 }}>📋 Tipo: <strong>{modeloAtual.titulo}</strong></div>
            <div style={{ fontSize:11, color:"#4a7a9b" }}>{argumentosSelecionados.length} de {todosDisponiveis.length} selecionados</div>
          </div>

          {todosDisponiveis.map((arg, i) => {
            const selecionado = argumentosSelecionados.includes(arg);
            return (
              <div key={i} onClick={()=>toggleArgumento(arg)} style={{
                background:selecionado?"#1a3a5a":"#0d1f2d",
                border:`1px solid ${selecionado?"#4db8ff":"#1e3a55"}`,
                borderRadius:8, padding:"12px 14px", marginBottom:8, cursor:"pointer",
                transition:"all 0.15s",
              }}>
                <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                  <div style={{ width:20, height:20, borderRadius:4, background:selecionado?"#1a6eb5":"#1e3a55", border:`1px solid ${selecionado?"#4db8ff":"#2a4a6b"}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                    {selecionado && <span style={{ color:"#fff", fontSize:12 }}>✓</span>}
                  </div>
                  <div style={{ fontSize:12, color:selecionado?"#d6e8f5":"#8a9ab5", lineHeight:1.5 }}>{arg}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: Selecionados + Custom + Gerar */}
        <div style={{ overflowY:"auto", padding:24 }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:18 }}>
            <div style={{ width:32, height:32, background:"#1a4a2a", borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>✅</div>
            <div>
              <div style={{ fontSize:12, fontWeight:"bold", color:"#5bc98e" }}>ARGUMENTOS SELECIONADOS</div>
              <div style={{ fontSize:11, color:"#4a7a9b" }}>Estes serão desenvolvidos na contestação</div>
            </div>
          </div>

          {argumentosSelecionados.length === 0 ? (
            <div style={{ background:"#1a1a1a", border:"1px solid #333", borderRadius:8, padding:"20px", textAlign:"center", color:"#4a7a9b", fontSize:13, marginBottom:16 }}>
              Nenhum argumento selecionado.<br />Selecione ao menos um à esquerda.
            </div>
          ) : (
            <div style={{ background:"#0d1f2d", border:"1px solid #1e3a55", borderRadius:10, padding:16, marginBottom:16 }}>
              {argumentosSelecionados.map((arg, i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", padding:"6px 0", borderBottom:i<argumentosSelecionados.length-1?"1px solid #1e3a5533":"none", gap:8 }}>
                  <div style={{ fontSize:12, color:"#5bc98e", lineHeight:1.5 }}>{i+1}. {arg}</div>
                  <button onClick={()=>toggleArgumento(arg)} style={{ background:"transparent", border:"none", color:"#ff8888", cursor:"pointer", fontSize:14, flexShrink:0 }}>✕</button>
                </div>
              ))}
            </div>
          )}

          {/* Argumentos adicionais */}
          <div style={{ borderTop:"1px solid #1e3a55", paddingTop:16, marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:"bold", color:"#4db8ff", letterSpacing:1.2, textTransform:"uppercase", marginBottom:8 }}>+ ARGUMENTOS ADICIONAIS</div>
            <div style={{ fontSize:11, color:"#4a7a9b", marginBottom:8 }}>Adicione argumentos específicos do caso (um por linha)</div>
            <textarea
              value={argumentosCustom}
              onChange={e=>setArgumentosCustom(e.target.value)}
              rows={4}
              placeholder={"Ex: O autor não juntou laudo médico comprovando o mal súbito\nEx: Cláusula 8.2 do contrato prevê expressamente..."}
              style={{ ...S.input, resize:"vertical", width:"100%", boxSizing:"border-box" }}
            />
          </div>

          {error && <div style={{ background:"#ff444422", border:"1px solid #ff444444", borderRadius:8, padding:"10px 14px", fontSize:13, color:"#ff8888", marginBottom:16 }}>{error}</div>}

          <button onClick={handleGenerate} disabled={loading||argumentosSelecionados.length===0} style={{
            width:"100%", padding:14, borderRadius:10, border:"none",
            background:loading||argumentosSelecionados.length===0?"#1e3a55":"linear-gradient(135deg,#1a6eb5,#4db8ff)",
            color:loading||argumentosSelecionados.length===0?"#4a7a9b":"#fff", fontSize:15, fontWeight:"bold",
            cursor:loading||argumentosSelecionados.length===0?"not-allowed":"pointer", letterSpacing:1,
          }}>
            {loading?`⏳ ${loadingMsg}`:"⚖️ GERAR CONTESTAÇÃO"}
          </button>
          <button onClick={()=>setStep("review")} style={{ width:"100%", marginTop:10, padding:10, borderRadius:10, border:"1px solid #1e3a55", background:"transparent", color:"#4a7a9b", fontSize:13, cursor:"pointer" }}>
            ← Voltar à revisão
          </button>
        </div>
      </div>
    </div>
  );}

  // ── STEP: RESULT ──────────────────────────────────────────────────────────────
  return (
    <div style={{ fontFamily:"Arial, sans-serif", background:"#09151f", height:"100vh", color:"#d6e8f5", display:"flex", flexDirection:"column" }}>
      <Header active={3} extra={
        <div style={{ display:"flex", gap:8 }}>
          <button onClick={handleDownload} style={{ background:"linear-gradient(135deg,#1a6eb5,#4db8ff)", border:"none", borderRadius:8, padding:"8px 20px", color:"#fff", cursor:"pointer", fontSize:13, fontWeight:"bold" }}>⬇ Baixar .doc</button>
          <button onClick={()=>setStep("arguments")} style={{ background:"transparent", border:"1px solid #1e3a55", borderRadius:8, padding:"8px 14px", color:"#4a7a9b", cursor:"pointer", fontSize:12 }}>← Editar</button>
          <button onClick={resetAll} style={{ background:"transparent", border:"1px solid #1e3a55", borderRadius:8, padding:"8px 14px", color:"#4a7a9b", cursor:"pointer", fontSize:12 }}>+ Novo caso</button>
        </div>
      } />
      <div style={{ flex:1, display:"grid", gridTemplateColumns:"260px 1fr", overflow:"hidden" }}>
        <div style={{ borderRight:"1px solid #1e3a55", overflowY:"auto", padding:"20px 18px", background:"#0d1f2d" }}>
          <div style={{ fontSize:10, fontWeight:"bold", color:"#5bc98e", letterSpacing:1.2, textTransform:"uppercase", marginBottom:16 }}>📋 Resumo do Caso</div>
          {[["Processo",extracted?.NUMERO_PROCESSO],["Vara",extracted?.VARA],["Comarca",extracted?.COMARCA],["Autor",extracted?.NOME_AUTOR],["Réu",extracted?.NOME_REU]].map(([label,val])=>val&&(
            <div key={label} style={{ marginBottom:12 }}>
              <div style={{ fontSize:10, color:"#4a7a9b", textTransform:"uppercase", letterSpacing:1 }}>{label}</div>
              <div style={{ fontSize:12, marginTop:2 }}>{val}</div>
            </div>
          ))}
          <div style={{ borderTop:"1px solid #1e3a5555", marginTop:12, paddingTop:12 }}>
            <div style={{ fontSize:10, color:"#4db8ff", textTransform:"uppercase", letterSpacing:1, marginBottom:6 }}>Argumentos usados</div>
            {argumentosSelecionados.map((a,i)=>(
              <div key={i} style={{ fontSize:10, color:"#d6e8f5aa", marginBottom:4, lineHeight:1.5 }}>• {a}</div>
            ))}
          </div>
        </div>
        <div style={{ overflowY:"auto", padding:"36px 48px", background:"#f7f3ec" }}>
          <div style={{ maxWidth:720, margin:"0 auto" }}>
            {!contestacao.trim() ? (
              <div style={{ textAlign:"center", color:"#888", fontFamily:"Arial, sans-serif", paddingTop:60 }}>
                <div style={{ fontSize:32, marginBottom:12 }}>⚠️</div>
                <div style={{ fontSize:14 }}>O texto da contestação não foi recebido.</div>
                <button onClick={()=>setStep("arguments")} style={{ marginTop:16, padding:"10px 20px", borderRadius:8, border:"1px solid #ccc", background:"#fff", cursor:"pointer", fontSize:13 }}>← Voltar e tentar novamente</button>
              </div>
            ) : (
              <textarea readOnly value={contestacao} style={{ width:"100%", minHeight:"80vh", fontFamily:"'Georgia','Times New Roman',serif", fontSize:13.5, lineHeight:1.9, color:"#1a1a1a", background:"transparent", border:"none", outline:"none", resize:"none", textAlign:"justify", whiteSpace:"pre-wrap", boxSizing:"border-box" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
