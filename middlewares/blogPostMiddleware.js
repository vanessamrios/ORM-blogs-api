const validateTitle = (req, res, next) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send({ message: '"title" is required' });
    }
    return next();
  };

  const validateContent = (req, res, next) => {
    const { content } = req.body;
    if (!content || content === undefined) {
      return res.status(400).send({ message: '"content" is required' });
    }
    return next();
  };

  const validateCategoryIds = (req, res, next) => {
    const { categoryIds } = req.body;
    if (!categoryIds || categoryIds === undefined) {
        return res.status(400).send({ message: '"categoryIds" is required' });
    }
    return next();
  };
  
  module.exports = {
      validateTitle,
      validateContent,
      validateCategoryIds,
  };