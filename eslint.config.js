const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');
const globals = require('globals');

const nodeGlobals = Object.fromEntries(
  Object.keys(globals.node).map((k) => [k, 'readonly'])
);
const jestGlobals = Object.fromEntries(
  Object.keys(globals.jest).map((k) => [k, 'readonly'])
);

module.exports = [
  { ignores: ['node_modules/', 'dist/'] },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
      globals: { ...nodeGlobals },
    },
    plugins: { '@typescript-eslint': tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      globals: { ...nodeGlobals, ...jestGlobals },
    },
  },
  {
    files: ['*.config.js', '*.config.cjs'],
    languageOptions: {
      globals: { ...nodeGlobals },
    },
  },
  prettier,
];
