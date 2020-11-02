module.exports = {
"root": true,
extends: [
  'airbnb-typescript/base',
  "prettier",
  "prettier/@typescript-eslint"
],
"env": {
  "node": true
},
"parser": "@typescript-eslint/parser",
"plugins": ["import","@typescript-eslint"],
"settings": {
  "import/parsers": {
    "@typescript-eslint/parser": [
    ".ts"
  ]
  },
  "import/resolver": {
    // use <root>/tsconfig.json
    "typescript": {
      "alwaysTryTypes": true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
    },
    // Multiple tsconfigs (Useful for monorepos)

    // use an array of glob patterns
    "typescript": {
      "project": [
        "**/tsconfig.json"
      ]
    }
  }
},
"parserOptions": {
  "project": "./tsconfig.json",
  "tsconfigRootDir": __dirname,
  "sourceType": "module",
  "ecmaVersion": 2018
},
"rules": {
  "@typescript-eslint/no-explicit-any": "off",
    // turn on errors for missing imports
    "import/no-unresolved": "error"
  }
}
