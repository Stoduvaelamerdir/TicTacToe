const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS."});
});
module.exports = router;