import path from 'path'
import fs from 'fs'
import fsPromises from 'fs/promises'

const productsPath = path.join(__dirname, "products.json")
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))


export const postService = {
    getAll() {
        return Promise.resolve(posts);
    },

    getById(id) {
        const post = posts.find((p) => p.id === Number(id));
        return Promise.resolve(post);
    },

    create(data) {
        const newPost = {
        id: Date.now(),
        title: data.title,
        content: data.content,
        };
    posts.push(newPost);
    return Promise.resolve(newPost);
    },
};

//module.exports = postService
