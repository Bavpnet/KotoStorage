module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/src/**/index.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
