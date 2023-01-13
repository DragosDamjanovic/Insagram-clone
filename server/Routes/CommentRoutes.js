import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import { check, validationResult } from "express-validator";
import Comment from "../Models/CommentModel.js";
import Post from "../Models/PostModel.js";
import User from "../Models/UserModel.js";

const commentRouter = express.Router();

// ADD COMMENT
commentRouter.post(
  "/:postId",
  [protect, [check("text", "Text is required").not().isEmpty()]],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { text } = req.body;
      const userId = await User.findById(req.user.id);
      const user = userId.userName;

      // Create and save comment
      const newComment = new Comment({ text, user });
      const comment = await newComment.save();

      // Assign comment to post
      const post = await Post.findById(req.params.postId);
      post.comments.push(comment.id);
      await post.save();

      res.json(comment);
    } catch (err) {
      res.status(500).send("Server Error");
      throw new Error(err.message);
    }
  })
);

// GET ALL OF POST COMMENTS
commentRouter.get(
  "/postComments/:postId",
  protect,
  asyncHandler(async (req, res) => {
    try {
      // Find post by ID from request parameters
      const post = await Post.findById(req.params.postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post.comments);
    } catch (err) {
      res.status(500).send("Server Error");
      throw new Error(err.message);
    }
  })
);

// GET COMMENT BY ID
commentRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
      }

      res.json(comment);
    } catch (err) {
      res.status(500).send("Server Error");
      throw new Error(err.message);
    }
  })
);

// DELETE COMMENT
commentRouter.delete(
  "/:postId/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      const post = await Post.findById(req.params.postId);
      if (!comment || !post) {
        return res.status(404).json({ message: "Post/comment not found" });
      }

      post.comments.splice(post.comments.indexOf(req.params.id), 1);

      await comment.remove();
      await post.save();

      res.json(req.params.id);
    } catch (err) {
      res.status(500).send("Server Error");
      throw new Error(err.message);
    }
  })
);

export default commentRouter;
