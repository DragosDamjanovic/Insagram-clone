import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  caption: { type: String },
  image: { type: String },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const Post = mongoose.model("post", postSchema);

export default Post;
