//коментарі зроблені щоб я зміг подалі розуміти та використовувати код, потім вони додадутся до інших файлів
const express = require('express');
const fsP = require('fs/promises');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = 3000;

app.post('/posts', async (req, res) => {
    // Використовуємо try-catch для обробки помилок
    try {
        const { title, description, image } = req.body;

        if (!title || !description || !image) {
            return res.status(422).json({ error: "тайтл, опис и картинка обов`язкові" });
        }

        // Визначаємо шлях до JSON файлу з постами
        const dataPath = path.join(__dirname, 'posts.json');
        // Читаємо існуючі пости
        let posts = JSON.parse(await fsP.readFile(dataPath, 'utf-8'));

        // Створюємо новий пост
        const newPost = {
            id: posts.length ? posts[posts.length - 1].id + 1 : 1,
            title,
            description,
            image
        };

        // Додаємо новий пост до масиву
        posts.push(newPost);
        // Записуємо оновлений масив постів назад у файл
        await fsP.writeFile(dataPath, JSON.stringify(posts, null, 2), 'utf-8');
        // Відправляємо відповідь з новим постом
        res.status(201).json(newPost);
        } 
    // Якщо сталася помилка, відправляємо відповідь з кодом 500
    catch (error) {
        res.status(500).json({ error: "Помилка при створенні посту" });
    }
});

app.listen(3000, () => {
    console.log(`Сервер запущен на http://localhost:5000`);
});