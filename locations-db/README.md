# Locations API

## Run the App

Set the Environment variables:

```sh
$ export NODE_ENV=development
$ export PORT=1337
$ export DATABASE_URL=postgres://localhost:5432/locations_dev
$ export DATABASE_TEST_URL=postgres://localhost:5432/locations_test
```

> `PORT` is optional, defaults to `1337`

Migrate and seed:

```sh
$ knex migrate:latest --env development --knexfile knexfile.js
$ knex seed:run --env development --knexfile knexfile.js
```

Run:

```sh
$ npm start
```

Server should be up on [http://localhost:1337](http://localhost:1337)

## Test

```sh
$ npm test
```

## Routes

| Endpoint   | HTTP Method | CRUD Method | Result            |
|------------|-------------|-------------|-------------------|
| /ping      | GET         | READ        | `pong`            |
| /locations | GET         | READ        | get all locations |



docker build -t "locations" ./src

docker run -p 80:1337 locations
