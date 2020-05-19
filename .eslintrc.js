module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'scrumpy',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    // Module build failed eslint-loader TypeError: Cannot read property 'range' of null
    // https://github.com/babel/babel-eslint/issues/799#issuecomment-568195009
    'indent': [
      'error',
      2,
      {
        'ignoredNodes': [
          'TemplateLiteral'
        ]
      }
    ],
    'template-curly-spacing': [
      'off'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
