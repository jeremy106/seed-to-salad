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
          '400': '#c8a265',
          '500': '#c0904f',
          '600': '#b27c44',
          '700': '#94633a',
          '800': '#785034',
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
