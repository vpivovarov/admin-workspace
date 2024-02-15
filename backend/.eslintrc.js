module.exports = {
  extends: ["standard-with-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};
