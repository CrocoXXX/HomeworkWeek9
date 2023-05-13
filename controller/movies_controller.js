/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the movie
 *         title:
 *           type: varchar
 *           description: The title of your movie
 *         genres:
 *           type: varchar
 *           description: The genres of your movie
 *         year:
 *           type: varchar
 *           description: The year of your movie
 *       example:
 *         id: 1,
 *         title: Reckless
 *         genres: Comedy|Drama|Romance
 *         year: 2001,
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The movies managing API
 *  
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The movie response by id.
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '$/components/schemas/Movies'
 *       404:
 *         description: The movie was not found.
 *  
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '$/components/schemas/Movie'
 *       500:
 *         description: Some server error.
 */

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