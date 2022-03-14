const { DataTypes } = require('sequelize');

const Attributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncement: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
};

module.exports = (sequelize) => {
    const Category = sequelize.define(
        'Category',
        Attributes,
        {
            timestamps: false,
            tableName: 'Categories',
        },
    );

    return Category;
};
