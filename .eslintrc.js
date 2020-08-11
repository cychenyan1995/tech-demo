module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-empty": "warn",
    "prettier/prettier": "warn",
    "no-fallthrough": "off",
  },
  parserOptions: {
    ecmaVersion: 6, //指定ECMAScript支持的版本，6为ES6
    sourceType: "module", //指定来源的类型，有两种”script”或”module”
    parser: "babel-eslint",
  },
};
