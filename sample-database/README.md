# Population database

A [PostgreSQL](https://www.postgresql.org/) database running in a [Docker](https://www.docker.com/) container. If you have an older version of Docker that does not have Compose V2, substitute the `docker compose` commands with `docker-compose`.

See the `init.sql` file for the data structure and content.

## Running

To create and run the database container, run in this folder:

```
docker compose up -d
```

This will build the image (if it does not exist) and run a container named `population_db` in the background.

The database can be then accessed at `postgres://postgres@127.0.0.1/population`.

If you want to access the database from another Docker container, you need to create a network (`docker network create <networkName>`) and attach both containers to it (`docker network connect <networkName> <containerName>`). Then the database can be accessed at `postgres://postgres@population_db/population`.

(To stop the container, run: `docker compose stop`)
