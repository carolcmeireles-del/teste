# ⚖️ Gerador de Contestação — LM Advogados

Ferramenta interna para geração automática de contestações com IA.

---

## 🚀 Deploy na Vercel (recomendado) — passo a passo

### Pré-requisitos
- Conta gratuita no [GitHub](https://github.com) (para guardar o código)
- Conta gratuita na [Vercel](https://vercel.com) (para hospedar o site)
- Chave de API da Anthropic — obtenha em [console.anthropic.com](https://console.anthropic.com)

---

### Passo 1 — Subir o código no GitHub

1. Acesse [github.com](https://github.com) e clique em **"New repository"**
2. Nome: `contestacao-app` | Visibilidade: **Private** | Clique em **"Create repository"**
3. Na página seguinte, clique em **"uploading an existing file"**
4. Arraste a pasta inteira deste projeto e clique em **"Commit changes"**

---

### Passo 2 — Conectar à Vercel

1. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
2. Clique em **"Import Git Repository"** e selecione o repositório `contestacao-app`
3. Em **Framework Preset**, selecione **Vite**
4. Clique em **"Deploy"** — a Vercel fará o build automaticamente

---

### Passo 3 — Configurar as variáveis de ambiente (obrigatório)

Após o deploy, vá em:
**Settings → Environment Variables** e adicione:

| Nome | Valor |
|------|-------|
| `ANTHROPIC_API_KEY` | `sk-ant-...` (sua chave da Anthropic) |
| `APP_PASSWORD` | `uma-senha-forte` (senha que a equipe usará para acessar) |

Depois clique em **"Redeploy"** para aplicar as variáveis.

---

### Passo 4 — Compartilhar com a equipe

A Vercel gera automaticamente uma URL como:
```
https://contestacao-app-seunome.vercel.app
```

Envie essa URL e a `APP_PASSWORD` para os advogados da equipe.
Cada pessoa acessa pelo navegador, sem instalar nada.

---

### (Opcional) Domínio personalizado

Em **Settings → Domains**, você pode adicionar um domínio próprio:
```
contestacao.seuescritorio.com.br
```

---

## 💻 Rodar localmente (para testar antes do deploy)

```bash
# 1. Instalar dependências
npm install

# 2. Criar arquivo de configuração
cp .env.example .env.local
# Edite .env.local e preencha ANTHROPIC_API_KEY e APP_PASSWORD

# 3. Rodar em modo de desenvolvimento
npm run dev
# Acesse: http://localhost:5173
```

---

## 💰 Custo estimado

| Item | Custo |
|------|-------|
| Hospedagem (Vercel) | **Gratuito** |
| Por contestação gerada | ~R$ 0,10 a R$ 0,30 |
| Por análise de PDF (extração) | ~R$ 0,05 a R$ 0,15 |

O custo depende do tamanho dos PDFs e da extensão da contestação gerada.
Consulte [anthropic.com/pricing](https://anthropic.com/pricing) para valores atualizados.

---

## 🔒 Segurança

- A chave da API da Anthropic **nunca é exposta** no navegador — fica apenas no servidor Vercel
- O acesso é protegido por senha (`APP_PASSWORD`)
- O repositório GitHub deve ser mantido como **Private**

---

## 📁 Estrutura do projeto

```
contestacao-app/
├── api/
│   └── anthropic.js        # Proxy seguro para a API da Anthropic (server-side)
├── src/
│   ├── main.jsx            # Tela de login + entrada da aplicação
│   └── GeradorContestacao.jsx  # Componente principal do gerador
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```
