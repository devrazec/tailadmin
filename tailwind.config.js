module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          25: "#f5f8ff",
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          900: "#0f172a"
        },
        autopad: {
          cyan: "#22d3ee",
          blue: "#2563eb",
          ink: "#0b1220"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
        glow: "0 24px 80px rgba(37, 99, 235, 0.22)"
      }
    }
  },
  plugins: []
};
