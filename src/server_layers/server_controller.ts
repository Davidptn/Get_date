import postService from "./post.service.js";
import { Request, Response } from "express"


export const postController = {
    getAllPosts:(req: Request,res: Response) {
        try {
            const posts = await postService.getAll();
            res.json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
            }
    },

    getById:(req: Request, res: Response)=>{
        try {
        const post = await postService.getById(req.params.id);
        if (!post) return res.status(404).json({ message: "Пост не найден" });
        res.json(post);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    },

    create: async (req: Request, res: Response) => {
        try {
        const newPost = await postService.create(req.body);
        res.status(201).json(newPost);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    }
};

//module.exports = postController;