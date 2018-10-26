var grid,
	xPoints, 
	oPoints,
	player;

TTT = function() {
	grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	xPoints = 0;
	oPoints = 0;
	player = 'X';
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