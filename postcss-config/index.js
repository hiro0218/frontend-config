module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      grid: true,
      cascade: false,
    }),
    require('postcss-sort-media-queries'),
  ],
};
