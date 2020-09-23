const request = require("supertest");
const server = require("../server.js");
const dbCleanup = require("../../database/seeds/001-cleanup");
const db = require("../../database/connection.js");

describe("Activities Test Suite", function () {
  beforeAll(async () => {
    await dbCleanup.seed(db)
  });

  describe("Activities - POST Request Tests", function () {
    it("POST request return a status 201", async function () {
      let activity = {
        awake: true,
        stretch: true,
        exercise: true,
        mantra: true,
        study1: true,
        music: true,
        study2: true,
        reading: true,
        weight: 150,
      };

      const response = await request(server)
        .post("/api/goals/activities")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(201);
    });

    it("incomplete POST request return a status 500", async function () {
      let activity = {
        awake: "",
        stretch: "",
        exercise: "",
        mantra: "",
        study1: "",
        music: "",
        study2: "",
        reading: "",
        weight: "150",
      };
      const response = await request(server)
        .post("/api/goals/activities")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(500);
    });

    it("empty POST request return a status 500", async function () {
      let activity = {};
      const response = await request(server)
        .post("/api/goals/activities")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(500);
    });
  });

  describe("Activities - GET Request Tests", function () {
    it("GET request return a status 200", function () {
      return request(server)
        .get("/api/goals/activities")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return cohorts as the router value", function () {
      return request(server)
        .get("/api/goals/activities")
        .then((res) => {
          expect(Array.isArray(res.body)).toBe(true);
        });
    });
    it("should return JSON formatted body", function () {
      return request(server)
        .get("/api/goals/activities")
        .then((res) => {
          expect(res.type).toMatch(/json/);
        });
    });
    it("Checks for amount of activities in database", async function () {
      const testDB = await db("activities");

      await expect(testDB).toHaveLength(1);
    });
  });

  describe("Activities - PUT Request Tests", function () {
    it("PUT request return a status 200", async function () {
      let activity = {
        awake: false,
        stretch: false,
        exercise: false,
        mantra: false,
        study1: false,
        music: false,
        study2: false,
        reading: false,
        weight: 200,
      };

      const response = await request(server)
        .put("/api/goals/activities/1")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(200);
    });

    it("incomplete PUT request return a status 500", async function () {
      let activity = {
        awake: "",
        stretch: "",
        exercise: "",
        mantra: "",
        study1: "",
        music: "",
        study2: "",
        reading: "",
        weight: "150",
      };

      const response = await request(server)
        .put("/api/goals/activities/1")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(500);
    });

    it("empty POST request return a status 500", async function () {
      let activity = {};
      const response = await request(server)
        .put("/api/goals/activities/1")
        .send(activity)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/);

      await expect(response.status).toEqual(500);
    });
  });

  describe("Activities - DELETE Request Tests", function () {
    it("DELETE request return a status 200", function () {
      return request(server)
        .delete("/api/goals/activities/1")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    }); 

    it("DELETE request return a status 500", function () {
      return request(server)
        .delete("/api/goals/activities/1")
        .then((res) => {
          expect(res.status).toBe(500);
        });
    });    
    
    it("Checks for amount of activities in database", async function () {
      const testDB = await db("activities");

      await expect(testDB).toHaveLength(0);
    });
  });
});
