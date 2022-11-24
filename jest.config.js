/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  coverageProvider: "v8",
  testEnvironment: 'node',
  testMatch: [
    '**/*.(spec|test).+(ts|tsx|js)'
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  }
};
