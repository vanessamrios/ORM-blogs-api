const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name === undefined) {
      return res.status(400).send({ message: '"name" is required' });
    }
    return next();
  };
  
  module.exports = {
      validateName,
  };
