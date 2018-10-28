const ttt = require("./ttt");

test("Returns state of parameters that will be printed on the screen", () => {
   expect(TTT()).not.toBeNull();
});
test("Returns true utaf leikurinn er byrjaður", () => {
   expect(checkPlaying()).toBe(true);
});
