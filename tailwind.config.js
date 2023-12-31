/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "0px",
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      hd: "1440px",
      "box-width": "1600px",
      "country-width": "1700px",
      xhd: "1920px",
    },
    colors: {
      opineo: "#8bbf42",
      primary: "#039341",
      "main-bg": "#191919",
      "main-fr": "#ffffff",
      transparent: "#00000000",
    },
    fontFamily: {
      primary: ["Manrope", "sans-serif"],
    },
    extend: {
      spacing: {
        dynamic: "var(--spacing)",
        "dynamic-heading": "calc(var(--padd) * 1)",
        "dynamic-1/2": "calc(var(--spacing) / 2)",
        "dynamic-1/3": "calc(var(--spacing) / 3)",
        "dynamic-1/4": "calc(var(--spacing) / 4)",
        "dynamic-1/6": "calc(var(--spacing) / 6)",
        "dynamic-1/8": "calc(var(--spacing) / 8)",
        // 'dynamic-text': "var(--spacing)",
        // "dynamic-text-heading": "calc(var(--padd) * 1)",
        // "dynamic-text-1/2": "calc(var(--spacing) / 2)",
        // "dynamic-text-1/3": "calc(var(--spacing) / 3)",
        // "dynamic-text-1/4": "calc(var(--spacing) / 4)",
        // "dynamic-text-1/6": "calc(var(--spacing) / 6)",
        // "dynamic-text-1/8": "calc(var(--spacing) / 8)",
      },
      borderRadius: {
        lg: "12px",
        md: "6px",
        sm: "4px",
      },
      aspectRatio: {
        "2/3": "2/3",
      },

      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(340px,1fr))",
        "auto-fit-70px": "repeat(auto-fit, minmax(85px,1fr))",
        "auto-fit-countries": "repeat(auto-fit, minmax(60px,1fr))",
        "auto-fill": "repeat(auto-fill, minmax(288px,1fr))",
        "auto-fill-tile": "repeat(auto-fill, minmax(288px,1fr))",
      },
    },
  },
  plugins: [],
};
