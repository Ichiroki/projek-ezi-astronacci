/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors: {
        'cyan-5' : '#06b6d4',
        'cyan-4' : '#22d3ee', 
        'cyan-3' : '#67e8f9',
        'dark-9' : '#0f172a',
        'dark-8' : '#1e293b',
        'dark-7' : '#334155',
        'white' : '#f1f5f9',
        'hitam' : '#191C21'
      },

      screen : {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}
