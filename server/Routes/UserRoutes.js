import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import generateToken from "../utils/generateToken.js";
import User from "./../Models/UserModel.js";

const userRouter = express.Router();

// LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

// REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { name, userName, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      name,
      userName,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        id: user.id,
        name: user.name,
        userName: user.userName,
        email: user.email,
        profilePicture: user.profilePicture,
        bio: user.bio,
        posts: user.posts,
        followers: user.followers,
        following: user.following,
        storyes: user.storyes,
        token: generateToken(user.id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  })
);

export default userRouter;
