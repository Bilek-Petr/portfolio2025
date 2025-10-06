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
      padding: 'clamp(1rem, 3vw, 2rem)',
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
        'header-sm': 'clamp(1.5rem,2.5vw,2rem)',
        'header-md': 'clamp(1.9rem,3vw,3rem)',
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
          'linear-gradient(to right, #B86ADF, #FF8C63, #FFB147)',
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
      });
    },
  ],
};
