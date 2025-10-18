import { Request, Response } from "express";
import postService from "./server_service.ts";

export const postController = {
    getAllPosts: async (req: Request, res: Response): Promise<void> => {
        try {
        const posts = await postService.getAll();
        res.json(posts);
        } catch (error: any) {
        res.status(500).json({ message: error.message });
        }
    },

    getById: async (req: Request, res: Response): Promise<void> => {
        try {
        const post = await postService.getById(req.params.id);
        if (!post) {
            res.status(404).json({ message: "Пост не найден" });
            return;
        }
        res.json(post);
        } catch (error: any) {
        res.status(500).json({ message: error.message });
        }
    },

    create: async (req: Request, res: Response): Promise<void> => {
        try {
            const newPost = await postService.create(req.body);
            res.status(201).json(newPost);
        } catch (error: any) {
        res.status(500).json({ message: error.message });
        }
    },
    update: async (req: Request, res: Response): Promise<void> => {
        try {
            const updatedPost = await postService.update(req.params.id, req.body);  
            if (!updatedPost) {
                res.status(404).json({ message: "Пост не найден" });
                return;
            }
            res.json(updatedPost);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    },
};

export {postController};