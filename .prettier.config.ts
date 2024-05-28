module.exports = {
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "^(react-icons/(.*)$)|^(react-icons$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@local/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "",
    "^@/utils/(.*)$",
    "",
    "^@/components/(.*)$",
    "",
    "^@/styles/(.*)$",
    "",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
};
