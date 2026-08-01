/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#3a2f1f',
        accent: '#C4983F',
        gold: {
          50: '#fbf6ea',
          100: '#f4e8c8',
          200: '#e9d093',
          300: '#ddb968',
          400: '#d1a44a',
          500: '#C4983F',
          600: '#a87b30',
          700: '#856025',
          800: '#5f451b',
          900: '#3a2b12'
        },
        light: '#FAF7F0',
        dark: '#0a0a0a'
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      spacing: {
        '128': '32rem'
      },
      borderRadius: {
        'xl': '1rem'
      }
    }
  },
  plugins: []
};
