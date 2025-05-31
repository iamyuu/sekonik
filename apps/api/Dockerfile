FROM bun:1.2-slim

WORKDIR /app

COPY package.json

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun", "run", "start"]