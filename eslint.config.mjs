import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: true,
    formatters: true,
    react: true,
    ignores: ['apps/api/src/database/generated', 'apps/web/.react-router/types'],
  },
  {
    files: [
      'apps/web/src/components/ui/**/*',
      'apps/web/src/routes/**/*',
    ],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
)
