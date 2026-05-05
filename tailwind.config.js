/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // OWIN Brand Palette
        green: {
          olive:   "#6B7C3A",  // deep olive — grounding, earthy
          mid:     "#4A8C3F",  // mid forest green — primary brand
          bright:  "#72C14B",  // bright accent green — CTAs, highlights
          light:   "#D6EDCB",  // soft mint tint — backgrounds
          dark:    "#1E3A1A",  // near-black green — headings on light bg
        },
        neutral: {
          50:  "#F8F8F6",
          100: "#EFEFEB",
          200: "#DDDDD7",
          400: "#9A9A90",
          600: "#5C5C55",
          800: "#2A2A24",
          900: "#141410",
        },
        earth: {
          sand:   "#F2EDE4",   // warm off-white — page backgrounds
          clay:   "#C4A882",   // warm accent — pairs with green
        },
      },
      fontFamily: {
        // Display: bold, mission-driven headings
        display: ["'Playfair Display'", "Georgia", "serif"],
        // Body: clean, readable, accessible
        body:    ["'DM Sans'", "sans-serif"],
        // Accent: small caps, labels
        label:   ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.8rem, 6vw, 5rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)",  { lineHeight: "1.15" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        section: "5rem",   // consistent vertical section padding
        "section-lg": "8rem",
      },
      maxWidth: {
        content: "1200px",
        narrow:  "760px",
      },
      borderRadius: {
        card: "1rem",
        pill: "9999px",
      },
      boxShadow: {
        card:   "0 2px 16px rgba(30, 58, 26, 0.08)",
        "card-hover": "0 8px 32px rgba(30, 58, 26, 0.16)",
        cta:    "0 4px 24px rgba(74, 140, 63, 0.35)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
