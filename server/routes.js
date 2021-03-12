import express from "express";

import { createPost, getPosts, getPost, updatePost, deletePost } from './controllers.js';

const router = express.Router();

router.post('/todos', createPost);
router.get('/todos', getPosts);
router.get('/todos/:id', getPost);
router.put('/todos/:id', updatePost);
router.delete('/todos/:id', deletePost);

export default router;
