const request = require("supertest");
const app = require("../../app");

test("it should return a 405 code and an error message", async() => {
    const res = await request(app).get("/api");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
});

test("should return false, since no moves have been made", async() => {
    const res = await request(app).get("/api/checkWinner");
    expect(res.status).toBe(200);
    expect(res.body.winner).toBe(false);
});

test("should return false since no moves have been made", async() => {
    const res = await request(app).get("/api/checkTie");
    expect(res.status).toBe(200);
    expect(res.body).toBe(false);
});

test("should return a clean board", async() => {
    const res = await request(app).get("/api/getBoard");
    expect(res.status).toBe(200);
    expect(res.body.grid[0]).toBe('0');
    expect(res.body.grid[1]).toBe('1');
    expect(res.body.grid[2]).toBe('2');
    expect(res.body.grid[3]).toBe('3');
    expect(res.body.grid[4]).toBe('4');
    expect(res.body.grid[5]).toBe('5');
    expect(res.body.grid[6]).toBe('6');
    expect(res.body.grid[7]).toBe('7');
    expect(res.body.grid[8]).toBe('8');
    expect(res.body.oScore && res.body.xScore).toBe(0);
    expect(res.body.playing).toBe(true);
});

test("should return true if board has been cleared", async() => {
    const res = await request(app).get("/api/clearBoard");
    expect(res.status).toBe(200);
    expect(res.body).toBe(true);
});

test("should return false, since game has started and not ended", async() => {
    const res = await request(app).get("/api/resetGame");
    expect(res.status).toBe(200);
    expect(res.body).toBe(false);
});

test("should return false, since game has started and not ended", async() => {
    const res = await request(app).get("/api/restartGame");
    expect(res.status).toBe(200);
    expect(res.body).toBe(false);
});

test("should return false, since game is active", async() => {
    const res = await request(app).get("/api/endCurr");
    expect(res.status).toBe(200);
    expect(res.body).toBe(true);
});