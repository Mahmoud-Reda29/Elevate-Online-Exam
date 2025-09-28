import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        "geist-mono": "var(--font-geist-mono)",
      },
      boxShadow: {
        custom: "0px 6px 13.1px 4px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        red: {
          "50": "#FEF2F2",
          "100": "#FEE2E2",
          "200": "#FECACA",
          "300": "#FCA5A5",
          "400": "#F87171",
          "500": "#EF4444",
          "600": "#DC2626",
          "700": "#B91C1C",
          "800": "#991B1B",
          "900": "#7F1D1D",
          "950": "#450A0A",
        },
        blue: {
          "50": "#EFF6FF",
          "100": "#DBEAFE",
          "200": "#BEDBFF",
          "300": "#8EC5FF",
          "400": "#50A2FF",
          "500": "#2B7FFF",
          "600": "#155DFC",
          "700": "#1447E6",
          "800": "#193CB8",
          "900": "#1C398E",
          "950": "#162456",
        },
        emerald: {
          "50": "#ECFDF5",
          "100": "#D1FAE5",
          "200": "#A4F4CF",
          "300": "#5EE9B5",
          "400": "#00D492",
          "500": "#00BC7D",
          "600": "#009966",
          "700": "#007A55",
          "800": "#006045",
          "900": "#004F3B",
          "950": "#002C22",
        },
        gray: {
          "50": "#F9FAFB",
          "100": "#F3F4F6",
          "200": "#E5E7EB",
          "250": "#EFF6FFBF",
          "300": "#CBD5E1",
          "400": "#9CA3AF",
          "500": "#6B7280",
          "600": "#4B5563",
          "700": "#374151",
          "800": "#1F2937",
          "900": "#111827",
          "950": "#030712",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default config;
