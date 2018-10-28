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

router.get("/checkWinner", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send({winner : checkWinner()});
});

router.get("/checkTie", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(checkTie());
});

router.get("/getBoard", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(TTT());
}); 

router.get("/clearBoard", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(hardReset())
})

router.get("/resetGame", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(resetGame())
})

router.get("/restartGame", (req, res) => {
  var req = req;
  var res = res;
  res.status(200).send(restartGame())
})


module.exports = router;