# sekonik

A web app to buy and sell preloved electronic

## Libraries

- **TypeScript** - For type safety and improved developer experience
- **React Router** - Declarative routing for React
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Hono** - Lightweight, performant server framework
- **tRPC** - End-to-end type-safe APIs
- **Bun** - Runtime environment
- **Prisma** - TypeScript-first ORM
- **PostgreSQL** - Database engine
- **Authentication** - Authentication with Better Auth
- **ESLint** & **Prettier** - Linting and formatting
- **Turborepo** - Optimized monorepo build system

## User Stories

- [x] As a user, I want to be able to see categories of products
- [x] As a user, I want to be able to see products by category
- [x] As a user, I want to be able to see featured products
- [x] As a user, I want to be able to see list of products
- [x] As a user, I want to be able to sort or filter products
- [x] As a user, I want to be able to see product details

## Getting Started (Local Setup)

### Prerequisites

- Bun
- Docker Compose

### Local Setup

Clone and install dependencies:

```bash
git clone https://github.com/iamyuu/sekonik.git
cd sekonik
```

Setup environment

```bash
make setup
```

Start Docker services (Postgres)

```bash
make db
```

### Run Apps

```bash
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the web application.

## Project Structure

```
sekonik
└── apps
    ├── api
    │   └── src
    │       ├── config          # Configuration files (env, etc)
    │       ├── database        # Database schema and migrations
    │       ├── features        # Feature modules based on domain
    │       ├── presentation    # Presentation layer (http, grpc, etc)
    │       └── utils           # Utility functions
    └── web
        └── src
            ├── components      # UI components
            ├── config          # Configuration files (env, etc)
            ├── features        # Feature modules based on domain
            ├── hooks           # Custom hooks
            ├── providers       # Context providers
            ├── routes          # Routing configuration
            ├── styles          # Global styles
            └── utils           # Utility functions
```

Inside `features` directory, we have feature modules based on domain.

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:api`: Start only the server
- `bun db:studio`: Open database studio UI
- `bun lint`: Run linter
- `bun typecheck`: Run type checker
