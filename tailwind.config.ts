
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				curio: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
				cosmic: {
					dark: '#070B14',
					blue: '#1E3A8A',
					purple: '#7E22CE',
					cyan: '#0891B2',
					accent: '#8B5CF6',
					highlight: '#00CCFF',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1',
					},
					'50%': {
						opacity: '0.8',
					},
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0',
					},
					'100%': {
						backgroundPosition: '200% 0',
					},
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.6',
						transform: 'scale(1)',
					},
					'50%': {
						opacity: '1',
						transform: 'scale(1.05)',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to bottom, rgba(7, 11, 20, 0.7), rgba(7, 11, 20, 0.9)), url("/hero-bg.jpg")',
				'curio-gradient': 'linear-gradient(135deg, #070B14 0%, #0F1A2A 100%)',
				'cosmic-gradient': 'linear-gradient(to bottom right, #0F1A2A, #070B14)',
				'feature-gradient': 'linear-gradient(to bottom right, #1E293B, #0F172A)',
				'glass-gradient': 'linear-gradient(to bottom right, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.7))',
				'glow-blue': 'radial-gradient(circle at center, #3B82F6 0%, transparent 70%)',
				'glow-purple': 'radial-gradient(circle at center, #8B5CF6 0%, transparent 70%)',
				'glow-cyan': 'radial-gradient(circle at center, #06B6D4 0%, transparent 70%)',
				'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.2) 25%, rgba(139, 92, 246, 0.2) 50%, rgba(59, 130, 246, 0.2) 75%, transparent 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
