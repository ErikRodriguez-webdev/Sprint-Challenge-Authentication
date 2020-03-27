const server = require("./server");

const request = require("supertest");

describe("server.js", () => {
  describe("register endpoint", () => {
    test("post returns 201 status", async () => {
      const dummyData = {
        username: "ABTesting 12345",
        password: "random"
      };
      //unique username every time with same credentials on all test

      const response = await request(server)
        .post("/api/auth/register")
        .send(dummyData);

      expect(response.status).toBe(201);
    });

    test("post returns json", async () => {
      const dummyData = {
        username: "ABTesting 12345",
        password: "random"
      };
      //unique username every time with same credentials on all test

      const response = await request(server)
        .post("/api/auth/register")
        .send(dummyData);

      expect(response.type).toMatch(/json/i);
    });
  });
  describe("login endpoint", () => {
    test("post returns a token", async () => {
      const dummyData = {
        username: "ABTesting 12345",
        password: "random"
      };
      //unique username every time with same credentials on all test

      const response = await request(server)
        .post("/api/auth/login")
        .send(dummyData);

      expect(response.body.token).toBeTruthy();
    });

    test("post returns json", async () => {
      const dummyData = {
        username: "ABTesting 12345",
        password: "random"
      };
      //unique username every time with same credentials on all test

      const response = await request(server)
        .post("/api/auth/login")
        .send(dummyData);

      expect(response.type).toMatch(/json/i);
    });
  });
  describe("jokes endpoint", () => {
    test("get returns an array", async () => {
      const response = await request(server)
        .get("/api/jokes/")
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMywibmFtZSI6IkFUZXN0aW5nIDEyMzQ1IiwiaWF0IjoxNTg1MzMyNDUyLCJleHAiOjE1ODUzMzYwNTJ9.Q7x2pwWv78txO6VlDXIiHmDNpVjGhsLaGKfODgjKtLg"
        );

      //token only last an hour so change update to test with new one
      expect(response.body).toBeTruthy();
    });

    test("get returns json", async () => {
      const response = await request(server)
        .get("/api/jokes/")
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMywibmFtZSI6IkFUZXN0aW5nIDEyMzQ1IiwiaWF0IjoxNTg1MzMyNDUyLCJleHAiOjE1ODUzMzYwNTJ9.Q7x2pwWv78txO6VlDXIiHmDNpVjGhsLaGKfODgjKtLg"
        );

      //token only last an hour so change update to test with new one
      expect(response.type).toMatch(/json/i);
    });
  });
});
