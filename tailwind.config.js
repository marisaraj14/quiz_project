module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'TheGoodMonolith' : ['TheGoodMonolith'],
        'chakra':['Chakra Petch']
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-3deg)'
            },
            '50%': {
                transform: 'rotate(3deg)'
            },
        }
    },
    colors:{
      orange:'#F5B32F',
      pineGreen: '#519075',
      red: '#E23C57',
      rosyBrown: '#E788A6',
      appleGreen: '#6BBF59'
    },

    animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
