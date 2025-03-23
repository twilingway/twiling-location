import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import eslint from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  eslint.configs.recommended,
  {
    languageOptions: {
      parser: tsEslintParser, // Указываем парсер TypeScript
    },
    plugins: {
      prettier: prettier,
      react: react,
      "react-native": reactNative,
      "@typescript-eslint": tsEslintPlugin,
    },
    // extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      "react-native/no-unused-styles": 2,
      "react-native/split-platform-components": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-color-literals": 2,
      "react-native/no-raw-text": 2,
      "react-native/no-single-element-style-arrays": 2,
      "react-hooks/exhaustive-deps": "off",
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          trailingComma: "all",
          bracketSpacing: true,
          printWidth: 100,
          endOfLine: "auto",
        },
      ],
      "@typescript-eslint/no-empty-function": ["off"],
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
]);
