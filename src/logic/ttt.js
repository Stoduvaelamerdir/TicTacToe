var grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	xPoints = 0;
	oPoints = 0;
	player = 'X';
	counter = 0;
	playing = true;
	winner = false;

TTT = function() {
	ping = checkPlaying();
	map = getGrid();
	players = checkPlayer();
	winner = getWinner();
	var game = {"playing": ping, "grid": map, "player": players, "winner":winner };

	return game;
}

checkPlaying = function() {
	return playing;
}

getGrid = function() {
	return grid;
}
getWinner = function(){
	return winner;
}


checkPlayer = function() {
	return player;
}
checkField = function(field){
	if(grid[field] == field && checkPlaying()){
		return true;
	} else {
		return false;
	}
}

setField = function(field) {
	if(checkField(field)){
		grid[field] = checkPlayer();
		counter++;
		changePlayer();
		return TTT();
	}
	return false;
	
}
checkScore = function(player){
	if(player == 'X'){
		return xPoints;
	}
	return oPoints;
}
checkField = function(field){
	if(grid[field] == field && checkPlaying()){
		return true;
	} else {
		return false;
	}
}
changePlayer = function() {
	if(player == "X")
	{
		player = "O";
	}
	else{
		player = "X";
	}
}
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


addScore = function(player) {

		if(player == 'X') {
			xPoints++;
		}
		else{
			oPoints++;
		}
	
}


hardReset = function(){	
		grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		xPoints = 0;
		oPoints = 0;
		player = 'X';
		counter = 0;
		playing = true;
		winner = false;
}

restartGame = function(){
	if(!playing){
		grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		player = 'X';
		counter = 0;
		playing = true;
		winner = false;
	}
}

resetGame = function(){
	if(!playing){
		hardReset();
	}
}
finishGame = function() {
	if(playing){
		playing = false;
	}
}

module.export = TTT();