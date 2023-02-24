const config = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#EAEDF6',
          main: '#0c4a6e',
          dark: '#000320',
          accent: '##0891b2',
          red: '#b91c1c',
          'contrast-text': '#ffffff',
        },
      },
    },
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
