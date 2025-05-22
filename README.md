# EstudaMais Frontend

**Interface de usuário para a plataforma EstudaMais, focada em guiar estudantes através do GitHub Student Pack e planejamento de carreira com a ajuda da Luiza, nossa IA assistente.**

[![Deploy to VPS](https://github.com/92username/frontend-estudamais/actions/workflows/deploy.yml/badge.svg)](https://github.com/92username/frontend-estudamais/actions/workflows/deploy.yml)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white) 

## 🚀 Sobre o Projeto

O `frontend-estudamais` é a cara da plataforma EstudaMais.tech. Ele oferece uma experiência de usuário moderna e interativa, permitindo que estudantes explorem os benefícios do GitHub Student Developer Pack e recebam orientação de carreira personalizada através da Luiza, nossa assistente virtual baseada em Inteligência Artificial.

## ✨ Funcionalidades

- **Interface Intuitiva:** Navegação fácil e design atraente para apresentar os recursos da plataforma.
- **Chat com Luiza:** Integração com a IA Luiza para tirar dúvidas, sugerir usos de créditos e auxiliar no planejamento de carreira.
- **Responsividade:** Adaptado para uma ótima experiência em desktops, tablets e smartphones.
- **Informações Detalhadas:** Conteúdo claro sobre o GitHub Student Pack e como aproveitá-lo ao máximo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias modernas para garantir performance, escalabilidade e uma ótima experiência de desenvolvimento.

### Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

- **JavaScript:** Linguagem principal para a lógica do frontend.
- **React:** Biblioteca para construção de interfaces de usuário componentizadas.
- **Tailwind CSS:** Framework CSS utility-first para estilização rápida e customizável.
- **Vite:** Ferramenta de build moderna e rápida para desenvolvimento frontend.

### Backend & Infraestrutura

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)

- **Node.js:** Utilizado no ambiente de desenvolvimento e build com Vite.
- **Docker:** Para containerização da aplicação, facilitando o deploy e a consistência entre ambientes.
- **Nginx:** Servidor web para servir a aplicação estática gerada pelo Vite em produção.
- **Streamlit:** Framework utilizado para o desenvolvimento do chatbot Luiza (serviço externo).

## ⚙️ Rodando Localmente

Siga estas instruções para configurar e rodar o projeto em seu ambiente de desenvolvimento local.

**Pré-requisitos:**
- Node.js (versão 18.x ou superior)
- npm ou yarn

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/92username/frontend-estudamais.git
    cd frontend-estudamais
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    Ou, se você utiliza yarn:
    ```bash
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Ou, com yarn:
    ```bash
    yarn dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, caso a 5173 esteja em uso).

## 🐳 Rodando com Docker

Você também pode rodar a aplicação utilizando Docker.

1.  **Construa a imagem Docker:**
    ```bash
    docker build -t frontend-estudamais .
    ```

2.  **Execute o container Docker:**
    ```bash
    docker run -d -p 8080:80 frontend-estudamais
    ```
    A aplicação estará disponível em `http://localhost:8080`.

## 🔗 Links Úteis

- **Chatbot Luiza:** [Acesse o chat aqui](https://estudamais.tamanduas.dev)
- **Docker Hub:** [Imagem Docker do Projeto](https://hub.docker.com/r/92user/frontend-estudamais)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes (se aplicável, ou adicione um arquivo LICENSE.md com o texto da licença MIT).

![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

*Desenvolvido com ❤️ pela Comunidade EstudaMais.tech*
