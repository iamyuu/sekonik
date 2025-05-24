FROM oven/bun:1.2-alpine

WORKDIR /www
COPY . .

RUN bun install --ci

EXPOSE 8080

RUN bun run db:gen

CMD ["bun", "run", "dev"]
