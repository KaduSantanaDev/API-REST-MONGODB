const express = require('express');
const homeController = require('./controllers/HomeController');
const teachersController = require('./controllers/TeachersController');
const studentController = require('./controllers/StudentsController');

const router = express.Router();

router.get('/', homeController.index);
router.post('/', homeController.store);

router.get('/teachers', teachersController.index);
router.post('/teachers', teachersController.store);
router.put('/teachers/:id', teachersController.update);
router.delete('/teachers/:id', teachersController.delete);

router.get('/students', studentController.index);
router.post('/students', studentController.store);
router.put('/students/:id', studentController.update);
router.delete('/students/:id', studentController.delete);

module.exports = router;
