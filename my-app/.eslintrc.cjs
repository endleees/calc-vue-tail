/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/recommended',
    '@vue/eslint-config-prettier',
    "plugin:prettier/base",
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
