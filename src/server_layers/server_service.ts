import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";

const postsPath = path.join(__dirname, "posts.json");

let posts: any[] = [];
if (fs.existsSync(postsPath)) {
    const data = fs.readFileSync(postsPath, "utf-8");
    posts = JSON.parse(data);
    }

export const postService = {
    async getAll() {
        return posts;
    },

    async getById(id: string | number) {
        const post = posts.find((p) => p.id === Number(id));
        return post;
    },
    
    async create(data: { title: string; content: string }) {
        const newPost = {
        id: Date.now(),
        title: data.title,
        content: data.content,
        };

    posts.push(newPost);

    await fsPromises.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf-8");

    return newPost;
    },

    async update(id: string | number, data: { title?: string; content?: string }) {
        const postIndex = posts.findIndex((p) => p.id === Number(id));
        if (postIndex === -1) {
            return null;
        }
        
        posts[postIndex] = { ...posts[postIndex], ...data };

        await fsPromises.writeFile(postsPath, JSON.stringify(posts, null, 2), "utf-8");

        return posts[postIndex];
    }

};

export {postService};
