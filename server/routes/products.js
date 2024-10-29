// routes/products.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Получение всех товаров
router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
});

// Получение товара по ID
router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Создание нового товара
router.post('/', async (req, res) => {
    const { name, description, manufacturer, tags, price } = req.body;
    const product = await Product.create({ name, description, manufacturer, tags, price });
    res.status(201).json(product);
});

// Обновление товара
router.put('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (product) {
        const { name, description, manufacturer, tags, price } = req.body;
        await product.update({ name, description, manufacturer, tags, price });
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Удаление товара
router.delete('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    if (product) {
        await product.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;