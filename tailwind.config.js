module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        playfair: ['Playfair Display', 'sans-serif'],

      },
      colors:{

        'custom-gray': '#A6AFC3',
        'custom-gray2': '#F9F9F7',
        'custom-dark': '#2E3136',
        'custom-dark2': '#656A76',
        'custom-blue': '#0967C9',
        'custom-blue2': '#408FE3',
        'custom-yellow': '#F0E438',
        'custom-yellow2': '#F3ED90',
        'custom-orange': '#F09814',
        'custom-orange2': '#F3B860',
        'custom-green': '#11C31C',
        'custom-green2': '#75DD7B',
        'custom-pink': '#E51141',
        'custom-pink2': '#FF6E8F',
        'custom-red': '#CB0007',
        'custom-red2': '#EC4D49',

        'devarana-background':'#F3F6F9',
        'devarana-blue' : '#56739B',
        'devarana-babyblue' : '#a9c0e4',
        'devarana-pink' : '#d64767',
        'devarana-midnight' : '#242a38',
        'devarana-hazelnut' : '#eadfd4',
        'devarana-pearl' : '#f9f9f7',
        'devarana-graph' : '#656a76',
        'devarana-pollito' : '#ffdea4',
        'devarana-salmon' : '#fabcab',
      },
      fontSize: {
        base: ['14px', '24px'],
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'max-width': 'max-width',
        'objectPosition': 'objectPosition',
      },
      borderRadius: {
        'ext' : '10px'
      },
      boxShadow: {
        'ext' : 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem'
      }
      
    },
  },
  plugins: [],
 
}
