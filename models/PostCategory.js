module.exports = (sequelize) => {
  const PostCategory = sequelize.define('PostCategory', {},
  {
      timestamps: false,
      tableName: 'PostsCategories',
  });

  PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(
          models.Category,
          { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory, as: 'Categories' },
      );
      models.Category.belongsToMany(
          models.BlogPost,
          { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory, as: 'BlogPosts' },
      );
  };

  return PostCategory;
};
