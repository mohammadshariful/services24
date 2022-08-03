/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#025B5D",

          secondary: "#24f4a5",

          accent: "#b2f7a0",

          neutral: "#1F1C2C",

          "base-100": "#F5F6F9",

          info: "#1F54E5",

          success: "#168D7D",

          warning: "#CB7315",

          error: "#F41A4D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
