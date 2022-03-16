const express = require('express');
const { create, findAll } = require('../controllers/categoriesController');
const { validateName } = require('../middlewares/categoriesMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post(
  '/',
  validateName,
  authMiddleware,
  create,
);

router.get(
  '/',
  authMiddleware,
  findAll,
);

// router.get(
//   '/:id',
//   authMiddleware,
//   findByPk,
// );

// router.put(
//   '/',
//   auth,
//   update,
// );

module.exports = router;