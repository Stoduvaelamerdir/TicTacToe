//const _ = require("lodash");
const $ = require("jquery");
var won = false;
var tdArray = document.getElementsByTagName("td");

window.onload = function() {
  fetch("/api/clearBoard").catch(error => console.log("Error:", error));
};

$("#replay").click(function() {
  $(".endgame").css("display", "none");
  won = false;
  fetch("/api/restartGame")
    .then(getGame())
    .catch(error => console.log("Error:", error));
});

$("#reset").click(function() {
  $(".endgame").css("display", "none");
  won = false;
  fetch("/api/resetGame")
    .then(getGame())
    .catch(error => console.log("Error:", error));
});

for (var i = 0; i < tdArray.length; i++) {
  (function(index) {
    tdArray[index].addEventListener("click", function() {
      checkMove(index);
    });
  })(i);
}
function updateGame(res) {
  updateTable(res.grid)
  .then(
  updatePlayer(res.player))
  .then(
  updateScore(res.xScore, res.oScore))
}

function updateTable(grid) {
  for (var i = 0; i < grid.length; i++) {
    var square = document.getElementById("f" + i);
    if (i != grid[i]) {
      square.innerHTML = grid[i];
    } else {
      square.innerHTML = "";
    }
  }
}
function updatePlayer(player) {
  $("#turns").text(player + " Turn");
}
function updateScore(x, o) {
  console.log(x + o);
  $("#xP").text("X points " + x);
  $("#oP").text("O points " + o);
}
function addMove(number) {
  var square = number;
  fetch("/api/addTurn/" + square)
    .then(checkTie())
    .then(checkWinner())
    .then(getGame())
    .catch(error => console.log("Error:", error));
}

function getGame() {
  fetch("/api/getGame")
    .then(res => res.json())
    .then(res => updateGame(res))
    .catch(error => console.log("Error:", error));
}

function checkWinner() {
  fetch("/api/checkWinner")
    .then(res => res.json())
    .then(res => promptWinner(res))
    .catch(error => console.log("Error:", error));
}
function checkTie() {
  fetch("/api/checkTie")
    .then(res => res.json())
    .then(res => promptTie(res))
    .catch(error => console.log("Error:", error));
}

function promptWinner(res) {
  if (res.winner == "X" || res.winner == "O") {
    $(".endgame").css("display", "block");
    $("#promter").text(res.winner + " WON!!!");
    won = true;
    endCurrentGame();
  }
}
function promptTie(res) {
  if (res.tie == true && !won) {
    $(".endgame").css("display", "block");
    $("#promter").text("TIE!!!");
    endCurrentGame();
  }
}
function changePlayer() {
  fetch("/api/changePlayer").catch(error => console.log("Error:", error));
}
function endCurrentGame() {
  fetch("/api/endCurr").catch(error => console.log("Error:", error));
}
function checkMove(field) {
  fetch("/api/checkField/" + field)
    .then(res => res.json())
    .then(res => {
      if(res) {
        addMove(field);
      }
    })
    .then()
    .catch(error => console.log("Error:", error));
}
