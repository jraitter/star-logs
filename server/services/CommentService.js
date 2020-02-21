import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentService {
  async getAll() {
    return await _repository.find({})
      .populate("shipId", "name")
      .populate("logId", "body");
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async getByAuthor(author) {
    return await _repository.find({ "author": author })
      .populate("shipId", "name")
      .populate("logId");
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(params, update) {
    let log = await _repository.findById(params.id)
    if (log.author != params.author) {
      return ("you can't edit this!")
    }
    return await _repository.findByIdAndUpdate(params.id, update, { new: true });
  }
  async delete(params) {
    let log = await _repository.findById(params.id)
    if (log.author != params.author) {
      return ("you can't delete this!")
    }
    await _repository.findByIdAndDelete(params.id);
    return ("deleted")
  }
}

const commentService = new CommentService();
export default commentService;