const express = require('express')
const router = express.Router()
const pool = require('../config/queries')
const authenticationTokenMiddleware = require('../middleware/auth')

// GET Databases Routes
router.get('/', authenticationTokenMiddleware, (req, res) => {
    // (?page=..&size=..)
    pool.query(`SELECT * FROM movies ORDER BY id ASC LIMIT $2 OFFSET (($1 - 1) * $2)`, [req.query.page, req.query.size], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

router.get('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`SELECT * FROM movies WHERE id = ${req.params.id}`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})


// POST Databases Routes
router.post('/', authenticationTokenMiddleware, (req, res) => {
    pool.query(`INSERT INTO movies ("id", "title", "genres", "year") VALUES ($1, $2, $3, $4);`, [req.body.id, req.body.title, req.body.genres, req.body.year], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Succesfully Insert Data.'
        })
    })
})


// PUT Databases Routes
router.put('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = ${req.params.id}`, [req.body.title, req.body.genres, req.body.year], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Succesfully Update Data'
        })
    })
})

// DELETE Databases Routes
router.delete('/:id', authenticationTokenMiddleware, (req, res) => {
    pool.query(`DELETE FROM movies WHERE ID = ${req.params.id}`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'Succesfully Delete Data'
        })
    })
})

// Dynamic routes
router.get('/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})


// export this router to use in our index.js
module.exports = router