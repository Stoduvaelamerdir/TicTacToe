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
test("", () => {
	expect(TTT()).toBe(true);
	expect(checkWinner()).toBe(false);
	expect(setField(0)).toBe('X');
	expect(setField(1)).toBe('X');
	expect(setField(2)).toBe('X');
	expect(checkWinner()).toBe('X');
});