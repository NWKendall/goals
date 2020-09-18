const request = require("supertest");
const server = require("../server.js");
const db = require("../../database/connection.js");
const { expectCt } = require("helmet");

describe("Activities Test Suite", function () {
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

      let activity = {
        awake: true,
        stretch: true,
        exercise: true,
        mantra: true,
        study1: true,
        music: true,
        study2: true,
        reading: true,
        weight: 150
      };

      const response = await request(server)
        .post("/api/goals/activities")
        .send(activity)
        .expect("Content-Type", /json/)
        .set("Accept", "application/json");
                
        await expect(response.status).toEqual(201);
        
    });
  });
});
