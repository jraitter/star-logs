import express from "express";
import logService from "../services/LogService";

export default class LogsController {

  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:author", this.getByAuthor)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id/edit/:author", this.edit)
      .delete("/:id/delete/:author", this.delete)

  }

  async getAll(req, res, next) {
    try {
      let data = await logService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await logService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getByAuthor(req, res, next) {
    try {
      let data = await logService.getByAuthor(req.params.author)
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await logService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await logService.edit(req.params, req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await logService.delete(req.params);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

}