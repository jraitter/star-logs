import mongoose from "mongoose";
import Comment from "../models/Comment";

const _repository = mongoose.model("Comment", Comment);

class CommentService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async create(rawData) {
    return await _repository.create(rawData);
  }
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true });
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id);
  }
}

const commentService = new CommentService();
export default commentService;