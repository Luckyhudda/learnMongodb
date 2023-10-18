const reposetory = require("../db/mongodb/repository");

const crudController = {
  // Get all data from server :)
  GetMany: (req, res) => {
    reposetory
      .FindAll()
      .then((result) => {
        res.json({
          message: "success",
          total: result.length,
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

  // Get sigle  data Object from server :)
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

  // Create a data Object :)
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

  // Create a array of data Objects :)
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

  // Update a data Object from server :)
  putOne: (req, res) => {
    reposetory
      .UpdateOne(req.params.id, req.data)
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

  // Delete single data from server :)
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

  // Delete all data from server :)
  DeleteMany: (req, res) => {
    //   reposetory
    //     .DeleteMany(req.params.id)
    //     .then((result) => {
    //       res.json({
    //         message: "success",
    //         result,
    //       });
    //     })
    //     .catch((err) => {
    //       res.json({
    //         message: "failed",
    //         error: err,
    //       });
    //     });
    // },
    res.json({
      message:
        "Delete functionality working fine, but i did not want, you delete my data...😄🙂",
    });
  },
};

module.exports = crudController;
