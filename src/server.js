const express = require('express')
const postRouter = require('./server_layers/server_router')

const app = express()


app.use(express.json())
app.use(postRouter)

const PORT = 2232
const HOST = 'localhost'

app.get("/", (req, res) =>{
    res.status(200).json("hello")
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})