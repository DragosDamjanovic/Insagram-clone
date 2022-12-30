import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  text: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
