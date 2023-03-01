const express = require('express')
const app = express()

const { Client } = require('pg')
const client = new Client({
    connectionString: 'postgres://postgres@population_db/population'
})

app.get('/', (request, response, next) => {
    response.send('This is the root')
})

app.get('/country/:size', (request, response, next) => {
    client.connect()
    client.query('SELECT * FROM country WHERE population >= $1', [request.params.size], (error, results) => {
        if (error) {
            response.send(error);
        }

        client.end()
        response.send(results.rows)
    })
})

module.exports = app;