# ms-graph-ql-api-gateway

The GraphQL end point as an API Gateway. It sits between the client's apps and the API Gateway.

## Prerequisites

This app needs the following installed before it will work:

- NodeJS
- Docker
- Hucky

## Environment

Please use dotenv to set the environment variables needed. You can find an example of .env file at example.env file.

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the Server

   ```bash
   npm start
   ```

   Alternativery one can use docker-compose to run the server

   ```bash
   docker-compose build
   docker-compose up
   ```

## Run a Live Check

To check that this functions app is configured and communicating properly, run the following command:

```bash
curl 'http://localhost:8080/' \
   -H 'Accept-Encoding: gzip, deflate, br' \
   -H 'Content-Type: application/json' \
   -H 'Accept: application/json' \
   -H 'Connection: keep-alive' \
   -H 'DNT: 1' \
   -H 'Origin: http://localhost:8080' \
   --data-binary '{"query":"{ livecheck { status } }"}' \
   --compressed
```

If this command does not return the following response, there may be an error with your setup.

```json
{ "data": { "livecheck": { "status": "OK" } } }
```

## Run tests

```bash
npm test
```

### Use for CI and check coverage

```bash
npm run test:ci
```

### Rebuild snapshots

```bash
npm test -- -u
```
