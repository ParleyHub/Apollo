module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      red: {
        100: '#fc9b97',
        200: '#ef8783',
        300: '#e97672',
        400: '#df6662',
        500: '#d9534f',
        600: '#ce3531',
        700: '#ba1b18',
        800: '#af0d0a',
        900: '#970400',
      },
      blue: {
        100: '#9de2ff',
        200: '#88d5f5',
        300: '#75cbef',
        400: '#66c2e9',
        500: '#53b6e0',
        600: '#3ca6d2',
        700: '#2696c4',
        800: '#1385b3',
        900: '#0077a7',
      },
      green: {
        100: '#cdffd5',
        200: '#b7f3c1',
        300: '#a2e9ad',
        400: '#8ad696',
        500: '#74c080',
        600: '#5cab68',
        700: '#4c9f58',
        800: '#3b9048',
        900: '#2b7c38',
      },
      yellow: {
        100: '#ffd76b',
        200: '#ffd053',
        300: '#ffca3e',
        400: '#fec429',
        500: '#f0b518',
        600: '#dda511',
        700: '#ce980c',
        800: '#b78605',
        900: '#a37600',
      },
      orange: {
        100: '#fe9b83',
        200: '#fe8b6f',
        300: '#fc7c5d',
        400: '#f76c4a',
        500: '#f95f39',
        600: '#f55027',
        700: '#f7461a',
        800: '#f53e10',
        900: '#f53303',
      },
      gray: {
        100: '#ededed',
        200: '#dddcdc',
        300: '#cccccc',
        400: '#b5b5b5',
        500: '#999898',
        600: '#7a7979',
        700: '#5b5b5b',
        800: '#4a4a4a',
        900: '#383737',
      },
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
