module.exports = {
  darkMode: false, // 'media' or 'class'
  mode: 'jit',
  purge: {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
    colors: {
      'primary': {
        '50': '#fff9eb',
        '100': '#ffefc6',
        '200': '#ffdd88',
        '300': '#ffc64a',
        '400': '#ffb534',
        '500': '#f98a07',
        '600': '#dd6402',
        '700': '#b74406',
        '800': '#94330c',
        '900': '#7a2b0d',
        '950': '#461402',
    },
    'secondary': {
      '50': '#edfff8',
      '100': '#d5fff0',
      '200': '#aeffe2',
      '300': '#6fffcd',
      '400': '#34ffb5',
      '500': '#00e993',
      '600': '#00c276',
      '700': '#009860',
      '800': '#04774f',
      '900': '#066143',
      '950': '#003723',
  },
  'tertiary': {
    '50': '#fbf4ff',
    '100': '#f6e5ff',
    '200': '#eed0ff',
    '300': '#e1acff',
    '400': '#cf76ff',
    '500': '#bd42ff',
    '600': '#b534ff',
    '700': '#970ee2',
    '800': '#7e12b7',
    '900': '#681093',
    '950': '#48006f',
},

  },
},
  plugins: [],
};
