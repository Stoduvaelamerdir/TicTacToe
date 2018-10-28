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


