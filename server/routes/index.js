const express = require("express");
const router = express.Router();

const apiRouter = require("./routes.api");
router.get("/", (req, res) => {
  res.send("App is running");
});
router.use("/api/v1", apiRouter);

module.exports = router;
