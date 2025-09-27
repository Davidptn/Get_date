const path = require("path")
const fs = require("fs")
const express = require('express')

const app = express();
const PORT = 3000;

function getPosts() {
    const data = fs.readFileSync("posts.json", "utf-8");
    
    let skip = 0;
    let take = posts.length;

    if (req.query.skip !== undefined) {
        skip = parseInt(req.query.skip);
    }

    if (req.query.take !== undefined) {
        take = parseInt(req.query.take);
    }

    return posts.slice(skip, skip + take);

    res.json(getPosts());
}

app.get('/posts', (req, res) => {
    const dpath = path.join(__dirname, "posts.json");
    let posts = JSON.parse(fs.readFileSync(dpath, "utf-8"));

    const id = +req.params.id;
    const post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
    }

    res.json(post);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});