const express = require("express");
const crudController = require("../controllers/crudController");

const router = express.Router();

router.get("/", crudController.Get);
router.post("/", crudController.GetOne);
router.put("/", crudController.Put);
router.delete("/", crudController.Delete);

module.exports = router;
