const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './apps/site',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@ui/(.*)$': '<rootDir>/packages/ui/$1',
    '^@lib/(.*)$': '<rootDir>/packages/lib/$1',
    '^@ads/(.*)$': '<rootDir>/packages/ad-manager/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
