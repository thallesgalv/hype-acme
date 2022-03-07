module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ['Ubuntu']
      },
      colors: {
        primary: '#f97316',
        dark: '#263238',
        light: '#fff',
        background: '#f2f3f4'
      },
      keyframes: {
        show: {
          '0%': { transform: 'translate3d(0,-3rem,0)', opacity: '0' }
        },
        showreverse: {
          '0%': { transform: 'translate3d(0,1rem,0)', opacity: '0' }
        },
        in: {
          '0%': { transform: 'translate3d(10rem,0,0)', opacity: '0' }
        },
        heart: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        show: 'show 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        showreverse: 'showreverse 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        in: 'in 0.3s ease-in-out',
        heart: 'heart 0.3s ease-out 2 forwards'
      }
    }
  },
  variants: {
    extend: {},
    plugins: []
  }
}
