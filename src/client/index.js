//const _ = require("lodash");
const $ = require("jquery");

var tdArray = document.getElementsByTagName("td");

window.onload = function () {
    fetch("/api/clearBoard")
        .catch(error => console.log('Error:', error));
}

$("#replay").click(function () {
	console.log("replay")
    fetch("/api/restartGame")
        .then(getBoard())
        .catch(error => console.log('Error:', error));
})

$("#reset").click(function () {
    fetch("/api/resetGame")
        .then(getBoard())
        .catch(error => console.log('Error:', error));
})

for (var i = 0; i < tdArray.length; i++) {
    (function (index) {
        tdArray[index].addEventListener("click", function () {
            checkMove(index);
        })
    })(i);
}

function updateGame(tictactoe) {
    var game = tictactoe.map;
    updateTable(game);
}

function updateTable(grid) {
    for (var i = 0; i < grid.length; i++) {
        var square = document.getElementById('f' + i);
        if (i != grid[i]) {
            square.innerHTML = grid[i];
        } else {
        	square.innerHTML = "";
        }
    }
}

function addMove(number) {
    var square = number;
    fetch("/api/addTurn/" + square)
        .then(getBoard())
        .then(checkGameOver())
        .then(changePlayer())
        .catch(error => console.log('Error:', error));

};

function getBoard() {
    fetch("/api/getBoard")
        .then(res => res.json())
        .then(res => updateTable(res.grid))
        .catch(error => console.log('Error:', error))
}

function checkGameOver() {
    fetch("/api/checkWinner")
        .then(res => res.json())
        .then(res => promptGameOver(res))
        .catch(error => console.log('Error:', error))
    fetch("/api/checkTie")
        .then(res => res.json())
        .then(res => promptGameOver(res))
        .catch(error => console.log('Error:', error))
}

function promptGameOver(res) {
    if(res == true){
        console.log("tie")   
        endCurrentGame()
    }
    else if(res.winner != false) {
        console.log(res)
        endCurrentGame()
    }
}
function changePlayer() {
	fetch("/api/changePlayer")
        .catch(error => console.log('Error:', error));
}
function endCurrentGame() {
	fetch("/api/endCurr")
        .catch(error => console.log('Error:', error));
}
function checkMove(field) {
	fetch("/api/checkField/" + field)
        .then(res => res.json())
        .then(res =>{ if(res){addMove(field)}})
        .then()
        .catch(error => console.log('Error:', error))
    
}
