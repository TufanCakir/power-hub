## Manuelle Husky-Einrichtung (wenn nötig)

Falls die automatische Husky-Installation fehlschlägt, so richtest du Husky-Pre-Commit von Hand ein:

```sh
# Husky-Ordner anlegen
mkdir .husky

# Ins Husky-Verzeichnis wechseln
cd .husky

# .gitignore für den Ordner anlegen
echo "node_modules/" > .gitignore

# Pre-Commit Hook für lint-staged anlegen
echo "npx lint-staged" > pre-commit

# (Optional für Mac/Linux/WSL)
chmod +x pre-commit

Linting-Richtlinien (eslint.config.js)
Unser Projekt nutzt eine Flat ESLint-Konfiguration, um sauberen, wartbaren Code zu garantieren.

Basis: eslint-config-expo/flat

Prettier-Empfehlungen automatisch integriert

Spezielle Regeln pro Ordner: Komponenten, Screens, Hooks, Helpers, Tests

Siehe eslint.config.js für die komplette Config!

Kurzfassung:

Max. 100 Zeilen pro Datei (Warnung)

Keine Inline-Styles in React Native

Immer Double-Quotes

Alle Komponenten & Screens: nur Default-Export!

Helpers, Hooks, Utils: nur Named-Export!

Lint-Check bei jedem Commit dank Husky/lint-staged

So sieht ein Ausschnitt der Konfig aus:

module.exports = defineConfig([
  // Ignored Files
  { ignores: ["node_modules/**", "dist/**", "build/**"] },
  // Expo & Prettier
  expoConfig,
  eslintPluginPrettierRecommended,
  // Globale Regeln
  {
    plugins: { "react-native": reactNative },
    rules: {
      "max-lines": [
        "warn",
        { max: 100, skipBlankLines: true, skipComments: true },
      ],
      "react-native/no-inline-styles": "warn",
      quotes: ["error", "double"],
      // ...
    },
  },
  // ... weitere Blöcke
]);
```
