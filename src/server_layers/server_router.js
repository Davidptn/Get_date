const express = require('express')
const postController = require('./server_controller')

const postRouter = express.Router()

ProductRouter.get("/posts/", postController.getAll)

ProductRouter.get("/posts/:id", postController.getById)

ProductRouter.post("/post", postController.create)

module.exports = postRouter