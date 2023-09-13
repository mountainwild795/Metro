module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1234px",
    },
    extend: {
      colors: {
        primary: "#e3353b",
        secondary: "#7F56D9",
        primary_grey: "#f2f2f2",
        primary_black: "#262626",
        card_bg: "#262626",
      },
      boxShadow: {
        1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
