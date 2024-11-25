module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "unused-imports", "prefer-arrow"],
  rules: {
    "indent": ["error", 2],
    "react/jsx-filename-extension": [2, { extensions: [".tsx"] }],
    "react/jsx-max-depth": [2, { max: 5 }],
    "react/jsx-sort-props": 2,
    "arrow-body-style": [2, "as-needed"],
    "no-restricted-syntax": [
      2,
      {
        selector: "TSEnumDeclaration",
        message: "Don't declare enums.",
      },
      {
        selector: "TSInterfaceDeclaration",
        message: "Prefer types to interfaces.",
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "import/no-default-export": "warn",
    "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
    "@next/next/no-html-link-for-pages": "warn",
    "react/display-name": "warn",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "class",
        format: ["PascalCase"],
        custom: {
          regex: "send|start|find",
          match: false,
        },
      },
      {
        selector: "parameter",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["is", "should"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["./", "../"],
      },
    ],
  },
  overrides: [
    {
      files: ["src/lib/create-custom-theme.tsx"],
      rules: {
        "no-restricted-syntax": [
          2,
          {
            selector: "TSEnumDeclaration",
            message: "Don't declare enums.",
          },
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-console": ["error"],
      },
    },
    {
      files: ["src/pages/**/*"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "off",
      },
    },
  ],
  settings: {
    "react": {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
