const express = require("express");
const crudController = require("../controllers/crudController");

const router = express.Router();

router.get("/", crudController.GetMany);
router.get("/:id", crudController.GetOne);

router.post("/", crudController.PostOne);
router.post("/all", crudController.PostMany);

router.put("/:id", crudController.putOne);
// router.put("/", crudController.updateMany);

router.delete("/:id", crudController.DeleteOne);
router.delete("/", crudController.DeleteMany);

module.exports = router;
