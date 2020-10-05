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


describe("Dates Router", () => {

  beforeAll(async () => {
    await knexCleaner.seed(db);
  });
  
  describe("Register & Login user", () => {
    
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

    it("POST /login with correct payload returns a status code 200", async () => {
      const response = await request(server)
        .post("/api/auth/login")
        .set("Content-Type", "application/json")
        .send(loginUser);
      
        
      await expect(response.status).toBe(200);
    });
  })



})