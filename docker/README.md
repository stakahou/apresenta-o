Este diretório contém instruções para construir e executar a aplicação em Docker, seguindo boas práticas de segurança.

Build (imagem de produção):

```bash
docker build -t ai-advanced-frontend:latest .
docker run -p 8080:80 --rm --name app ai-advanced-frontend:latest
```

Ou com compose:

```bash
docker compose up --build web
```

Modo dev (hot-reload com bind-mount):

```bash
docker compose up dev
```

Boas práticas e recomendações:
- Use imagens oficiais e pequenas (alpine, nginx stable).
- Multi-stage build para não levar dependências de build para a imagem final.
- Não rode como root — o contêiner `nginx` usa o usuário `nginx`.
- Nunca inclua segredos nos arquivos da imagem; use `docker secrets` / variáveis de ambiente ou um vault.
- Ative scanning de imagens na pipeline (ex.: Trivy, Clair, Grype).
- Use Content Security Policy e outros headers (já configurados em `docker/nginx.conf`).
- Evite `unsafe-inline` em produção para reduzir XSS — adaptar `Content-Security-Policy` conforme necessidade.

Sugestões CI:
- Build da imagem e push para registry só a partir de branches protegidas.
- Rodar scanner de vulnerabilidades e SBOM generation antes do push.
