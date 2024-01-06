module.exports = {
  // settings: {
  //   react: {
  //     version: "detect",
  //   },
  // },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/triple-slash-reference": "off",
  },
};
