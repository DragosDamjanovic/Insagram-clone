import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import Story from "../Models/StoryModel.js";
import User from "../Models/UserModel.js";

const storyRouter = express.Router();

// Create a new story
storyRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    try {
      // Create a new Story object
      const story = new Story({
        user: req.user._id,
        image: req.body.image,
        caption: req.body.caption,
        duration: req.body.duration,
        viewers: [],
      });

      // Save the story to the database
      await story.save();

      // Send the new story as the response
      res.send(story);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// Get story
storyRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const story = await Story.findById(req.params.id);

      res.json(story);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// Get a list of stories for the current user
storyRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const stories = await Story.find({
        user: req.user._id,
      });

      res.json(stories);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// Get a list of stories for the users being followed by the current user
storyRouter.get(
  "/feed",
  protect,
  asyncHandler(async (req, res) => {
    try {
      // Find the users being followed by the current user
      const users = await User.find({ _id: { $in: req.user.following } });

      // Extract the object IDs of the followed users
      const userIds = users.map((user) => user._id);

      // Find the stories for the followed users
      const stories = await Story.find({ user: { $in: userIds } });

      res.json(stories);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

export default storyRouter;
