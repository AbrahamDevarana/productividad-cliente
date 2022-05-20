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
        base: ['16px', '24px'],
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'objectPosition': 'objectPosition',
      },      
    },
  },
  plugins: [],
 
}
