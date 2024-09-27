/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burlywood: '#deb887',
      },
      animation: {
        
        "bounce-up-down": "bounceUpDown 2s infinite",
      
      },
      keyframes: {
        
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        
      },
    },
  },
  plugins: [],
}


