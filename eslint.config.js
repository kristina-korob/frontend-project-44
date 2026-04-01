import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.browser }
  },
  {
    rules: {
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-in-parens": ["error", "never"],
      "no-multi-spaces": "error",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
])