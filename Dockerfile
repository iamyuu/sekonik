# use the official Bun image (alpine for smaller size)
FROM oven/bun:1.2-alpine AS base

RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

RUN bun install --global turbo@^2

# Copy dependency files
COPY bun.lock package.json ./

# Install dependencies
RUN bun install

# Copy full repo (you can adjust this for better caching)
COPY . .

# Expose the dev port
EXPOSE 8080
EXPOSE 5173

# Set default command (adjust to your entry point)
CMD ["bun", "run", "dev"]
