# Dockerfile
FROM nginx:alpine

# Limpa a config padrão
RUN rm -rf /etc/nginx/conf.d/*

# Copia a config personalizada para SPA (fallback de rotas)
COPY nginx-app.conf /etc/nginx/conf.d/default.conf

# Copia o build gerado pelo Vite
COPY dist/ /usr/share/nginx/html
