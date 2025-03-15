// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'slide-right': 'slideRight 5s linear infinite',
          'slide-left': 'slideLeft 5s linear infinite',
        },
        keyframes: {
          slideRight: {
            '0%': { transform: 'translateX(-100%)' }, // Starts off-screen to the left
            '100%': { transform: 'translateX(0)' },    // Ends at the center
          },
          slideLeft: {
            '0%': { transform: 'translateX(100%)' }, // Starts off-screen to the right
            '100%': { transform: 'translateX(0)' },  // Ends at the center
          },
        },
      },
    },
    plugins: [],
  };
  