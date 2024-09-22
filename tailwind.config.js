/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        "1440": "1440px",
      },
      height: {
        'screen': '100vh'
      },
      colors: {
        "grays-white": "#fff",
        gray: {
          "100": "#EEF3F8",
          "200": "#f5f5f7",
          "300": "#d6e3f2",
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
        eco1: "#f0bfc3",
        eco2: "#32aa93",
        eco3: "#7cbf80",
        eco4: "#e8ef7c",
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      borderRadius: {
        "9xl-6": "28.6px",
        "9xl": "28px",
        "13xl": "32px",
      },
      screens: {
        xs: '412px',
      }
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      xl: "20px",
      "45xl": "64px",
      sm: "14px",
      "smi-5": "12.5px",
      "mini-3": "14.3px",
      "base-1": "16.1px",
      lg: "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      inherit: "inherit",
      rem3: "3rem"
    },
    screens: {
      sm: '640px', // Para pantallas pequeñas
      md: '768px', // Para pantallas medianas
      lg: '1024px', // Para pantallas grandes
      xl: '1280px', // Para pantallas extra grandes
      xxl: '1440px',
      xxxl: '1536px' // Para pantallas extra extra grandes
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    preflight: false,
  },
};