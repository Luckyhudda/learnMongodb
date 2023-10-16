const reposetory = require("../db/mongodb/repository");

const crudController = {
  Get: (req, res) => {
    reposetory
      .FindAll()
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
  GetOne: (req, res) => {
    reposetory
      .FindOne(req.params.id)
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
  Post: (req, res) => {
    reposetory
      .InsertOne(req.body)
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
  Post: (req, res) => {
    reposetory
      .InsertMany(req.body)
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
  Put: (req, res) => {
    reposetory
      .FindOne(req.params.id)
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
  Delete: (req, res) => {
    reposetory
      .FindOne(req.params.id)
      .then((result) => {
        res.json({
          message: "success",
          result,
        });
      })
      .catch((err) => {
        res.json({
          message: "failed",
          error: err,
        });
      });
  },
};

module.exports = crudController;
