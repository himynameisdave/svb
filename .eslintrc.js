module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'himynameisdave/configurations/node'
  ],
  rules: {
    'no-console': 'off',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
  }
}
