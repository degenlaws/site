module.exports = {
  plugins: [
    require('postcss-100vh-fix'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
