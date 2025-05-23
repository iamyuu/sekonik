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
- **Authentication** - Email & password authentication with Better Auth
- **Biome** - Linting and formatting
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
make setup
```

Run the development server:

```bash
make dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the web application.

The API is running at [http://localhost:8080](http://localhost:8080).

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

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:api`: Start only the server
- `bun db:studio`: Open database studio UI
- `bun lint`: Run linter
- `bun typecheck`: Run type checker
