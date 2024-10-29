// routes/reservations.js
const express = require('express');
const Reservation = require('../models/Reservation');
const router = express.Router();

// Создание бронирования
router.post('/', async (req, res) => {
    const { userId, productId, reservationDate } = req .body;
    const reservation = await Reservation.create({ userId, productId, reservationDate });
    res.status(201).json(reservation);
});

// Получение бронирований для пользователя
router.get('/user/:id', async (req, res) => {
    const reservations = await Reservation.findAll({
        where: {
            userId: req.params.id,
        },
    });
    res.json(reservations);
});

module.exports = router;