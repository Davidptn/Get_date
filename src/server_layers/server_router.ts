import express from 'express'
import { postController } from './server_controller'

const postRouter = express.Router()

postRouter.get("/posts/", postController.getAllPosts)

postRouter.get("/posts/:id", postController.getById)

postRouter.post("/post", postController.create)

export { postRouter }