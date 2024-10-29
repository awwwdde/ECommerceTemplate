// server.js
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
import authRoutes from './routes/auth.js'; // Импорт маршрутов аутентификации

// Загружаем переменные окружения из файла .env
import dotenv from 'dotenv';
dotenv.config();

// Создаем экземпляр приложения Express
const app = express();

// Подключаем body-parser для обработки JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Настройка подключения к PostgreSQL с помощью Sequelize
const sequelize = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
});

// Проверка подключения к базе данных
sequelize.authenticate()
    .then(() => {
        console.log('PostgreSQL connected');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Добавляем обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.send('Welcome to the Authentication API');
});

// Подключаем маршруты аутентификации
app.use('/api/auth', authRoutes);

// Обработчик ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});