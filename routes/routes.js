const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller');
const registerdStudents = require('../controller/registerdStudents');

//registerd details

/**
 * Handle POST request to create a new post.
 * @swagger
 * /register:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with a specified schema.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *               description: The post content.
 *             email:
 *               type: string
 *               description: Remarks for the post.
 *             password:
 *               type: string
 *               description: User ID associated with the post.
 *     responses:
 *       200:
 *         description: Post created successfully.
 *         content:
 *           application/json:
 *             example: { message: 'Post created successfully' }
 */
routes.post('/register',controller.register);
routes.post('/login',controller.login);
routes.put('/update/:id',controller.update);
routes.delete('/dalete/:id',controller.deleteData);


/**
 * @swagger
 * /getData:
 *   get:
 *     summary: Get all getData
 *     description: Retrieve a list of all getData
 *     responses:
 *       200:
 *         description: data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 */
routes.get('/getData',controller.getAllData);



//add Details of students
routes.post('/studentsDetails',registerdStudents.addData);




module.exports = routes;