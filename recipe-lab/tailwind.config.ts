import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        fadedGreen: "#F5F6EA",
        lightGreen: "#2E8B57",
        lightOrange: "#FF7F50",
        neonGreen: "#98FF98",
        charcoal: "#5D4F4A",
      },
    },
  },
  plugins: [],
};

export default config;
