module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.[jt]s?(x)'],
  moduleFileExtensions: ['js', 'tsx', 'ts'],
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 0,
    },
  },
};
