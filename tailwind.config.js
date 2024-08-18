/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grays-white": "#fff",
        gray: "#1e1e1e",
        whitesmoke: "#f5f5f7",
        black: "#000",
        lightgray: "#cad1db",
        slategray: "#687484",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      "9xl": "28px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};