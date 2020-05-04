module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [ "eslint:recommended" ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: { 
    
    ecmaVersion: 2018, 
    sourceType: "module",
    "allowImportExportEverywhere": true
  },
  
  "rules": {
    "comma-spacing": ["error", {"before": false, "after": true}],
    "semi": ["error", "always"],
    "space-in-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": ["error", { after: false, "overrides": 
    { "return": { "after": true },
    "throw": { "after": true },
    "case": { "after": true } }}],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
    "array-bracket-spacing": ["error", "always", { "singleValue": false, "arraysInArrays": true }],
    "computed-property-spacing": ["error", "never"],
    "curly": ["error", "multi"],
    "brace-style": ["error", "allman", { "allowSingleLine": true }],
    "nonblock-statement-body-position": ["error", "below"],
    "arrow-parens": ["error", "as-needed"],
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "linebreak-style": ["error", "unix"],
    "comma-dangle": ["error", "never"],
    "eol-last": ["error", "always"],
    "array-bracket-newline": ["error", { "multiline": true }],
    "dot-location": ["error", "object"],
    "key-spacing": ["error", { align: "value" }],
    "object-property-newline": "error",
    "object-curly-newline": ["error",{ "minProperties": 2}],
    "no-whitespace-before-property": "error",
    "padded-blocks": ["error", "never"],
    "switch-colon-spacing": ["error", {"after": true, "before": false}],
    "max-len": ["error", { "code": 110 }],
    "multiline-ternary": ["error", "always-multiline"],
    "space-infix-ops": "error"
  }  
};
