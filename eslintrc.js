module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: 'standard',

  rules: {
    camelcase: ['error', { properties: 'always' }],
    'no-var': ['error'],
    'prefer-const': ['error'],
    'space-before-function-paren': ['error', {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ]
  }
}
