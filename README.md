# ntc-home-assignment
Home assignment for New Things Co.

## How to run
Run containers and make sure they're up:
```
docker compose -f ./sample-database/docker-compose.yml up -d
docker compose -f ./node-backend/docker-compose.yml up -d
```
Create network for DB connection:
```
docker network create assignment
docker network connect assignment population_db
docker network connect assignment node-backend-web-1
```