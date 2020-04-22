module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018, 
    sourceType: "module",
  },
  plugins: [
    "prettier"
  ],
  "rules": {
    "space-in-parens": ["error", "always"],
    "quotes": ["error", "single"],
    "prettier/prettier": "error"
  }  
};
