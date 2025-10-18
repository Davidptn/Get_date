import { Request, Response } from "express";

export interface Post {
    id: number;
    created: string;
    updated: string;
}

export type createPostData = Omit<Post, "id" | "created" | "updated">;

export type updatePostData = Partial<Omit<Post, "id" | "created" | "updated">;

export interface PostServiceContract {
    getById(id: string | number): Promise<Post | null>;
    getAll(): Promise<Post[]>;
    create(data: createPostData): Promise<Post>;
    update(id: string | number, data: updatePostData): Promise<Post | null>;
}

export interface PostControllerContract {
    getById(req: Request, res: Response): Promise<void>;
    getAllPosts(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
