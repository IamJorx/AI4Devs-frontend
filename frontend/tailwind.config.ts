import { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'kanban': {
          'not-started': '#1e2330',
          'ready': '#2a2d3d',
          'in-progress': '#2d2544',
          'blocked': '#3d2d2d',
          'done': '#2d3d35',
          'cancelled': '#3d3d3d',
        }
      },
      backgroundColor: {
        'card': 'rgba(255, 255, 255, 0.05)'
      },
      backdropFilter: {
        'card': 'blur(10px)'
      }
    }
  },
  plugins: [],
}

export default config

