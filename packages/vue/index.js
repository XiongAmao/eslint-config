module.exports = {
  extends: [
    '@xiongamao/eslint-config-basic',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true }
    ],
    'vue/html-self-closing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',

    // typescript
    'lines-between-class-members': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
}
