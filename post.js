const path = require("path")
const fs = require("fs")
const express = require('express')

const app = express();
const PORT = 3000;


const postsPath = path.join(__dirname, "posts.json");
const posts = JSON.parse(fs.readFileSync(postsPath, "utf-8"));

app.get("/posts", (req, res) => {
    const filePath = path.join(__dirname, "posts.json");

    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Помилка при читанні файлу" });
        }

        res.json(JSON.parse(data));
    });
});


app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
