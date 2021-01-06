module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    //'@vue/standard'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'semi': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'object-curly-spacing': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'key-spacing': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'comma-spacing': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'quotes': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
