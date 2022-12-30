import mongoose from "mongoose";

const storySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  caption: { type: String },
  image: { type: String },
  duration: { type: Number },
  viewers: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Story = mongoose.model("story", storySchema);

export default Story;
