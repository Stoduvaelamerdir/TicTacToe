//const _ = require("lodash");
const $ = require("jquery");

var tdArray = document.getElementsByTagName("td");

window.onload = function () {
    fetch("/api/clearBoard")
        .catch(error => console.log('Error:', error));
}

$("#replay").click(function () {
    fetch("/api/replayGame")
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
            addMove(index);
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
        }
    }
}

function addMove(number) {
    var square = number;
    fetch("/api/addTurn/" + square)
        .then(getBoard())
        .then(checkGameOver())
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
    }
    else if(res.winner != false) {
        console.log(res)
    }
}
