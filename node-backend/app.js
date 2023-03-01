const express = require('express')
const app = express()

const { Pool } = require('pg')
 
const pool = new Pool({
    connectionString: 'postgres://postgres@population_db/population'
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

app.get('/', (request, response, next) => {
    response.send('This is the root')
})

app.get('/countryByPopulation/:minPopulation', (request, response) => {
    pool.connect().then((client) => {
        client
            .query('SELECT * FROM country WHERE population >= $1', [request.params.minPopulation])
            .then((results) => {
                client.release()
                response.send(results.rows)
            })
            .catch((error) => {
                client.release()
                response.send(error.stack)
            })
        })
})

module.exports = app;