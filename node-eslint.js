module.exports = {
  root: true,
  parserOptions: { parser: '@babel/eslint-parser', requireConfigFile: false, ecmaVersion: 2020 },
  env: {
    browser: true,
    es2020: true
    // node: true
  },
  extends: [
    // https://www.npmjs.com/package/eslint-config-standard
    'standard',
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base'
  ],
  rules: {
    //* ESLINT RULE */
    'max-len': ['error', { code: 500, tabWidth: 4 }],
    indent: [2, 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'no-eval': 0,
    'no-prototype-builtins': 0,
    camelcase: 0,
    'comma-dangle': ['error', 'never'],

    // Allow functions without return statement
    'no-return-assign': 0,
    // Allow reasing of functions parameters
    'no-param-reassign': 0,
    // Allow Object like aux: aux
    'object-shorthand': 0,
    // Allow reject without Error class
    'prefer-promise-reject-errors': 0,
    // Map, forEach etc.. no return need
    'array-callback-return': 0,
    // Arrow functions
    'arrow-parens': ['error', 'as-needed'],
    // callback functions should send only Error clases and Error sub clases
    'node/no-callback-literal': 0,
    // new line defining objects
    'object-curly-newline': ['error', { multiline: true }],
    // parseInt second parameter
    radix: ['error', 'as-needed'],
    // Access objects and arrays
    'prefer-destructuring': ['error', { object: true, array: false }],
    // Allow async functions on Promises and Executors
    'no-async-promise-executor': 0,
    // Allow await on loops
    'no-await-in-loop': 0,
    // Allow continue on for loops
    'no-continue': 0,
    // Space before "(" of a function
    'space-before-function-paren': ['error', 'always'],
    // Allow loops wuthout runtime generator and arrays iterations
    'no-restricted-syntax': 0,
    // Allow optional chaining
    // 'no-unsafe-optional-chaining': 0,

    // Import/Require
    'import/no-unresolved': 0,
    'import/extensions': 0,

    // TODO - console.log in production - integrate with unit test on deployment
    'no-console': 0
    // 'no-console': process.env.NODE_ENV === 'production' ? ['error'] : 0,
  }
};
