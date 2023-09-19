/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        main: "#2271E9",
        secondary: "#F1F7FF",
        footer: "#1E242D",
      },

      backgroundImage: {
        "hero-pattern": "url('/images/hero.png')",
      },
    },

    fontFamily: {
      popins: ["Poppins"],
    },

    screens: {
      sm: "640px", // => @media (min-width: 640px)
      md: "768px", // => @media (min-width: 768px)
      lg: "1024px", // => @media (min-width: 1024px)
      xl: "1124px", // => @media (min-width: 1280px)
      "2xl": "1480px", // => @media (min-width: 1280px)
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
