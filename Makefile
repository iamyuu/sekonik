gen-seed:
	bun run scripts/factories/factories.ts

db:
	docker-compose -f compose.db.yml up -d

db-stop:
	docker-compose -f compose.db.yml down

setup-db:
# start service
	docker-compose -f compose.db.yml up -d

# seeding data
	docker cp ./scripts/factories/init.sql sekonik_db:/init.sql
	docker exec -e PGPASSWORD=secret sekonik_db psql -U usr -d sekonik -f /init.sql > /dev/null

# stop service
	docker-compose -f compose.db.yml down

setup-api:
	cp apps/api/.env.example apps/api/.env
	cd apps/api && bun run db:gen
	cd apps/api && bun run db:setup

setup-web:
	cp apps/web/.env.example apps/web/.env

setup:
	@$(MAKE) setup-web
	@$(MAKE) setup-api
	@$(MAKE) setup-db

dev:
	bun run dev