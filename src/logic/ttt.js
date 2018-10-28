var grid = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
	xPoints = 0;
	oPoints = 0;
	player = 'X';
	counter = 0;
	playing = true;
	winner = false;

TTT = function() {
	xP = checkScore('X');
	oP = checkScore('O');
	ping = checkPlaying();
	map = getGrid();
	players = checkPlayer();
	var game = {"xScore": xP, "oScore": oP, "playing": ping, "grid": map, "player": players};

	return game;
}

checkPlaying = function() {
	return playing;
}


module.export = TTT();