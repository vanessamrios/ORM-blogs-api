const express = require('express');
const { create } = require('../controllers/blogPostController');

const authMiddleware = require('../middlewares/authMiddleware');
const { validateTitle, 
    validateContent, validateCategoryIds } = require('../middlewares/blogPostMiddleware');

const router = express.Router();

router.post(
  '/',
  validateTitle,
  validateContent,
  validateCategoryIds,
  authMiddleware,
  create,
);

// router.get(
//   '/',
//   authMiddleware,
//   findAll,
// );

module.exports = router;