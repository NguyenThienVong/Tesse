/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
       },
      colors: {
        'regal-gray': '#8C8C8C',
        'regal-Neutral': '#BFBFBF',
        'white-Neutral': '#F0F0F0',
        'regal-Primary':'#ECC329',
        'regal-Character':'#000000',
        'Character'      :'#FFFFFF',
        'regal-Neutrall'  : '#F5F5F5',
        'regal-Neutralll'  : '#434343',
        'bgNeutralll'  : '#FAFAFA',
        'borderNeutral'  : '#8C8C8C',
        'borderPrimary'  : '#543701',
        'borderPrimaryy'  : '#A1760B',
        'borderPrimaryy'  : '#A1760B',
        'borderPrimaryyy'  : '#8C8C8C',
        'borderNeutral2'  : '#D9D9D9',
        'Neutral'  : '#FAFAFA',
      },
      screens: {
        'xr': '414px',
        'se' : '375px'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/banner.png')",
        'Polygon': "url('/public/img/Polygon.png')",
        'BG': "url('/public/img/BG.png')",
        'hero': "url('/public/img/hero.png')",
        'vector': "url('/public/img/Vector.png')",
        'metting': "url('/public/img/meeting.png')",
      },
      boxShadow: {
        '10xl': '0 4px 12px #ECC329;',
        '11xl': '0 4px 12px 3px #ECC329;',
      }
    },
   
  },
  plugins: [],
}

