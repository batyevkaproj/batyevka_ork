import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  safelist: [
    'from-[#3E3D39]',
    'from-[#333A4C]',
    'from-[#523F94]',
    'from-[#1E3230]',
    'from-[#1E2632]',
    'to-[#1B211F]',
    'to-[#25283B]',
    'to-[#1D3032]',
    'to-[#203D39]',
    'to-[#202C3D]',
    'bg-[#303030]',
    'bg-[#323A4B]',
    'bg-[#33365A]',
    'bg-[#1E3331]',
    'bg-[#1E2734]',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "77cc": "1770px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "easyspin": {    
          '0%':   {left: '0px', top: '0px'},
          '25%':  {left: '200px', top: '0px'},
          '50%':  {left: '200px', top: '200px'},
          '75%': {left: '0px', top: '200px'},
          '100%': {left: '0px', top: '0px'},
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "rightslide": {
          '0%' :{ transform: "translateX(0%)"},
          '100%' :{ transform: "translateX(65%)"},
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "easyspin": "easyspin 4s linear infinite",
        "wiggle": "wiggle 200ms ease-in-out",
        "slide": "rightslide 500ms ease-in-out forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config


export default config