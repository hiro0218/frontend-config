module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      grid: 'autoplace',
      cascade: false,
    }),
    require('postcss-sort-media-queries'),
  ],
};
