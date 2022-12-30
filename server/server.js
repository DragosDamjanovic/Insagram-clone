import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/MongoDb.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import storyRouter from "./Routes/StoryRoutes.js";
import postRouter from "./Routes/PostRoutes.js";
import notificationRouter from "./Routes/NotificationRoutes.js";
import commentRouter from "./Routes/CommentRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(cors());

// API
app.use("/api/users", userRouter);
app.use("/api/stories", storyRouter);
app.use("/api/posts", postRouter);
app.use("/api/notifications", notificationRouter);
app.use("/api/comments", commentRouter);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("instagram-clone/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "instagram-clone", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));
