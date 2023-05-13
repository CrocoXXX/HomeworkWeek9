const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'movie_database',
    password: 'olendb',
    port: 5432,
})

module.exports = pool