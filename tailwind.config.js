module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '1': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
      animation: {
        // Bounces for a total of 5 seconds
        'bounce-short': 'bounce 2s ease-out 1',
        'bounce-1':'bounce 2.5s ease-out 1.5  ',
        'bounce-2':'bounce 3s ease-out 1.5',
        'bounce-3':'bounce 3.5s ease-out 1.5',
        'bounce-4':'bounce 4s ease-out 1.5',
        'bounce-5':'bounce 4.5s ease-out 1.5',
        'fade-in-down': 'fade-in-down 3s ease-out 1 ',
        'fade-in-down-x': 'fade-in-down 3s ease-in-out 1',
        'fade-in-down-1': 'fade-in-down 5s ease-out 1 ',
        'fade-in-down-2': 'fade-in-down 6s ease-out 1 ',
        'fade-in-down-3': 'fade-in-down 6.5s ease-out 1 ',
        'fade-in-down-4': 'fade-in-down 7s ease-out 1 ',
        'fade-in-down-5': 'fade-in-down 7.5s ease-out 1 ',
          
      }
    },
  },
  plugins: [],
}
