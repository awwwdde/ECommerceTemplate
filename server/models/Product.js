// models/Product.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Настройка подключения к базе данных

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING), // Массив тегов
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Product;