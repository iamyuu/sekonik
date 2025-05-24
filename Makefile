gen-seed:
	bun run scripts/factories/factories.ts

setup-db:
# start service
	docker-compose -f compose.db.yml up -d

# seeding data
	docker cp ./scripts/factories/init.sql sekonik_db:/init.sql
	docker exec -e PGPASSWORD=secret sekonik_db psql -U usr -d sekonik -f /init.sql > /dev/null

# stop service
	docker-compose -f compose.db.yml down

setup:
	@$(MAKE) setup-db
