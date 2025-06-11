import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // MSL Brand Colors
        "msl-navy": "#1B245B",
        "msl-orange": "#FB942C",
        "msl-brown": "#98643C",
        "msl-dark-brown": "#6D4B3F",
        "msl-light-brown": "#865C3E",
        "msl-blue": "#B1733A",
        "msl-dark-blue": "#253460",
        "msl-purple": "#473542",
        "msl-dark-purple": "#302A48",
        "msl-black": "#181834",

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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin-reverse 12s linear infinite",
        orbit: "orbit 4s linear infinite",
        "orbit-reverse": "orbit-reverse 6s linear infinite",
        "orbit-slow": "orbit 10s linear infinite",
        float: "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out infinite 1.5s",
        twinkle: "twinkle 2s ease-in-out infinite",
        "twinkle-delayed": "twinkle 2s ease-in-out infinite 1s",
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
        "spin-reverse": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(64px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(64px) rotate(-360deg)",
          },
        },
        "orbit-reverse": {
          "0%": {
            transform: "rotate(360deg) translateX(64px) rotate(-360deg)",
          },
          "100%": {
            transform: "rotate(0deg) translateX(64px) rotate(0deg)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translateY(-10px)",
            opacity: "0.6",
          },
        },
        twinkle: {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
