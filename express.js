const express = require('express');

const app = express();
const Port = 3000;
const HOST = 'localhost'

function getCurrentTimestamp() {
    return new Date();
}

app.get('/timestamp', (req, res) => {
    res.json({ timestamp: getCurrentTimestamp() });
});

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});