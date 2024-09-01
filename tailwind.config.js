/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#995c35',
          '300': '#d0a774',
          '400': '#999999',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#dae7af',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
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