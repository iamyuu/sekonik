FROM oven/bun:1.2-alpine

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 8080

CMD ["bun", "run", "start"]