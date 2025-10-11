import express from 'express'
import {postRouter} from './server_layers/server_router'

const app = express()

const app: express.Express = express()

app.use(express.json())
app.use(postRouter)

const PORT: number = 2232
const HOST: string = 'localhost'

app.get("/", (req, res) =>{
    res.status(200).json("hello")
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})