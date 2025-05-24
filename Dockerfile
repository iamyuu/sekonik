FROM oven/bun:1.2-alpine

WORKDIR /www
COPY . .

RUN bun install --frozen-lockfile

CMD ["bun", "run", "dev"]