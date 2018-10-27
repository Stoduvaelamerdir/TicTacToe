var grid,
	xPoints, 
	oPoints,
	player,
	counter,
	playing;

TTT = function() {
	grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	xPoints = 0;
	oPoints = 0;
	player = 'X';
	counter = 0;
	playing = true;
	return true;
}

changeTurn = function() {
	if (player == 'X') {
		player = 'O';
	} else {
		player = 'X';
	
	}	return player;
}

checkPlayer = function() {
	return player;
}

setField = function(field) {
	if(checkField(field)){
		grid[field] = checkPlayer();
		counter++;
		return grid[field];
	}
	return false;
	
}
checkField = function(field){
	if(grid[field] == field){
		return true;
	} else {
		return false;
	}
}
checkWinner = function(){
	for(var i = 0; i < 3; i++){
		if(grid[i] == grid[i+3] && grid[i] == grid[i+6]){
			return player;
		}	
	}
	for(var i = 0; i < 7; i = i+3){
		if(grid[i] == grid[i+1] && grid[i] == grid[i+2]){
			return player;
		}	
	}
	if(grid[0] == grid[4] && grid[0] == grid[8]) {
        return player;

    } else if(grid[2] == grid[4] && grid[2] == grid[6]){
        return player;

    } else if(grid[2] == grid[4] && grid[2] == grid[6]){
        return player;
    }
    return false;
}

checkTie = function(){
	if(counter > 8 && playing == true){
    	return true;
    } 
    return false;
}

finishGame = function() {
	if(playing){
		playing = false;
		return true;
	}
	return false;
}

addScore = function(player) {
	if(!playing) {

		if(player == 'X') {
			xPoints++;
			return true;
		}
		
		oPoints++;
		return true;

	}
	return false;
}

checkScore = function(player) {
	if(player == 'X') {
		return xPoints;
	}
	return oPoints;
}

restartGame = function(){
	if(!playing){
		grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
		player = 'X';
		counter = 0;
		playing = true;
		return true;
	}
	return false;
}

resetGame = function(){
	if(!playing){
		TTT();
		return true;
	}
	return false;
}