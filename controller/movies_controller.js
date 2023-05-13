/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
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
 * /movies:
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '$/components/schemas/Book'
 *       500:
 *         description: Some server error.
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
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '$/components/schemas/Book'
 *       500:
 *         description: Some server error.
 * 
 */

const express = require('express')
const router = express.Router()
const pool = require('../config/queries')

// GET Databases Routes
router.get('/', (req, res) => {
    // (?page=..&size=..)
    pool.query(`SELECT * FROM movies ORDER BY id ASC LIMIT $2 OFFSET (($1 - 1) * $2)`, [req.query.page, req.query.size], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

router.get('/:id', (req, res) => {
    pool.query(`SELECT * FROM movies WHERE id = ${req.params.id}`, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})


// POST Databases Routes
router.post('/', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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