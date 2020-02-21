import mongoose from "mongoose";
import Log from "../models/Log";

const _repository = mongoose.model("Log", Log);

class LogService {
  async getAll() {
    return await _repository.find({})
      .populate("shipId", "name");
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  async getByAuthor(author) {
    return await _repository.find({ "author": author })
      .populate("shipId", "name");
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

const logService = new LogService();
export default logService;