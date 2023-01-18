const { Router } = require('express');
const userLogin  = require('../controllers/auth.controller');

const router = Router();

//para crear un login se utiliza post
router.post('/auth/login', userLogin);

module.exports = router;