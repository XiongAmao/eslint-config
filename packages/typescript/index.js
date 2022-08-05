module.exports = {
  extends: [
    '@xiongamao/eslint-config-basic',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'lines-between-class-members': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
