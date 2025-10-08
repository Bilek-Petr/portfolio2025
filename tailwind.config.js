/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: 'clamp(2rem, 3vw, 3rem)',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        xs: '415px',
      },
      fontSize: {
        'base-sm': 'clamp(0.94rem,1.75vw,1.125rem)',
        'base-md': 'clamp(1rem, 2vw, 1.25rem)',
        'header-sm': 'clamp(1.5rem,2.2vw,2rem)',
        'header-md': 'clamp(1.9rem,3vw,3rem)',
        'header-lg': 'clamp(3.5rem,6.5vw,7.15rem)',
      },
      colors: {
        primary: '#FFB147',
        secondary: '#FF8C63',
        accent: '#141313',
        light: '#fff',
        'gradient-start': '#B86ADF',
        'gradient-middle': '#FF8C63',
        'gradient-end': '#FFB147',
      },
      backgroundImage: {
        'gradient-custom':
          'linear-gradient(to right, #B86ADF, #FF8255, #FFAA3A)',
        'gradient-custom-vertical':
          'linear-gradient(to bottom, #FFB147, #FF8C63, #B86ADF)',
      },
      textFillColor: {
        gradient: 'transparent',
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image':
            'linear-gradient(to right, #B86ADF, #FF8C63, #FFB147)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.bg-glassmorphism': {
          background: 'rgba(255, 255, 255, 0.1)',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
          'backdrop-filter': 'blur(3.2px)',
          '-webkit-backdrop-filter': 'blur(3.2px)',
          border: '1px solid rgba(255, 255, 255, 0.23)',
        },
      });
    },
  ],
};
