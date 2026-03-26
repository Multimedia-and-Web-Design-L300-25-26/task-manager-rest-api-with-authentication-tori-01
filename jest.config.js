import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });

// Set test environment
process.env.NODE_ENV = "test";

export default {
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  globalTeardown: "<rootDir>/tests/teardown.js",
  testTimeout: 15000,
  transform: {}
};