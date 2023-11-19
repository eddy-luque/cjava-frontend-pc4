/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 18/11/2023 - 22:05:17
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/11/2023
    * - Author          :
    * - Modification    :
**/
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });
});

module.exports = {
  important : true,
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#cc0000',
          light: '#E7DAEA',
          'dark-light': 'rgb(204 ,0, 0 , .15)',
        },
        secondary: {
          DEFAULT: '#009EE0',
          light: '#D3E3F6',
          'dark-light': 'rgba(0 158 24 15%)',
        },
        success: {
          DEFAULT: '#00ab55',
          light: '#ddf5f0',
          'dark-light': 'rgba(0,171,85,.15)',
        },
        danger: {
          DEFAULT: '#e7515a',
          light: '#fff5f5',
          'dark-light': 'rgba(231,81,90,.15)',
        },
        warning: {
          DEFAULT: '#e2a03f',
          light: '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
        },
        info: {
          DEFAULT: '#2196f3',
          light: '#e7f7ff',
          'dark-light': 'rgba(33,150,243,.15)',
        },
        dark: {
          DEFAULT: '#605D5C',
          light: '#DFDFE0',
          'dark-light': 'rgba(96,93,92,.15)',
        },
        black: {
          DEFAULT: '#000000',
          light: '#C7C6C7',
          'dark-light': 'rgba(0,0,0,.15)',
        },
        white: {
          DEFAULT: '#ffffff',
          light: '#e0e6ed',
          dark: '#888ea8',
        },
        'wurth-red': '#CC0000',
        'wurth-black': '#000000',
        'wurth-dark-grey': '#605D5C',
        'wurth-grey': '#959595',
        'wurth-light-grey': '#DEDEDE',
        'wurth-white': '#FFFFFF',
        'wurth-cyan': '#009EE0',
        'wurth-green': '#B9C900',
        'wurth-yellow': '#FFE900',
        'wurth-orange': '#F4911C',
        'wurth-blue': '#0C4686',
        'is-invalid': '#e3342f'

      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    rotateX,
    require('postcss-nesting'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}

