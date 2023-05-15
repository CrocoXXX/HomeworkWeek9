const swaggerAutogen = require('swagger-autogen')();

// Swagger
const options = {
    info: {
        title: 'YExpress API with Swaggere',
        version: '1.0.0',
        description: 'This is a CRUD API application made with Express and documented with Swagger',
    },
    host: 'localhost:8080', // Replace with your API's hostname and port
    basePath: '/',
    schemes: ['http', 'https'], // Specify the protocols used by your API
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    security: [{
        bearerAuth: []
    }],
};
// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             version: '0.1.0',
//             title: 'Express API with Swagger',
//             description: 'This is a CRUD API application made with Express and documented with Swagger',
//         },
//         securityDefinitions: {
//             bearerAuth: {
//                 type: "apiKey",
//                 name: "Authorization",
//                 in: "header"
//             }
//         },
//         server: [{
//             url: 'http://localhost:8080',
//         }],
//         security: [{
//             bearerAuth: []
//         }],
//     },
// }

const outputFile = './swagger-output.json'
const endpointsFile = ['../index.js']

// swaggerAutogen(outputFile, endpointsFile, options)

module.exports = options