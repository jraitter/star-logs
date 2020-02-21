import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = new Schema(
  {
    author: { type: String, required: true },
    body: { type: String },
    shipId: { type: ObjectId, ref: "Ship" },
    logId: { type: ObjectId, ref: "Log" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;