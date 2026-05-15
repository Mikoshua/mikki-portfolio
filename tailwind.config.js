/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        cream: "#FDF9F7",
        ink: "#1A1410",
        ash: "#6B5A52",
        smoke: "#B8A99F",
        rose: "#C97D96",
        rosedust: "#F2C4CE",
        sage: "#7A9B6A",
        sageleaf: "#B8C9A3",
        cocoa: "#8B6F5E",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1.2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
