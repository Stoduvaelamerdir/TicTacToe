const request = require("supertest");
const app = require("../../app");

test("in should return a 200 status code", async () => {
	const res = await request(app).get("/greeting/_");   
    expect(res.status).toBe(200);
});

