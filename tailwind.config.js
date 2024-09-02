/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grays-white": "#fff",
        gray: {
          "100": "#EEF3F8",
          "200": "#1e1e1e",
        },
        whitesmoke: "#f5f5f7",
        black: "#000",
        lightgray: "#cad1db",
        slategray: "#687484",
        darkslategray: "#07313e",
        aliceblue: {
          "100": "#eef3f8",
          "200": "#e7ebf0",
        },
        lightsteelblue: "#b3c8dc",
        pink: "#f0bfc3",
        lavender: "#d6e3f2",
        paleturquoise: "#baeee3",
      },
      spacing: {},
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      borderRadius: {
        "9xl-6": "28.6px",
        "9xl": "28px",
        "13xl": "32px",
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
      "smi-5": "12.5px",
      "mini-3": "14.3px",
      "base-1": "16.1px",
      lg: "18px",
      "17xl": "36px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      md: {
        max: "960px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};