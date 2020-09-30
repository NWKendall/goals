require('dotenv').config();

const request = require("supertest");
const db = require("../../database/connection.js");
const server = require("../server.js");
const knexCleaner = require("../../database/seeds/001-cleanup.js");


const registerUser = {
  first_name: "Test",
  last_name: "Test",
  email: "test@test.com",
  password: "Test123!"
}

let loginUser = {
  email: "test@test.com",
  password: "Test123!"
}

let statusCode;


describe("Authentication Router", () => {
  
  beforeAll(async () => {
    await knexCleaner.seed(db);
  })
  
  describe("Register User", () => {

    it("POST /register with correct payload returns a status code 201", async () => {
      statusCode = 201
      const registerPayload = { ... registerUser }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)

      await expect(response.status).toEqual(statusCode)
    })

    it("POST /register with empty payload returns a status code 500", async () => {
      statusCode = 500;
      const registerPayload = {}
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
  
      await expect(response.status).toEqual(statusCode)
    })

    it("POST /register with incorrect first_name returns a status code 400", async () => {
      statusCode = 400;
      const registerPayload = { first_name: "", ...registerUser }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
  
      await expect(response.status).toEqual(statusCode)
    })

    it("POST /register with incorrect last_name returns a status code 400", async () => {
      statusCode = 400;
      const registerPayload = { last_name: "", ...registerUser }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
  
      await expect(response.status).toEqual(statusCode)
    })

    it("POST /register with incorrect email returns a status code 400", async () => {
      statusCode = 400;
      const registerPayload = { email: "@test2.com", ...registerUser }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
  
      await expect(response.status).toEqual(statusCode)
    })

    it("POST /register with incorrect password returns a status code 400", async () => {
      statusCode = 400;
      const registerPayload = { password: "test", ...registerUser }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
  
      await expect(response.status).toEqual(statusCode)
    })

    it('Checks for amount of users in database', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(1)
    })

    

  })

  // describe("Put /update/:id", async () => {

  //   statusCode = 200;
  //   const changedUser = {
  //     first_name: "Hello",
  //     last_name: "World",
  //     email: "test@test.com",
  //     password: "Test123!"
  //   }
  //   const response = await request(server)
  //     .put("/api/update/1")
  //     .send(changedUser)



  //   await expect(response).toEqual(changedUser)
  // })
  // describe("POST /login", () => {
    
  // })

  

})