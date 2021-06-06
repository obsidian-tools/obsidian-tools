module.exports = {
  projects: ["<rootDir>/packages/*"],
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsConfig: "packages/tsconfig.json",
    },
  },
};
