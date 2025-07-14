// eslint.config.js (Flat Config!)
// ----------------------------------
// Best Practices für Expo/React Native + Prettier

const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const reactNative = require("eslint-plugin-react-native");

/**
 * ESLint Flat Config
 * Alle Blöcke möglichst klar getrennt, jede Regel begründet und kommentiert!
 */
module.exports = defineConfig([
  // 1. Ignored Files (Flat config! .eslintignore gibt es nicht mehr)
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "android/**",
      "ios/**",
      "web-build/**",
      "coverage/**",
    ],
  },

  // 2. Basis-Configs (Expo bringt alles für React Native mit)
  expoConfig,
  eslintPluginPrettierRecommended,

  // 3. Globale Regeln für das ganze Projekt
  {
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      // Code-Qualität
      "max-lines": [
        "warn", // als Warnung, nicht error, sonst kann Entwicklung nerven
        { max: 100, skipBlankLines: true, skipComments: true },
      ],

      // React Native spezifisch
      "react-native/no-inline-styles": "warn",
      "react-native/no-color-literals": "off", // Falls du Farben inline erlauben willst

      // Best Practices/Formatierung
      "no-console": "off", // console.log in Dev ok, im Build ggf. "warn" oder "error"
      quotes: ["error", "double"],

      // Prettier Integration
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false, // Du möchtest "double"
        },
      ],

      // React Hooks/JSX
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-boolean-value": ["error", "always"],

      // Add more global rules here as needed!
    },
  },

  // 4. Screens & Components: Nur Default-Export, keine Named-Exports, PascalCase!
  {
    name: "Screens & Components",
    files: ["screens/**/*.{js,jsx,ts,tsx}", "components/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-named-export": "error",
      "import/no-anonymous-default-export": [
        "error",
        {
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
        },
      ],
      // Optional: Weitere Style-Regeln für Komponenten einfügen!
    },
  },

  // 5. Helpers: Nur Named-Exports, camelCase für Dateien!
  {
    name: "Helpers",
    files: ["helpers/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-default-export": "error",
      // Weitere Helper-Regeln möglich!
    },
  },

  // 6. Tests: Dateinamen beliebig, lockere Regeln möglich
  {
    name: "Tests",
    files: ["**/*.test.{js,jsx,ts,tsx}"],
    rules: {
      // Add relaxed test rules here if needed
    },
  },

  // 7. Hooks & Utils: Named-Export only, camelCase!
  {
    name: "Hooks & Utils",
    files: ["hooks/**/*.{js,jsx,ts,tsx}", "utils/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "import/no-default-export": "error",
      // Weitere spezielle Hook/Util-Regeln einfügen!
    },
  },
]);
