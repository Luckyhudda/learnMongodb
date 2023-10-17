const reposetory = require("../db/mongodb/repository");

const crudController = {

  GetMany: (req, res) => {
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

  PostOne: (req, res) => {
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
  PostMany: (req, res) => {
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

  putOne: (req, res) => {
    reposetory
      .UpdateOne(req.params.id,req.data)
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
  DeleteOne: (req, res) => {
    reposetory
      .DeleteOne(req.params.id)
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
  DeleteMany: (req, res) => {
    reposetory
      .DeleteMany(req.params.id)
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
