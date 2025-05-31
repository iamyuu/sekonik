import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    formatters: true,
    react: true,
    ignores: [
      'apps/api/src/database/generated',
      'apps/web/.react-router/types',

      'apps/api/dist',
      'apps/web/build',
    ],
  },
  {
    files: [
      'apps/web/src/components/ui/**/*',
      'apps/web/src/routes/**/*',
      'apps/web/src/root.tsx',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
