//.eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  extends: ['plugin:prettier/recommended']
}
