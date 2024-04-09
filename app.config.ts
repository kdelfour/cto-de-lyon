export default defineAppConfig({
  ui: {
    primary: 'blue',
    landing: {
      grid: {
        wrapper: 'grid-cols-10'
      }
    },
    variables: {
      light: {
        background: 'var(--color-white-100)',
        foreground: 'var(--color-gray-700)'
      },
      dark: {
        background: 'var(--color-black-900)',
        foreground: 'var(--color-black-200)'
      },
      header: {
        height: '4rem'
      }
    }
  }
})
