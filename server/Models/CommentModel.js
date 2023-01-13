import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  user: {
    type: String,
  },
  text: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
  },
});

const Comment = mongoose.model("comment", commentSchema);

export default Comment;
