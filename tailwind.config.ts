import type { Config } from "tailwindcss";

declare const require: (id: string) => any;

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
        ring: "#8B7CFF",
        background: "#FFFFFF",
        foreground: "#111827",

        primary: {
          DEFAULT: "#8B7CFF",
          foreground: "#FFFFFF",
          50: "#F3F0FF",
          100: "#E8E4FF",
          200: "#D4CCFF",
          300: "#B8A4FF",
          400: "#9B8CFF",
          500: "#8B7CFF",
          600: "#6D5AE6",
          700: "#5543C4",
          800: "#3D2B8C",
          900: "#1A0F3C",
          950: "#07041A",
        },
        secondary: {
          DEFAULT: "#07041A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#B8A4FF",
          foreground: "#07041A",
          50: "#F3F0FF",
          100: "#E8E4FF",
          200: "#D4CCFF",
          300: "#B8A4FF",
          400: "#9B8CFF",
          500: "#8B7CFF",
          600: "#6D5AE6",
          700: "#5543C4",
          800: "#3D2B8C",
          900: "#1A0F3C",
          950: "#07041A",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111827",
        },
        "brand-primary": "#8B7CFF",
        "brand-secondary": "#07041A",
        "brand-accent": "#B8A4FF",
        "brand-navy": "#0B0618",
        "brand-blue": "#3D2B8C",
        "brand-purple": "#8B7CFF",
        "brand-gold": "#B8A4FF",
        "brand-orange": "#9B8CFF",
        "brand-whatsapp": "#25D366",
        "text-primary": "#111827",
        "text-secondary": "#4B5563",
        "text-muted": "#6B7280",
        "border-light": "#E5E7EB",
        "border-medium": "#D1D5DB",
        "surface": "#FFFFFF",
        "surface-soft": "#F7F5FF",
        "surface-muted": "#EEEBFF",
        "surface-accent": "#E8E4FF",
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