gen-seeder:
	bun run scripts/factories/factories.ts

setup-api:
	bun turbo -F api db:setup

setup-web:

setup-db:
	docker cp ./scripts/factories/init.sql sekonik-db:/init.sql
	docker exec -e PGPASSWORD=secret sekonik-db psql -U usr -d sekonik -f /init.sql > /dev/null

setup:
	docker compose up -d
	@$(MAKE) setup-api
	@$(MAKE) setup-web
	@$(MAKE) setup-db

dev:
	bun dev
