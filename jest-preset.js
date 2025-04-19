const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Ruta al directorio de Next.js
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);