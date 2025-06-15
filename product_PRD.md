# 📘 EstudaMais.tech – Product Requirements Document (PRD)

## 🎯 Visão Geral

**Objetivo:**  
Ajudar estudantes a ativarem e aproveitarem benefícios globais como GitHub Pro, Copilot, Notion, Adobe, etc.

**Plataforma:**  
Web App construído com React (Vite), backend em Node.

**Público-alvo:**  
Estudantes universitários com e-mail educacional, iniciantes em tecnologia.

---

## 🧱 Funcionalidades Principais

### 1. Login com GitHub
- [x] Botão de login via OAuth
- [ ] Redirecionamento para `/login/callback`
- [ ] Backend real para trocar `code` por `access_token`

### 2. Tutorial de Criação de Conta GitHub
- [ ] Página explicativa com passo a passo
- [ ] Incluir tutorial em vídeo ou GIF animado

### 3. Dashboard do Estudante
- [ ] Mostrar avatar, nome e login do GitHub
- [ ] Mostrar data de entrada no GitHub
- [ ] Verificar se possui GitHub Pro
- [ ] Verificar se possui Copilot
- [ ] Mostrar repositórios públicos
- [ ] Mostrar status de ativação de outros packs (Notion, Adobe...)

### 4. Chat com a IA Luiza
- [ ] Frontend com input e scroll automático
- [ ] Integração com backend local em `/chat`
- [ ] Conectar a modelo real via OpenAI, Claude ou HuggingFace API

### 5. Roteamento e Autenticação
- [ ] Rota protegida com `PrivateRoute`
- [ ] Contexto global de autenticação (`AuthContext`)
- [ ] Redirecionamento com feedback claro em caso de não autenticado

---

## 🛠️ Stack Tecnológica

| Camada       | Ferramenta/Tecnologia          |
|--------------|--------------------------------|
| Frontend     | React + Vite + TailwindCSS     |
| Auth         | GitHub OAuth (via REST)        |
| Backend      | Node                           |
| Infra        | VPS                            |

---

## 📌 Tarefas Extras (Wishlist)

- [ ] Gamificação com progresso por benefício ativado
- [ ] Sistema de feedback do usuário
- [ ] Suporte multilíngue (EN/PT)
- [ ] Responsividade total para mobile
- [ ] Página “Como ativar seu Notion Student”
- [ ] Página “Como ativar Adobe for Students”
- [ ] Modo dark/light automático

---

## 📅 Última atualização: `{{coloque a data atual aqui}}`
