# Rest API For Logs

For use in frontend for view load logs

### Features
- Sequelize ORM
- SQLite Database
- Swagger in Route: /api 
- Nest Rest API
- React Frontend for View Logs

## Node Engine
- Version >= 18

## Width Docker

There is a `docker-compose.yml` file for services Docker.

`docker-compose up`

After running, you can stop the Docker container with

`docker-compose down`

## Without Docker - Installation and Run the API project

Access directory and install:

`cd services/bff`

`npm install`

Then, run Nest as usual for local and watch:

`npm run start:dev`

## Installation and Run the Frontend project

Access directory and install:

`cd services/frontend`

`npm install`

Then, run project:

`npm run start`

## Rest API Resources

Then, first request GET endpoint for load logs content:

`http://localhost:4000/api/logs/load`

## Frontend View

Then, access in your browser:

`http://localhost:3000`

## API documentation width Swagger

For view documentation in your browser:

`http://localhost:4000/api`