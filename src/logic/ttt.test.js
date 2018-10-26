const ttt = require("./ttt");

test("Returns true if initiation successful", () => {
   expect(TTT()).toBe(true);
});

test("Returns O twice then X twice.", () => {
	expect(changeTurn()).toBe('O');
	expect(checkPlayer()).toBe('O');
	expect(changeTurn()).toBe('X');
	expect(checkPlayer()).toBe('X');
});

test("Returns true, then sets field 0 to X, then returns false cause field is taken, then false when I try to set to field zero again", () => {
	expect(checkField(0)).toBe(true);
	expect(setField(0)).toBe('X');
	expect(checkField(0)).toBe(false);
	expect(setField(0)).toBe(false);
});

test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(0)).toBe('X');
	expect(setField(1)).toBe('X');
	expect(setField(2)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'O'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(changeTurn()).toBe('O');
	expect(setField(3)).toBe('O');
	expect(setField(4)).toBe('O');
	expect(setField(5)).toBe('O');
	expect(checkWinner()).toBe('O');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(6)).toBe('X');
	expect(setField(7)).toBe('X');
	expect(setField(8)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(0)).toBe('X');
	expect(setField(3)).toBe('X');
	expect(setField(6)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(1)).toBe('X');
	expect(setField(4)).toBe('X');
	expect(setField(7)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(2)).toBe('X');
	expect(setField(5)).toBe('X');
	expect(setField(8)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(0)).toBe('X');
	expect(setField(4)).toBe('X');
	expect(setField(8)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(2)).toBe('X');
	expect(setField(4)).toBe('X');
	expect(setField(6)).toBe('X');
	expect(checkWinner()).toBe('X');
});
test("Adding a score should return false because the game is running", () => {
   expect(addScore('X')).toBe(false);
});
test("Calling finish game finishes the game and returns the current game state which is false", () => {
   expect(finishGame()).toBe(false);
});
test("Adding a score should return true because we finished the game in our previous test. Checking the score for X should return 1, then after adding 3 more points the score for X should return 4", () => {
   expect(addScore('X')).toBe(true);
   expect(checkScore('X')).toBe(1);
   expect(addScore('X')).toBe(true);
   expect(addScore('X')).toBe(true);
   expect(addScore('X')).toBe(true);
   expect(checkScore('X')).toBe(4);

});
