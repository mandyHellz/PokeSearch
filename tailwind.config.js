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
        type: {
          psychic: "#FB5584",
          rock: "#B69E31",
          ghost: "#70559B",
          steel: "#B7B9D0",
          water: "#6493EB",
          grass: "#74CB48",
          ice: "#9AD6DF",
          dark: "#75574C",
          fairy: "#E69EAC",
          normal: "#AAA67F",
          fighting: "#C12239",
          flying: "#A891EC",
          poison: "#A43E9E",
          ground: "#DEC16B",
          bug: "#A7B723",
          fire: "#F57D31",
          electric: "#F9CF30",
          dragon: "#7037FF"
        }
      },
      fontSize: {
        'xxxs': '.50rem',
        'xxs': '.60rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
