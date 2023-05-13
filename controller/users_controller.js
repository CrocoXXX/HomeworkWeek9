const express = require('express')
const router = express.Router()
const pool = require('../config/queries')
const authenticationTokenMiddleware = require('../middleware/auth')

// router.use(authenticationTokenMiddleware)

// GET Databases Routes
router.get('/', authenticationTokenMiddleware, (req, res) => {
    // (?page=..&size=..)
    pool.query('SELECT * FROM users ORDER BY id ASC LIMIT $2 OFFSET (($1 - 1) * $2)', [req.query.page, req.query.size], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

router.get('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`SELECT * FROM users WHERE id = ${req.params.id}`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})


// POST Databases Routes
router.post('/', authenticationTokenMiddleware, (req, res) => {
    pool.query('INSERT INTO users ("id", "email", "gender", "password", "role") VALUES ($1, $2, $3, $4, $5)', [req.body.id, req.body.email, req.body.gender, req.body.password, req.body.role], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Successfully Insert Data'
        })
    })
})

// PUT Databases Routes
router.put('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = ${req.params.id}`, [req.body.email, req.body.gender, req.body.password, req.body.role], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Successfully Update Data'
        })
    })
})

// DELETE Databases Routes
router.delete('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`DELETE FROM users WHERE id = ${req.params.id}`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Successfully Delete Data'
        })
    })
})

// export this router to use in our index.js
module.exports = router