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
    .then(res => res.json())
    .then(res => afterReset(res))
    .catch(error => console.log("Error:", error));
});

$("#reset").click(function() {
  $(".endgame").css("display", "none");
  won = false;
  fetch("/api/resetGame")
    .then(res => res.json())
    .then(res => afterReset(res))
    .catch(error => console.log("Error:", error));
});

for (var i = 0; i < tdArray.length; i++) {
  (function(index) {
    tdArray[index].addEventListener("click", function() {
      makeMove(index);
    });
  })(i);
}
function afterReset(res) {
  updateTable(res.grid)
  updatePlayer(res.player)
  updateScore(res.xScore, res.oScore)
  
  
}
function afterMove(res) {
  updateTable(res.grid)
  if(res.winner == false){
  	updatePlayer(res.player)
  	updateScore(res.xScore, res.oScore)
  }else{
  	checkWin(res.winner);
  }

  
}
function checkWin(winner) {
	if(winner === "Tie"){
		$(".endgame").css("display", "block");
  	    $("#promter").text("TIE!!!");
	} else{
		$(".endgame").css("display", "block");
    	$("#promter").text(winner + " WON!!!");
	}
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


function makeMove(number) {
  field = number;
  fetch("/api/move/"+ field)
    .then(res => res.json())
    .then(res => afterMove(res))
    .catch(error => console.log("Error:", error));
}


