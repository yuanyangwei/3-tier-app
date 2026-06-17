FROM node:22.19-alpine AS builder

ENV NODE_ENV=development
WORKDIR /app

# Copy your package configuration
COPY package.json ./

# 1. Change "npm ci" to "npm install" so it generates its own lockfile inside Docker
RUN npm install && npm cache clean --force

# Copy the rest of your web assets (index.html, main.js, vite.config.js)
COPY . .

# 2. Run the compiler tool
RUN npm run build

# --- The rest of your Dockerfile (FROM nginx...) remains exactly the same ---
FROM nginx:1.25.4-alpine
LABEL maintainer="your.example@example.com" version="1.0"
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html
EXPOSE 80
