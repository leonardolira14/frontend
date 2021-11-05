module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: 'class', // or 'media' or 'class',
  important: true,
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#D67B1E',
          '50': '#FBEDDF',
          '100': '#F7E0C9',
          '200': '#F1C79C',
          '300': '#EBAE6F',
          '400': '#E59442',
          '500': '#D67B1E',
          '600': '#A96118',
          '700': '#7D4811',
          '800': '#502E0B',
          '900': '#231405'
        },
        'secondary': {
          DEFAULT: '#322C98',
          '50': '#C0BDEC',
          '100': '#ADAAE6',
          '200': '#8782DB',
          '300': '#615BCF',
          '400': '#3F37C0',
          '500': '#322C98',
          '600': '#252170',
          '700': '#181549',
          '800': '#0B0A21',
          '900': '#000000'
        },
        'bgs': {
          'app': {
            DEFAULT: '#FAFAFA',
            light: '#FAFAFA',
            dark: '#4A5A7B'
          },
          'table': {
            'header': {
              'row': {
                DEFAULT: '#AFBBCF',
                light: '#AFBBCF',
                dark: '#11141B'
              }
            },
            'body': {
              'row': {
                DEFAULT: '#fff',
                light: '#fff',
                dark: '#242C3B'
              }
            }
          }
        },
        'text1': '#36435A',
        'text2': '#5E759E'
      },
      fontFamily: {
        'primary': ['"Poppins"', 'sans serif']
      },
      borderRadius: {
        DEFAULT: '0.5rem'
      },
      spacing: {
        '0.25rem': '0.25rem',
        '0.5rem': '0.5rem',
        '0.75rem': '0.75rem',
        '1rem': '1rem',
        '1.25rem': '1.25rem',
        '1.50rem': '1.50rem',
        '1.75rem': '1.75rem',
        '2rem': '2rem'
      },
      fontSize: {

      },
      stroke: theme => ({
        'primary': theme('colors.primary'),
        'secondary': theme('colors.secondary'),
        'white': theme('colors.white'),
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
