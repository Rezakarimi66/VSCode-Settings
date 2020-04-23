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
  "parser": "babel-eslint",
  parserOptions: { 
    
    ecmaVersion: 2018, 
    sourceType: "module",
    "allowImportExportEverywhere": true
  },
  "rules": {
    "semi": ["error", "always"],
    "space-in-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": ["error", { after: false }],
    "object-property-newline": ["error"],
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
    "operator-linebreak": ["error", "none"],
    "linebreak-style": ["error", "unix"],
    "comma-dangle": ["error", "never"],
  }  
};
