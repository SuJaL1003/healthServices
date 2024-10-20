const express = require("express");
const {
  serviceController,
  getServiceController,
  updateServiceController,
  deleteServiceController,
} = require("../controllers/controllers");
const router = express.Router();
router.post("/input", serviceController);
router.get("/get", getServiceController);
router.put("/update/:id", updateServiceController);
router.delete("/delete/:id", deleteServiceController);
module.exports = router;
