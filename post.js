const path = require("path")
const fs = require("fs")
const express = require('express')

const app = express();
const PORT = 3000;


app.get("/posts", (req, res) => {
    const filePath = path.join(__dirname, "posts.json");

    fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        return res.status(500).json({ error: "Помилка при читанні файлу" });
    }

    res.json(JSON.parse(data));
    });
});


app.use((req, res) => {
    res.status(404).json({ error: "Сторінка не знайдена" });
});

app.listen(PORT, () => {
    console.log(`Сервер запущений на http://localhost:${PORT}`);
});
