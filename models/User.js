const { DataTypes } = require('sequelize');

const Attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncement: true,
      },
      displayName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  };

module.exports = (sequelize) => {
    const User = sequelize.define(
        'User', 
        Attributes,
        {
            timestamps: false,
            tableName: 'Users',
        },
    );
    User.associate = (models) => {
        User.hasMany(models.BlogPost, { foreingKey: 'userId', as: 'BlogPosts' });
    };

    return User;
};