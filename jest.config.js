module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  moduleDirectories: ["node_modules", "src"],

  // Test spec file resolution pattern
  // should contain `test` or `spec`.
  testRegex: "(/.*.(test|spec)).tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transformIgnorePatterns: [
    ".+\\.(scss|svg|png|jpg|jpeg|ico|ttf|woff|woff2|eot)$",
  ],
  moduleNameMapper: {
    "\\.(scss|svg|png|jpg|jpeg|ico|ttf|woff|woff2|eot)$": "identity-obj-proxy",
    "src/(.*)": "<rootDir>/src/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};
