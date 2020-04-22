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
    "space-in-parens": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "keyword-spacing": ["error", { after: false }],
    "space-in-brackets": ["error", "always"],
    "object-curly-spacing": ["error", "always", { "objectsInObjects": true }],
    "object-property-newline": ["error"],
    "array-bracket-spacing": ["error", "always", { "arraysInArrays": true }],
    "curly": ["error", "multi-or-nest"],
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
