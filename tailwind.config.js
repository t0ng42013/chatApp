/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        subHeading: "#9241c8",
        chatLeft: "#AD90C6",
        bgChatLeft: '#EDE5F4',
        chatRight: "#6e5d7e",
        placeholderText: "#c6cacd",
        mainHeading: "#3e2753",
        paragraph: "#a39daa",
        degLightMagenta: "#e942ff",
        degLightViolet: "#8838ff",
        bgApp: "#f5f3f7",
        bgButton: "#3e2753",
        radioButtonOutline: "#e570ff",
      },
     fontFamily: {
      'Rubik':['Rubik', 'sans-serif']
     },
    },
  },
  plugins: [],
};
