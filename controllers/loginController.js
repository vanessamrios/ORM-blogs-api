const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  if (password !== user.password) return res.status(401).json({ error: 'Invalid password' });

  const token = jwtGenerator({ id: user.id, email });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};