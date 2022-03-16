const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
  const alreadyExistes = await Category.findOne({ where: { name } });
  if (alreadyExistes) return res.status(409).json({ message: 'User already registered' });

  const newCategory = await Category.create({ name });

  return res.status(201).json(newCategory);
};

const findAll = async (req, res) => {
  const categoriesList = await Category.findAll({ order: [
    ['id', 'ASC'],
  ] });

  return res.status(200).json(categoriesList);
};

module.exports = {
  create,
  findAll,
};