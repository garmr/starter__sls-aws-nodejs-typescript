module.exports = {
"root": true,
extends: [
  'airbnb-typescript',
  "prettier",
  "prettier/@typescript-eslint"
],
"env": {
  "node": true
},
"parser": "@typescript-eslint/parser",
"plugins": [
  "@typescript-eslint",
],
"settings": {
  "import/parsers": {
    "@typescript-eslint/parser": [
    ".ts",
    ".tsx"
  ]
  },
  "import/resolver": {
    "typescript": {}
  }
},
"parserOptions": {
  "project": "./tsconfig.json",
  "tsconfigRootDir": "./functions/",
  "sourceType": "module",
  "ecmaVersion": 2018
},
"rules": {
  "@typescript-eslint/no-explicit-any": "off",
  }
}
