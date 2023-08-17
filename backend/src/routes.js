const express = require('express');
const routes = express.Router();

const teacherController = require('./controllers/teacherController');
const classesControllers = require('./controllers/classesController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

routes.post('/sessions', sessionController.create);

routes.get('/teachers', teacherController.index);
routes.post('/teachers', teacherController.create);

routes.get('/profile', profileController.index);

routes.get('/classes', classesControllers.index);
routes.get('/classes/:title', classesControllers.indexFiltered);
routes.post('/classes', classesControllers.create);
routes.delete('/classes/:id', classesControllers.delete)

module.exports = routes;