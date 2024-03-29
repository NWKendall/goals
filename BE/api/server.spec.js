require("dotenv").config();

describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
    it("should use the testing environment", function() {
        expect(process.env.DB_ENV).not.toBe("development");
      });
    it("should use the testing environment", function() {
    expect(process.env.DB_ENV).not.toBe("production");
    });
  });
});
