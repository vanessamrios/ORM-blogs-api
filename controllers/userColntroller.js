const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const alreadyExistes = await User.findOne({ where: { email } });
  if (alreadyExistes) return res.status(409).json({ message: 'User already registered' });

  const newUser = await User.create({ displayName, email, password, image });

  const token = jwtGenerator({ id: newUser.id, email });

  return res.status(201).json({ token });
};

module.exports = {
  create,
};