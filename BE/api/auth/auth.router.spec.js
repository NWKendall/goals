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

      it("POST /register with empty payload returns a status code 500", async () => {
      const registerPayload = {}
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toBe(500)
    })

    it('Checks for amount of users in database', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(0)
    })

    it("POST /register with incorrect first_name returns a status code 400", async () => {
      const registerPayload = { ...registerUser , first_name: "", }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toBe(400)
    })

    it('Checks for amount of users in database - first_name', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(0)
    })

    it("POST /register with incorrect last_name returns a status code 400", async () => {
      const registerPayload = { ...registerUser, last_name: ""  }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toBe(400)
    })

    it('Checks for amount of users in database - last_name', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(0)
    })

    it("POST /register with incorrect email returns a status code 400", async () => {
      const registerPayload = { ...registerUser, email: "@test2.com" }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toEqual(400)
    })

    it('Checks for amount of users in database - email', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(0)
    })

    it("POST /register with incorrect password returns a status code 400", async () => {
      const registerPayload = { ...registerUser, password: "test" }
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toEqual(400)
    })

    it('Checks for amount of users in database - password', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(0)
    })

    // returning 400, not 201???
    it("POST /register with correct payload returns a status code 201", async () => {
      const response = await request(server)
        .post("/api/auth/register")
        .send(registerUser)
        .set('Accept', 'application/json')

      await expect(response.status).toBe(201)
    })

    it('Checks for amount of users in database - correct', async () => {
      const testDB = await db('users')
      
      await expect(testDB).toHaveLength(1)
    })

    // it("POST /register with duplicate payload returns a status code 400", async () => {
    //   const response = await request(server)
    //     .post("/api/auth/register")
    //     .send(registerUser)
    //     .set('Accept', 'application/json')

    //   await expect(response.status).toBe(400)
    // })

    

  })

  describe("POST /login", async () => {
    

    it("POST /login with empty payload returns a status code 500", async () => {
      const loginPayload = {}
      const response = await request(server)
        .post("/api/auth/login")
        .send(loginPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toBe(400);
    })

    it("POST /login with incorrect email returns a status code 400", async () => {
      statusCode = 400;
      const loginPayload = { ...loginUser, email: "@test2.com",  }
      const response = await request(server)
        .post("/api/auth/login")
        .send(loginPayload)
        .set('Accept', 'application/json')
  
      await expect(response.status).toEqual(statusCode)
    })

    it("POST /login with incorrect password returns a status code 400", async () => {
      const loginPayload = {...loginUser,  password: "test",  }
      const response = await request(server)
        .post("/api/auth/login")
        .send(loginPayload)
        .set('Accept', 'application/json')

    
  
      await expect(response.status).toBe(400)
    })

    it("POST /login with correct payload returns a status code 200", async () => {
      const loginPayload = { ...loginUser }
      await request(server)
        .post("/api/auth/login")
        .send(loginPayload)
        .set('Accept', 'application/json')
        .expect(200)

      // await expect(response.status).toBe(200)
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

  

})