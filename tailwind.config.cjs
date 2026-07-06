/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E3A8A',
        accent: '#2563EB',
        light: '#F8FAFC',
        dark: '#111827'
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
