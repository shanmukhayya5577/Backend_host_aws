const express = require('express');
const routes = express.Router();
const controller = require('../controller/controller');
const registerdStudents = require('../controller/registerdStudents');

//registerd details
routes.post('/register',controller.register);
routes.post('/login',controller.login);
routes.put('/update/:id',controller.update);
routes.get('/getData',controller.getAllData);
routes.delete('/dalete/:id',controller.deleteData)



//add Details of students
routes.post('/studentsDetails',registerdStudents.addData);




module.exports = routes;