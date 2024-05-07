/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: [
      "./src/**/*.{html,ts}",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-pic': "url('/assets/images/fruits.jpg')",
        'dairy-pic': "url('/assets/images/milkie.jpg')",
        'veggie-pic': "url('/assets/images/veggie.jpg')",
        
      },
      colors:{
        'greenNew': '#627254'
      }

    },
  },
  plugins: [],
}

