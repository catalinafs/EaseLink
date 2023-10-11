/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        'text': {
          DEFAULT: '#000000',
          'dark': '#FFFFFF'
        },
        'background': {
          DEFAULT: '#ecf4f8',
          'dark': '#070F13'
        },
        'primary': {
          DEFAULT: '#b46b41',
          'dark': '#BE754B'
        },
        'secondary': {
          DEFAULT: '#cfe3ed',
          'dark': '#122630'
        },
        'accent': {
          DEFAULT: '#b06940',
          'dark': '#BF784F'
        },
      },
      borderRadius: {
        'RadiusRounded': '50%',
      },
      boxShadow: {
        'ButtonHover': '0 20px 80px -10px #BE754B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}