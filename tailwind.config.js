/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f6f7f4',
          100: '#e3e6dc',
          200: '#c7cdb9',
          300: '#a6ae8f',
          400: '#8a936d',
          500: '#6e7751',
          600: '#575f40',
          700: '#454c34',
          800: '#3a3f2d',
          900: '#323627',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf8f3',
          200: '#f5f1e8',
          300: '#ebe4d5',
          400: '#ddd2ba',
          500: '#cdbf9f',
          600: '#b9a781',
          700: '#9d8a68',
          800: '#827157',
          900: '#6c5d49',
        },
        earth: {
          50: '#fdf8f3',
          100: '#faede0',
          200: '#f4d8bf',
          300: '#ecbc95',
          400: '#e39565',
          500: '#dc7744',
          600: '#ce5f39',
          700: '#ac4b31',
          800: '#8a3e2d',
          900: '#703527',
        },
      },
    },
  },
  plugins: [],
};
