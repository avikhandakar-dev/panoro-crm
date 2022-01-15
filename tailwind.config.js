module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
      cursive: ["Limelight", "cursive"],
      serif: ["B612", "serif"],
    },
    extend: {
      screens: {
        standalone: { raw: "(display-mode:standalone)" },
      },
      colors: {
        primary: {
          50: "#B0D4FB",
          100: "#9DC9F9",
          200: "#76B4F7",
          300: "#509FF5",
          400: "#298AF3",
          500: "#0D75E6",
          600: "#0A5AB1",
          700: "#073F7C",
          800: "#042447",
          900: "#010912",
        },
        secondary: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FEF2DD",
          400: "#FDE2B5",
          500: "#FCD38D",
          600: "#FBBE56",
          700: "#F9A920",
          800: "#DB8C06",
          900: "#362301",
        },
        dark: "#202023",
        light: "#F0E7DB",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.7, 0, 0.3, 1)",
      },
      boxShadow: {
        menu: "0 4px 21px 0 rgb(49 49 49 / 10%)",
        form: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        input: "0 2px 4px 0 rgb(0 0 0 / 6%)",
        blogCard: "0 0 0 1px rgb(0 0 0 / 10%)",
        card: "0 1px 8px 0 rgb(49 49 49 / 10%)",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      translate: ["group-hover"],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0D75E6",
          "primary-focus": "#298AF3",
          "primary-content": "#fff",

          secondary: "#FCD38D",
          "secondary-focus": "#FBBE56",
          "secondary-content": "#A46904",

          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",

          neutral: "#E6F2FD",
          "neutral-focus": "#B1D8F9",
          "neutral-content": "#0D75E6",

          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",

          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
