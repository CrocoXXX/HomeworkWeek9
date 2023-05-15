/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - genres
 *         - year
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the movie.
 *         title:
 *           type: varchar
 *           description: The title of your movie.
 *         genres:
 *           type: varchar
 *           description: The genres of your movie.
 *         year:
 *           type: varchar
 *           description: The year of your movie.
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
 * /movies/:
 *   get:
 *     summary: Get all the movie
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The movie response.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '$/components/schemas/Movies'
 *       404:
 *         description: The movie was not found.
 * /movies:
 *   post:
 *     summary: Create a new movie.
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movies'
 *     responses:
 *       200:
 *         description: The movie created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *       404:
 *         description: The movie was not found.
 *  
 * /movies/{id}:
 *   get:
 *      summary: Get the movie by id.
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: The movie by id.
 *      responses:
 *        200:
 *          description: The movie response by id.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movies'
 *        404:
 *          description: The movie was not found
 *  
 *   put:
 *      summary: Update the movie by id.
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Update the movie by id.
 *      requestBody:
 *          required: true
 *          content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Movies'
 *      responses:
 *        200:
 *          description: The movie was updated.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Movies'
 *        404:
 *          description: The movie was not found
 *  
 *   delete:
 *      summary: Delete the movie by id.
 *      tags: [Movies]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: Delete The movie by id
 *  
 *      responses:
 *        200:
 *          description: The movie created by id
 *        404:
 *          description: The movie was not found
 */