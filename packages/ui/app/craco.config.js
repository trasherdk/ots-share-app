module.exports = {
  style: {
    postcss: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      plugins: [require('tailwindcss')('./src/tailwind.config.js'), require('autoprefixer')],
    },
  },
};
