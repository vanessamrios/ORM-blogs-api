const express = require('express');
const { create, findAll } = require('../controllers/userColntroller');
const { validateDisplayName, 
    validateEmail, validatePassword } = require('../middlewares/userMiddlewares');

const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  create,
);

router.get(
  '/',
  authMiddleware,
  findAll,
);

// router.put(
//   '/',
//   auth,
//   update,
// );

module.exports = router;