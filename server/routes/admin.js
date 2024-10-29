// routes/admin.js
const express = require('express');
const Product = require('../models/Product');
const Reservation = require('../models/Reservation');
const router = express.Router();
// routes/admin.js
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

// Остальные маршруты админ-панели
// Получение всех товаров для админ-панели
router.get('/products', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Удаление товара для админ-панели
router.delete('/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (product) {
        await product.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Получение всех бронирований для админ-панели
router.get('/reservations', async (req, res) => {
    const reservations = await Reservation.findAll();
    res.json(reservations);
});

module.exports = router;