import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import Notifications from "../Models/NotificationModel.js";

const notificationRouter = express.Router();

// Get a list of notifications for the current user
notificationRouter.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const notifications = await Notifications.find({
        user: req.user._id,
      });

      res.json(notifications);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

// Mark a notification as read
notificationRouter.put(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    try {
      // Find the notification to update
      const notification = await Notification.findById(req.params.id);
      // Update the notification to mark it as read
      notification.read = true;
      // Save the updated notification to the database
      await notification.save();
      // Send a success response
      res.send({ success: true });
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  })
);

export default notificationRouter;
