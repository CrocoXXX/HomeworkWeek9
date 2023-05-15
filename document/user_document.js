/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - gender
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: The id of the user.
 *         email:
 *           type: varchar
 *           description: The email of the user.
 *         gender:
 *           type: varchar
 *           description: The gender of the user.
 *         password:
 *           type: varchar
 *           description: The password of the user. 
 *         role:
 *           type: varchar
 *           description: The role of the user.
 *       example:
 *         id: 1,
 *         email: olen.ac.id, 
 *         gender: Male,
 *         password: passolen,
 *         role: Developer,
 */