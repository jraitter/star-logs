import express from "express";
import commentService from "../services/CommentService";

export default class CommentController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)

  }

  async getAll(req, res, next) {
    try {
      let data = await commentService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await commentService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await commentService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await commentService.edit(req.params.id, req.boy);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await commentService.delete(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

}