import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#3B82F6",
        background: "#F9FAFB",
        foreground: "#111827",

        primary: {
          DEFAULT: "#1A0F3C",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF4A17",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        accent: {
          DEFAULT: "#FF4A17",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        // Custom colors from the spec
        "brand-primary": "#1A0F3C",
        "brand-accent": "#FF4A17",
        "brand-blue": "#3B82F6",
        "brand-whatsapp": "#25D366",
        "text-primary": "#111827",
        "text-secondary": "#374151",
        "text-muted": "#6B7280",
        "border": "#E5E7EB",
        "border-strong": "#D1D5DB",
        "surface": "#FFFFFF",
        "surface-soft": "#F9FAFB",
        "surface-muted": "#F3F4F6",
        "surface-accent": "#FFF7ED",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;