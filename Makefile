gen-seeder:
	bun run scripts/factories/factories.ts

setup-api:
	docker exec sekonik_api bun run db:setup

setup-web:

setup-db:
	docker cp ./scripts/factories/init.sql sekonik_db:/init.sql
	docker exec -e PGPASSWORD=secret sekonik_db psql -U usr -d sekonik -f /init.sql > /dev/null

setup:
	docker compose up -d
	@$(MAKE) setup-api
	@$(MAKE) setup-web
	@$(MAKE) setup-db

dev:
	bun dev
