/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center : true,
      padding : {
        DEFAULT: '1.05rem',
        md: '2rem',
        lg: '4rem',
      },
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
        'hitam' : '#191C21',
        'merah' : '#DC3545'
      },
    },
  },
  plugins: [{cssnano: {}}],
}
