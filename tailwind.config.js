/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // mainBackgroundColor: '#faf7f2',
        // bedBackgroundColor: '#93643b',
        primary: {
          '50': '#faf7f2',
          '100': '#f4eee0',
          '200': '#e9dcbf',
          '300': '#dac497',
          '400': '#c9a469',
          '500': '#bf8f50',
          '600': '#b17c45',
          '700': '#94633a',
          '800': '#775035',
          '900': '#61432d',
          '950': '#342216',
        },
      },
      fontFamily: {
        custom: ['SUSE', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
