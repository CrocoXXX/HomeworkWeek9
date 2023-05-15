// console.log('Connected')
const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

// Swagger
// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Express API with Swagger',
//             version: '0.1.0',
//             description: 'This is a CRUD API application made with Express and documented with Swagger',
//         },
//         components: {
//             securitySchemes: {
//                 bearerAuth: {
//                     type: 'http',
//                     in: 'hedaer',
//                     name: 'Authorization',
//                     description: 'Bearer token to access these api endpoints',
//                     scheme: 'bearer',
//                     bearerFormat: 'JWT',
//                 }
//             }
//         },
//         security: [{
//             bearerAuth: [],
//         }],
//         servers: [{
//             url: 'http://localhost:8080',
//         }],
//     },
//     apis: ['./document/*']
// }

const options = require('./config/swagger')
const swaggerDocument = require('./config/swagger-output.json');
// const specs = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true
}))

const pool = require('./config/queries')
const movies = require('./controller/movies_controller')
const users = require('./controller/users_controller')
const authentication = require('./controller/authentication_controller')

// Parse requests of content-type - application/json
app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
// app.use(bodyParser.json())

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

// Simple router
// app.get('/', (req, res) => {
//     res.send('Welcome to Homework 9 Lawrence Adi Noman')
// })

// Should be in the same directory
app.use('/movies', movies)
app.use('/users', users)
app.use('/auth', authentication)

// Connected to Database
pool.connect((err, res) => {
    console.log('Connected')
})

// Set port, listen for requests
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})