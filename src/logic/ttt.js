var grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8']; //Tic-tac-toe grid
	xPoints = 0; //player X's points
	oPoints = 0; //player Y's points
	player = 'X'; //current player
	counter = 0; //Counter for number of moves made 
	playing = true; //True/False depending on if there's currently a game being played
	winner = false; // X/O or false, depending on if there's a winner


// TTT() returns the state of the game
//	Points, grid, current player, if there is a winner
//	and if there's currently an active game

TTT = function() {
	xPoints = checkScore('X');
	oPoints = checkScore('O');
	playing = checkPlaying();
	grid = getGrid();
	player = checkPlayer();
	winner = getWinner();

	var game = { "playing": playing,
				 "grid": grid, 
				 "player": player, 
				 "winner": winner, 
				 "oScore": oPoints, 
				 "xScore": xPoints 
				};
	return game;
}

//Returns true/false depending on wether a game is currently being played
checkPlaying = function() {
	return playing;
}

//Returns current state of the grid
getGrid = function() {
	return grid;
}

//Returns winner if there is one, or false if there isn't one
getWinner = function(){
	return winner;
}

//Returns the current player (X or O)
checkPlayer = function() {
	return player;
}

//Checks wether the current field is already been marked and returns true/false
checkField = function(field){
	if(grid[field] == field && checkPlaying()){
		return true;
	} else {
		return false;
	}
}

//If checkField() returns true it marks it with the players tag
setField = function(field) {
	if(checkField(field)){
		grid[field] = checkPlayer();
		counter++;
		checkWinner();
		changePlayer();
		return TTT();
	}
	return false;
}

//Returns the players score
checkScore = function(player){
	if(player == 'X'){
		return xPoints;
	}
	return oPoints;
}

//Changes the current player
changePlayer = function() {
	if(player == "X") {
		player = "O";
	} else{
		player = "X";
	}
}

//Checks for a win or a tie. 
//If a win condition is met, a call to addScore() is made,
//With the current player sent in as an arguement.
//Then, the winner variable is set to the current player
//And a call to finishGame() is made.
checkWinner = function(){
	for(var i = 0; i < 3; i++){
		if(grid[i] == grid[i+3] && grid[i] == grid[i+6]){
			addScore(player);
			winner = player;
			finishGame();
		}	
	}
	for(var i = 0; i < 7; i = i+3){
		if(grid[i] == grid[i+1] && grid[i] == grid[i+2]){
			addScore(player);
			winner = player;
			finishGame();
		}	
	}
	if(grid[0] == grid[4] && grid[0] == grid[8]) {
		addScore(player);
        winner = player;
        finishGame();

    } else if(grid[2] == grid[4] && grid[2] == grid[6]){
    	addScore(player);
        winner = player;
        finishGame();

    }
    else if(counter > 8 && playing == true){
    	winner = "Tie"
    	finishGame();
    } 
}

//Adds +1 to a players score
addScore = function(player) {
		if(player == 'X') {
			xPoints++;
		} else{
			oPoints++;
		}
	
}

//Resets all variables to their original state, and returns TTT()
//A call to this is made when the reset button is pressed 
hardReset = function(){	
		grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		xPoints = 0;
		oPoints = 0;
		player = 'X';
		counter = 0;
		playing = true;
		winner = false;
		return TTT();
}

//This is called when the restart button is pressed
//It resets the state of the game, but keeps the score.
restartGame = function(){
	
		grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		player = 'X';
		counter = 0;
		playing = true;
		winner = false;
		return TTT();

}

//Sets the playing variable to false, allowing the players to either 
//Press the reset or restart buttons (Otherwise unclickable buttons)
finishGame = function() {
	if(playing){
		playing = false;
	}
}

module.export = TTT();