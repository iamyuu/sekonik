gen-seeder:
	bun run scripts/factories/factories.ts

setup-db:
	docker cp ./scripts/factories/init.sql sekonik_db:/init.sql
	docker exec -e PGPASSWORD=secret sekonik_db psql -U usr -d sekonik -f /init.sql > /dev/null

setup:
	@$(MAKE) setup-db
