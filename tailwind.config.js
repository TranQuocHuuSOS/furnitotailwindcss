module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    color:{
      'reds':'#FFF3E3',
      'coffee':{
        50:"#FFF3E3",
      }
    },
    },
    container:{
      center: true,
    },
    keyframes: {
      slideDown: {'0%': { transform: 'translateY(-100%)' },'100%': { transform: 'translateY(0)' },},
      fadeIn:{from:{opacity:0},to:{opacity: 1},}
    },
    animation: {
      slideDown: 'slideDown .4s ease-in-out ',
    },
  },
  plugins: [],
}