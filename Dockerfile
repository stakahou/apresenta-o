# syntax=docker/dockerfile:1.4
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production

# Build dependencies and pnpm
RUN apk add --no-cache git python3 build-base
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install only dependencies first to leverage cache
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm fetch

# Copy source and build
COPY . .
RUN pnpm install --frozen-lockfile --prefer-offline
RUN pnpm build

FROM nginx:stable-alpine AS runner
RUN apk add --no-cache tini

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Use a custom nginx config with security headers
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html

USER nginx
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s CMD wget -qO- --timeout=2 http://127.0.0.1/ || exit 1

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["nginx", "-g", "daemon off;"]
