import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ash: {
          bg: "#080808",
          orange1: "#ff9f2e",
          orange2: "#ff7a1a",
          text: "#f7f7f7",
          text2: "#a0a0a0",
        },
      },
      backgroundImage: {
        "ash-gradient": "linear-gradient(135deg, #ff9f2e, #ff7a1a)",
      },
      boxShadow: {
        ember: "0 8px 30px -8px rgba(255,122,26,0.55)",
        "ember-lg": "0 40px 120px -20px rgba(255,122,26,0.35)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        rise: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "8%": { opacity: "0.9" },
          "92%": { opacity: "0.4" },
          "100%": { transform: "translateY(-105vh) translateX(-20px)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
