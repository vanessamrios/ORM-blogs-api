const validateEmailNotEmpty = (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) {
        return res.status(400).send({ message: '"email" is required' });
      }
    if (email.length === 0) {
      return res.status(400).send({ message: '"email" is not allowed to be empty' });
    }
    return next();
};
  
const validatePasswordNotEmpty = (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) {
        return res.status(400).send({ message: '"password" is required' });
      }
    if (password.length === 0) {
      return res.status(400).send({ message: '"password" is not allowed to be empty' });
    }
    return next();
  };
  
  module.exports = {
      validateEmailNotEmpty,
      validatePasswordNotEmpty,
  };
