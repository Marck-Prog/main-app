module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    fontFamily: {
      sans: [
        "Jost",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "#FFFFFF",

      gray100: "#EEEEEE",
      gray200: "#ECECEC",
      gray300: "#C1C1C1",
      gray400: "#686868",
      gray500: "#282828",

      red: "#F05454",
      pink: "#F2EEEF",
      yellow: "#F5B461",
      green: "#9BDEAC",
      blue: "#66BFBF",
      lightgreen: "#F2FDFB",
      bgColor: "#282828",
    },
    extend: {
      backgroundImage: {
        "gradient-to-br": "linear-gradient(to bottom right, #22c55e, #2563eb)",
        "gradient-to-bl": "linear-gradient(to bottom left, #22c55e, #2563eb)",
      },
    },
  },
  variants: {
    extend: {
      transform: ["group-hover"],
      scale: ["group-hover"],
      transitionDuration: ["group-hover"],
      letterSpacing: ["group-hover"],
      width: ["group-hover"],
      borderColor: ["group-hover"],
      backgroundImage: ["hover"],
    },
    // divideColor: ['group-hover'],
  },
  plugins: [],
};
