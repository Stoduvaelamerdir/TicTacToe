//const _ = require("lodash");
const $ = require("jquery");
var tdArray = document.getElementsByTagName("td");

for(var i=0; i< tdArray.length; i++) {
   (function(index) {
        tdArray[index].addEventListener("click", function() {
        	addMove(index);
         })
   })(i);
}

function updateGame(tictactoe) {
	var game = tictactoe.map;
	updateTable(game);

}
function updateTable(grid) {
	for (var i = 0; i < grid.length; i++)  {
    	var square = document.getElementById('f'+ i);
    	if(i != grid[i]){
    		square.innerHTML = grid[i];
    	}
    }
}

function addMove(number){
    var square = number;
    fetch("/api/addTurn/" + square)
    .then(
    	fetch("/api/getBoard")
	    .then(res => res.json())
	    .then(res => updateTable(res.grid))
    	.catch(error => console.log('Error:', error))
    	)
    .catch(error => console.log('Error:', error));
    
};
