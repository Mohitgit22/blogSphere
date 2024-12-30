const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new post
router.post('/', async (req, res) => {
    const { title, content, summary } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Title and content are required' });

    try {
        const newPost = new Post({ title, content, summary });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT to update a post
router.put('/:id', async (req, res) => {
    const { title, content, summary } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, summary },
            { new: true, runValidators: true }
        );
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a post
router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
