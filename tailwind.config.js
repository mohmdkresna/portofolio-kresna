/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./thankyou.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#fb923c',
        secondary:'#64748b',
        dark:'#0f172a',
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

