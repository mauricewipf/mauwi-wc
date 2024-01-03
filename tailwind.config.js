module.exports = {
  content: ["src/**/*.{ts,html,css,scss}", "index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
