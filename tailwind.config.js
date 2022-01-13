module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-banner": "url(/img/pokemon-banner-03.jpeg)",
      }),
      height: {
        98: "24.5rem",
        100: "25rem",
        124: "31rem",
        128: "32rem",
        240: "60rem",
        352: "92rem",
      },
      colors: {
        primary: {
          DEFAULT: "#303030",
          100: "#E2E2E2",
          200: "#AAA9A9",
          300: "#B8B5BA",
          400: "#8B8B8B",
          500: "#7A7A7A",
          600: "#7F7F7F",
          700: "#6D6D6D",
          800: "rgba(48, 48, 48, 0.8)",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#BAB5B7",
          500: "#bfecff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
