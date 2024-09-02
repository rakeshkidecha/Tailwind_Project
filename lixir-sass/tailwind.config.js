/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    container:{
      center:true,
      padding:'15px',
      screens: {
        'sm': '540px',
        // => @media (min-width: 640px) { ... }
  
        'md': '720px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '960px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1140px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1320px',
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors:{
        'theme':'#2a3855',
        'yello':'#fdd428',
        'white-opa':'rgba(255,255,255,.60)',
        'text-color':'#6a6a6a',
        'dark-blue':'#2A3855',
        'light-blue':'rgba(44, 56, 85, .7)',
        'light-gray':'#f2f2f2',
        'footer-bg':'#3D4C6F',
      },
      spacing:{
        '728':'728px',
      },
      boxShadow:{
        'icon-shadow':'0px 0px 0px 10px #ffffff87',
      },
      fontSize:{
        '26':'26px',
      },
      fontFamily:{
        'Montserrat':'"Montserrat", sans-serif'
      }
    },
  },
  plugins: [],
}

