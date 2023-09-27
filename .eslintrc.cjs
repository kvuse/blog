module.exports = {
  extends: [
    '@kvuse/eslint-config',
  ],
  globals: {
    Astro: true,
  },
  overrides: [
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        // 'astro/no-unused-define-vars-in-style': 'error',
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',

        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
};
