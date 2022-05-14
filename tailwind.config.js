module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // colors: {
    //   'grey900': '#212121',
    //   'green': '#1de9b6',
    //   'orange': '#e65100'
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
