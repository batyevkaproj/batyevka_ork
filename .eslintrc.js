module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": [
      "react",
      "@typescript-eslint"
    ],
    "rules": {
      // Disable string quote rules completely
      "quotes": "off",
      "@typescript-eslint/quotes": "off",
    // To completely turn OFF the irregular whitespace rule
    'no-irregular-whitespace': 'off',
    
    // To make the unknown property rule a WARNING instead of an error
    'react/no-unknown-property': 'warn',
    
    // To make the unused variables rule a WARNING
    '@typescript-eslint/no-unused-vars': 'warn',
      
      // Other disabled/relaxed rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-empty-function": "warn",
      "no-empty": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react/display-name": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "warn",
      "semi": ["warn", "always"],
      "no-console": "off",
      "no-throw-literal": "off",
      "@typescript-eslint/no-throw-literal": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "ignorePatterns": [
      "node_modules/",
      "dist/",
      ".next/",
      "public/",
      "*.config.js",
      "*.config.ts"
    ]
  }
