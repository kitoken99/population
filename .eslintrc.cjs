/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    "comma-dangle": "warn",
    "no-console": "warn",
    "no-extra-parens": "warn",
    "no-negated-in-lhs": "warn",
    "eqeqeq": "warn"
  }
}
