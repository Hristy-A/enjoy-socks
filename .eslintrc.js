module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'max-len': 0,
    'consistent-return': 0,
  },
};
