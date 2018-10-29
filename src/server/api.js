const express = require("express");
const router = express.Router();
const ttt = require("../logic/ttt");

router.get("/", (req, res) => {
  res.status(405).send({ error: "GET method not allowed, try OPTIONS."});
});

router.get("/move/:square", (req, res) => {
  res.status(200).send(setField(req.params.square));
});

router.get("/clearBoard", (req, res) => {
  res.status(200).send(hardReset())
})

router.get("/resetGame", (req, res) => {
  res.status(200).send(hardReset())
})

router.get("/restartGame", (req, res) => {
  res.status(200).send(restartGame())
})

module.exports = router;