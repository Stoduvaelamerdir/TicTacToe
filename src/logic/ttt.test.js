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