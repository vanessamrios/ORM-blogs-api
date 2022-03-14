const { DataTypes } = require('sequelize');

const Attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncement: true,
      },
      title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      published: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
};

module.exports = (sequelize) => {
    const BlogPost = sequelize.define(
        'BlogPosts',
        Attributes,
        {
            timestamps: true,
            tableName: 'BlogPosts',
        },
    );

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
    };
    
    return BlogPost;
};