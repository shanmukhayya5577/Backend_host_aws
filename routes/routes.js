const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller');
const registerdStudents = require('../controller/registerdStudents');

//registerd details
routes.post('/register',controller.register);
routes.post('/login',controller.login);
routes.put('/update/:id',controller.update);
routes.get('/getData',controller.getAllData)


//add Details of students
routes.post('/studentsDetails',registerdStudents.addData);




module.exports = routes;