✅ Fase 1 - Estrutura inicial
🌐 Infraestrutura e organização do projeto

Criar repositório (se ainda não tiver)

Criar projeto React com Vite

Instalar e configurar TailwindCSS

    Organizar estrutura de pastas:

        pages/

        components/

        context/

        routes/

        hooks/ (se precisar)

🔐 Auth Context

Criar AuthContext com React Context API

Implementar provider AuthProvider

Expor métodos:

    login()

    logout()

    isAuthenticated

    user (dados do usuário)

    Guardar token de forma segura no client (temporariamente no localStorage)

📄 Páginas

Página /login

Botão "Login com GitHub"

    Link para /como-criar-conta-github

Página /como-criar-conta-github

    Conteúdo inicial explicando como criar conta GitHub

Página /dashboard

Template vazio por enquanto

        Proteger rota com PrivateRoute ou similar

🔐 Rotas

Instalar React Router DOM

Configurar rotas:

    /login

    /como-criar-conta-github

    /dashboard (protegida)