const express = require("express");
const router = express.Router();
const ttt = require("../logic/ttt");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS."});
});

router.get("/addTurn/:square", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(setField(req.params.square));
});
router.get("/getBoard", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(TTT());
});

module.exports = router;