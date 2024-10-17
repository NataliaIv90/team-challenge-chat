// eslint.config.cjs
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginTypeScript = require('@typescript-eslint/eslint-plugin');
const eslintPluginReactRefresh = require('eslint-plugin-react-refresh');
// const eslintPluginReactCompiler = require('eslint-plugin-react-compiler');
const eslintParserTypeScript = require('@typescript-eslint/parser');

module.exports = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
        React: true,
      },
      parser: eslintParserTypeScript,
    },
    ignores: ['dist', '.eslintrc.cjs'],
    plugins: {
      'react-refresh': eslintPluginReactRefresh,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypeScript,
      // 'react-compiler': eslintPluginReactCompiler,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'react/react-in-jsx-scope': 'error',
      // 'react-compiler/react-compiler': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^React$' },
      ],
      'prettier/prettier': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      quotes: ['error', 'single'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
