import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import { check, validationResult } from "express-validator";
import Post from "../Models/PostModel.js";
import User from "../Models/UserModel.js";
import Comment from "../Models/CommentModel.js";

const postRouter = express.Router();

// ADD POST
postRouter.post(
  "/",
  [protect, [check("image", "Image is required").not().isEmpty()]],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { image } = req.body;

      // Create and save post
      const newPost = new Post({ image });
      const post = await newPost.save();

      // Add post to users posts
      const user = await User.findById(req.user.id);
      user.posts.unshift(post.id);
      await user.save();
      await post.save();

      res.json(post);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// GET USER POSTS
postRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user.id);

      const posts = [];
      for (const postId of user.posts) {
        posts.push(await Post.findById(postId));
      }

      res.json(posts);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// GET POST BY ID
postRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ msg: "Post not found" });
      }

      res.json(post);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// CHANGE POST CAPTION
postRouter.patch(
  "/rename/:id",
  [protect, [check("caption", "Caption is required").not().isEmpty()]],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ msg: "Post not found" });
      }

      post.title = req.body.caption;
      await post.save();

      res.json(post);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// DELETE POST
postRouter.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }

      await post.remove();

      res.json(req.params.id);
    } catch (err) {
      res.status(500).send("Server Error");
      throw new Error(err.message);
    }
  })
);

export default postRouter;
