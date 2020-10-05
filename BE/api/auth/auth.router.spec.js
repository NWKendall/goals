require("dotenv").config();

const request = require("supertest");
const db = require("../../database/connection.js");
const server = require("../server.js");
const knexCleaner = require("../../database/seeds/001-cleanup.js");

const registerUser = {
  first_name: "Test",
  last_name: "Test",
  email: "test@test.com",
  password: "Test123!",
};

let loginUser = {
  email: "test@test.com",
  password: "Test123!",
};

let changedUser = {
  first_name: "Hello",
  last_name: "World",
  email: "hello@world.com",
  password: "P@$$word1",
};

let changedlogin = {
  email: "hello@world.com",
  password: "P@$$word1",
};

describe("Authentication Router", () => {
  beforeAll(async () => {
    await knexCleaner.seed(db);
  });

  describe("POST /register", () => {
    it("POST /register with empty payload returns a status code 500", async () => {
      const registerPayload = {};
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toBe(500);
    });

    it("Checks for amount of users in database", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with incorrect first_name returns a status code 400", async () => {
      const registerPayload = { ...registerUser, first_name: "" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toBe(400);
    });

    it("Checks for amount of users in database - first_name", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with incorrect last_name returns a status code 400", async () => {
      const registerPayload = { ...registerUser, last_name: "" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toBe(400);
    });

    it("Checks for amount of users in database - last_name", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with empty email returns a status code 400", async () => {
      const registerPayload = { ...registerUser, email: "" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toEqual(400);
    });

    it("Checks for amount of users in database - email", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with incorrect email returns a status code 400", async () => {
      const registerPayload = { ...registerUser, email: "@test2.com" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toEqual(400);
    });

    it("Checks for amount of users in database - email", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with empty password returns a status code 400", async () => {
      const registerPayload = { ...registerUser, password: "" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toEqual(400);
    });

    it("Checks for amount of users in database - password", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with incorrect password returns a status code 400", async () => {
      const registerPayload = { ...registerUser, password: "test" };
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerPayload);

      await expect(response.status).toEqual(400);
    });

    it("Checks for amount of users in database - password", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });

    it("POST /register with correct payload returns a status code 201", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerUser);

      await expect(response.status).toBe(201);
    });

    it("Checks for amount of users in database - correct", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(1);
    });

    it("POST /register with duplicate payload returns a status code 400", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .set("Content-Type", "application/json")
        .send(registerUser);

      await expect(response.status).toBe(400);
    });
  });

  describe("POST /login", () => {
    it("POST /login with empty payload returns a status code 500", async () => {
      const loginPayload = {};
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginPayload);

      await expect(response.status).toBe(400);
    });

    it("POST /login with empty email returns a status code 400", async () => {
      const loginPayload = { ...loginUser, email: "" };
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginPayload);

      await expect(response.status).toEqual(400);
    });

    it("POST /login with incorrect email returns a status code 400", async () => {
      const loginPayload = { ...loginUser, email: "@test2.com" };
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginPayload);

      await expect(response.status).toEqual(400);
    });

    it("POST /login with empty password returns a status code 400", async () => {
      const loginPayload = { ...loginUser, password: "" };
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginPayload);

      await expect(response.status).toBe(400);
    });

    it("POST /login with incorrect password returns a status code 400", async () => {
      const loginPayload = { ...loginUser, password: "test" };
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginPayload);

      await expect(response.status).toBe(400);
    });

    it("POST /login with correct payload returns a status code 200", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginUser);

      await expect(response.status).toBe(200);
    });
  });

  describe("PUT /update/:id", () => {
    it("PUT with null email returns a status code 400", async () => {
      const editedPayload = { ...changedUser, email: null };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with no email returns a status code 400", async () => {
      const editedPayload = { ...changedUser, email: "" };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with invalid email returns a status code 400", async () => {
      const editedPayload = { ...changedUser, email: "@good" };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with null password returns a status code 400", async () => {
      const editedPayload = { ...changedUser, password: null };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with no password returns a status code 400", async () => {
      const editedPayload = { ...changedUser, password: "" };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with invalid password returns a status code 400", async () => {
      const editedPayload = { ...changedUser, password: "test" };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      await expect(response.status).toBe(400);
    });

    it("PUT with correct payload returns a status code 200", async () => {
      const editedPayload = { ...changedUser };

      const response = await request(server)
        .put("/api/auth/update/1")
        .set("Content-Type", "application/json")
        .send(editedPayload);

      console.log({editedPayload}, response.request._data)
      await expect(response.status).toBe(200);
    });
  });

  describe("DELETE /user:id", () => {
    it("DELETE user from database", async () => {
      const response = await request(server)
        .delete("/api/auth/user/1")
        .set("Content-Type", "application/json")

      await expect(response.status).toBe(200);
    })

    it("Checks for amount of users in database - deletion", async () => {
      const testDB = await db("users");

      await expect(testDB).toHaveLength(0);
    });
  })
});
