const express = require('express');
const { login } = require('../controllers/loginController');
const { validateEmailNotEmpty, 
    validatePasswordNotEmpty } = require('../middlewares/loginMiddlewares');

const router = express.Router();

router.post(
    '/',
    validateEmailNotEmpty,
    validatePasswordNotEmpty,
    login,
);

module.exports = router;