/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f7faeb',
          '100': '#ecf3d4',
          '200': '#dae7af',
          '300': '#c1d77f',
          '400': '#a2c14e',
          '500': '#89a939',
          '600': '#6a862a',
          '700': '#516724',
          '800': '#425321',
          '900': '#394720',
          '950': '#1d260d',
        },
      },
      fontFamily: {
        custom: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

// https://uicolors.app/create