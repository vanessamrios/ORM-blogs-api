const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) {
    return res.status(400).send({ message: '"displayName" is required' });
  }
  if (displayName.length < 8) {
    return res.status(400).send({ message: 
      '"displayName" length must be at least 8 characters long' });
  }
  return next();
};

function isEmailValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
  }

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: '"email" is required' });
  }
  if (!isEmailValid(email)) {
    return res.status(400).send({ message: '"email" must be a valid email' });
  }
  return next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
  if (!password) {
    return res.status(400).send({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).send({ message: '"password" length must be 6 characters long' });
  }
  return next();
};

module.exports = {
    validateDisplayName,
    validateEmail,
    validatePassword,
};
