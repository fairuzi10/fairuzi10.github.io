module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: false,
        singleQuote: true
      }
    ]
  },
  globals: {
    // graphql: false
  }
}
