module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'react-hooks'],
  ignorePatterns: ['node_modules/'],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // "detect" automatically picks the version you have installed.
    },
  },
};
