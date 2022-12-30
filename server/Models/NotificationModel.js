import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
    },
    type: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
    read: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("notification", notificationSchema);

export default Notification;
