/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      transitionProperty: {
        'height': 'height',
    },
      fontFamily: {
        roboto: "Roboto",
    },
    colors: {
       primary: "#FFFFFF",
       // primary: "#020101",
       // primary: "#020201",
        secondary: "#2AC299",
    },
    boxShadow: {
        primary: "0 3px 13px 2px rgba(255,255,255)",
    },
     
      animation: {
        slideup: 'slideup 1s ease-in-out',
        slideup42: 'slideup42 1s ease-in-out',
        slideup422: 'slideup42 0.6s ease-in-out',
        slideup423: 'slideup42 2s ease-in-out',
        
        slidedown: 'slidedown 1s ease-in-out',
        slidedown2: 'slidedown2 1.8s ease-in-out',
        slidelefttranfrom: 'slidelefttranfrom 1.5s ease-in-out',
        slideleft: 'slideleft 0.7s ease-in-out',
        slideleft3: 'slideleft3 1s ease-in-out',
        slideleft4: 'slideleft3 2.3s ease-in-out',
        slideleft2: 'slideleft2 1.8s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        slideright2: 'slideright2 1.8s ease-in-out',
        slideright3: 'slideright2 1.9s ease-in-out',
        widthChange: 'widthChange 1s ease-in-out',
        dropdownHight: 'dropdownHight 0.4s  ease',
        dropupHight: 'dropupHight 1s ease-in-out',
        wave: 'wave 1.2s linear infinite',
        slowfade: 'slowfade 2.2s ease-in-out',
        slowfade2: 'slowfade2 1.5s ease-in-out',
        slowfade3: 'slowfade2 0.7s ease-in-out',
        slowfadehidden: 'slowfadehidden 2s ease-in-out',
        slowspin : 'slowspin 0.2s linear infinite',
        Fastspin : 'slowspin 2.5s linear infinite',
      },      
      keyframes: {
        slowspin :{
          from :{ transform: 'rotate(0deg)' },          
          to : { transform: 'rotate(360deg)'}
        },
        dropdownHight: {
          from: {    height: '0%' },
          to: {  height: '95%' },
        },
        dropupHight: {
          from: {   height: '100%' },
          to: {  height: '0%' },
        },
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slowfadehidden: {
          from: {  transform : 'rotate(0deg)' },
          to: {  transform : 'rotate(180deg)'  },
        },
        slowfade2: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideup42: {
          from: { opacity: 0, transform: 'translateY(100%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown2: {
          from: { opacity: 0, transform: 'translateY(-600px)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-140px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slidelefttranfrom: {
          from: { opacity: 0, transform: 'translateY(290px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideleft3: {
          from: { opacity: 0, transform: 'translateX(-350px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideleft2: {
          from: { opacity: 0, transform: 'translateX(-500px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright2: {
          from: { opacity: 0, transform: 'translateX(500px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        widthChange: {
          from: { opacity: 0, transform: 'w-[63%]' },
          to: { opacity: 1, transform: 'w-[100%]' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
    },
    
      
      
    
    screens: {
      '280' : '280px',
      '300' : '300px', 
       '330' : '330px',      
      '350' : '350px',   
      '400' : '400px',   
      '450' : '450px', 
      '500' : '500px', 
      '550' : '550px', 
      '600' : '600px', 
      '690' : '690px', 
      '720' : '720px', 
      '745' : '745px', 
      '75' : '745px', 
      '750': '750px', 
      '760': '760px', 
      '800': "800px",
      '850' : '850px', 
      '905' : '905px', 
       '900' : '900px',
      '950' : '950px', 
      '1000' : '1000px', 
      '1077' : '1077px',
      '1160' : '1160px',
       '1148' : '1148px',
       '1244' : '1244px',
      '1319' : '1319px', 
      '1400': '1400px', 
      '1090' :'1090px',
      '1123' : '1123px',
      '1200' : '1200px',      
      '1225' : '1225px',
      '1247' : '1247px',
       '1355' : '1355px',
       '1400' : '1400px',
      '1544' : '1544px',

    }
  
  },
  plugins: [],
}

