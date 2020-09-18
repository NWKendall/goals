const request = require("supertest");
const server = require("../server.js");
const db = require("../../database/connection.js");

describe("Activities Test Suite", function () {

  beforeAll(async () => {
    await db("activities").del();
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
  });

  describe("Activities - POST Request Tests", function () {
    it("POST request return a status 201", async function () {
      let activity = {};

      const response = await request(server)
        .post("/api/goals/activities")
        .send(activity)
        .expect("Content-Type", /json/)
        .set("Accept", "application/json");

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
        .expect("Content-Type", /json/)
        .set("Accept", "application/json");

      await expect(response.status).toEqual(500);
    });

    it("Checks for amount of activities in database", async function () {
        const testDB = await db("activities");
  
        await expect(testDB).toHaveLength(1);
      });
  });
});
