// console.log('Connected')
const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080 || process.env.PORT

// Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '0.1.0',
            description: 'This is a CRUD API application made with Express and documented with Swagger',
        },
        servers: [{
            url: 'http://localhost:8080',
        }, ],
    },
    apis: ['./controller/*']
}

const specs = swaggerJsdoc(options)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true
}))

const pool = require('./config/queries')
const movies = require('./controller/movies_controller')
const users = require('./controller/users_controller')


// Parse requests of content-type
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/hello', (req, res) => {
    res.send('Hello World')
})

// Should be in the same directory
app.use('/movies', movies)
app.use('/users', users)

// Connected to Database
pool.connect((err, res) => {
    console.log('Connected')
})

// Connected to port 8080
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})