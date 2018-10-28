const ttt = require("./ttt");

test("Returns state of parameters that will be printed on the screen", () => {
   expect(TTT()).not.toBeNull();
});
test("Returns true utaf leikurinn er byrjaður", () => {
   expect(checkPlaying()).toBe(true);
});
test("checkar hvort gridið sé nokkuð tómt", () => {
   expect(getGrid()).not.toBeNull();
});
test("returns false utaf það er enginn winner", () => {
   expect(getWinner()).toBe(false);
});

test("Setur í field 0 þvi hann er laus skilar öllu úr ttt sem json", () => {
   expect(checkField(0)).toBe(true);
   expect(setField(0)).not.toBeNull();
});

test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(checkScore('X')).toBe(0);
	expect(getWinner()).toBe(false);
	expect(setField(0)).not.toBeNull();
	changePlayer();
	expect(setField(1)).not.toBeNull();
	changePlayer();
	expect(setField(2)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe("X");
	expect(checkScore('X')).toBe(1);
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'O'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	changePlayer();
	expect(setField(3)).not.toBeNull();
	changePlayer();
	expect(setField(4)).not.toBeNull();
	changePlayer();
	expect(setField(5)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('O');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(6)).not.toBeNull();
	changePlayer();
	expect(setField(7)).not.toBeNull();
	changePlayer();
	expect(setField(8)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(0)).not.toBeNull();
	changePlayer();
	expect(setField(3)).not.toBeNull();
	changePlayer();
	expect(setField(6)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(1)).not.toBeNull();
	changePlayer();
	expect(setField(4)).not.toBeNull();
	changePlayer();
	expect(setField(7)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner())
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(2)).not.toBeNull();
	changePlayer();
	expect(setField(5)).not.toBeNull();
	changePlayer();
	expect(setField(8)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(0)).not.toBeNull();
	changePlayer();
	expect(setField(4)).not.toBeNull();
	changePlayer();
	expect(setField(8)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('X');
});
test("Reinitialize the game and checks for a winner which should be false. Sets 3 fields in a row and checks winner again which returns 'X'", () => {
	hardReset();
	expect(getWinner()).toBe(false);
	expect(setField(2)).not.toBeNull();
	changePlayer();
	expect(setField(4)).not.toBeNull();
	changePlayer();
	expect(setField(6)).not.toBeNull();
	changePlayer();
	checkWinner();
	expect(getWinner()).toBe('X');
});
