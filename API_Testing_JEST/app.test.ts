// import { response } from "express";
import app from "./app";
import request = require("supertest");

describe("Test the root node", () => {
  test("Root test", async () => {
    let response = await request(app).get("/test");
    expect(response.statusCode).toBe(200);
  });
  test("Reply content type should be JSON", async () => {
    let response = await request(app).get("/test");
    expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
  });
  test("Reply contains message object", async () => {
    let response = await request(app).get("/test");
    expect(response.body.message).toBeDefined();
  });
  test("Reply contains error object", async () => {
    let response = await request(app).get("/test");
    expect(response.body.error).toBeDefined();
  });
});
