const sequelize = require('sequelize');
const { User, BlogPost, Category } = require('../models');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const resisteredCategories = await Category.findAll(); // traz um array de objetos 
  const registeredCategoryIds = resisteredCategories.map(({ id }) => id); // mapeia para um array de números (ids)

  const allCategoriesExist = categoryIds.every((id) => registeredCategoryIds.includes(id)); // retorna uma valor true se todas as catgorias recebidas no body, estiverem registradas no banco e false se alguma não estives.

  if (!allCategoriesExist) return res.status(400).json({ message: '"categoryIds" not found' });
  const { id } = req.tokenData;

  const published = sequelize.fn('NOW');

  const updated = sequelize.fn('NOW');

  const newBlogPost = await BlogPost.create({ title, content, userId: id, published, updated });

  // adiciona categoryIds a tabela de junção
  
  await newBlogPost.addCategories(categoryIds); // addCategories é uma função criada pelo sequelize no resultado da criação de um novo blogPost.

// outra opção para fazer essa operação se a função dada pelo sequelize não funcionar.
//   await Promise.all(categoryIds.map((category) => PostCategory.create({ categoryId: category, postId: newBlogPost.id })));

  return res.status(201).json(newBlogPost);
};

const findAll = async (req, res) => {
  const categoriesList = await BlogPost.findAll({
      attributes: { exclude: ['UserId'] },
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      }, {
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
      }],
  });

  return res.status(200).json(categoriesList);
};

module.exports = {
  create,
  findAll,
};