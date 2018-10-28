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
		return TTT();
	}
	return false;
	
}

checkField = function(field){
	if(grid[field] == field && checkPlaying()){
		return true;
	} else {
		return false;
	}
}
module.export = TTT();