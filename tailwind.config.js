/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        darkkhaki: "#b9be75",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "27xl": "46px",
      "9xl": "28px",
      "18xl": "37px",
      "5xl": "24px",
      lgi: "19px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
