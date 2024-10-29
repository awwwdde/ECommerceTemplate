// models/Reservation.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reservationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Reservation;