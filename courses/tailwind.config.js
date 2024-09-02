/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    container:{
      center:true,
      padding:'15px',
      screens: {
        'sm':'540px',
        'md':'720px',
        'lg':'960px',
        'xl':'1140px',
        '2xl':'1320px',
      },
    },
    fontFamily: {
      JosefinSans: ['"Josefin Sans", sans-serif'],
      mulish: [' "Mulish", sans-serif'],
    },
    extend: {
      colors:{
        'light-orange':'#FF9F67',
        'theme':'#AE59FF',
        'dark-theme':'#C86FFF',
        'light-theme':'#4255A4',
        'extra-light-theme':'#6E7697',
        'gradion-1':'#A576FF',
        'gradion-2':'#E469FF',
      },
      spacing:{
        '800':'800px',
        '728':'728px',
      },
      fontSize:{
        '45':'45px',
      },
      transitionTimingFunction:{
        'linear-bounce':'cubic-bezier(0.4, 1.6, 0.4, 0.7)',
      },
      boxShadow:{
        'custom-shadow':'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'loader':'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        'login-logo':'0px 0px 0px 10px #ffffff63',
      },
    },
  },
  plugins: [],
}

