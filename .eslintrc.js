module.exports = {
  root: true,
  env: { node: true },
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
  ],

  rules: {
    /**
     * https://eslint.org/docs/rules/
     * "off" or 0 - turn the rule off
     * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
     * "error" or 2 - turn the rule on as an error (exit code will be 1)
     */
    'eol-last': ['warn', 'always'],
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2,  { SwitchCase: 1 }],
    'eqeqeq': ['warn', 'smart'],
    'linebreak-style': [2, 'unix'],
    'space-before-function-paren': ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn'],
    'comma-style': ['warn', 'last'],
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'computed-property-spacing': ['warn', 'never'],
    'func-call-spacing': ['warn', 'never'],
    'operator-linebreak': ['warn', 'before'],
    'space-in-parens': ['warn', 'never'],
    'camelcase': ['warn', { properties: 'always', ignoreDestructuring: true, ignoreImports: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-trailing-spaces': ['warn'],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-use-before-define': ['error', { 'functions': false, 'classes': false,  'variables': true }],
  },
}
