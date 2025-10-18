import express, { Router } from "express";
import { postController } from "./server_controller.js";

const postRouter: Router = express.Router();

postRouter.get("/posts", postController.getAllPosts);

postRouter.get("/posts/:id", postController.getById);

postRouter.post("/posts", postController.create);

postRouter.put("/posts/:id", postController.update);

export { postRouter };