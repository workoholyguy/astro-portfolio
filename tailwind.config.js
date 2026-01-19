/* eslint-disable import/no-extraneous-dependencies, global-require */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Near-black backgrounds
        surface: {
          DEFAULT: '#0a0a0a',
          50: '#0d0d0d',
          100: '#111111',
          200: '#1a1a1a',
          300: '#262626',
          400: '#333333',
        },
        // Text colors
        text: {
          DEFAULT: '#fafafa',
          muted: '#a1a1aa',
          subtle: '#71717a',
        },
        // Accent colors - Premium Gold/Amber palette
        accent: {
          primary: '#F59E0B',    // Amber-500 - main accent
          light: '#FCD34D',      // Amber-300 - hover/light states
          dark: '#D97706',       // Amber-600 - darker variant
          orange: '#F97316',     // Orange-500 - gradient end
          // Legacy aliases for compatibility
          cyan: '#F59E0B',
          purple: '#F97316',
          blue: '#D97706',
        },
      },
      backgroundImage: {
        // Premium gradients - Gold/Amber
        'gradient-primary': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(249,115,22,0.1) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        // Mesh gradient for hero backgrounds - warm tones
        'gradient-mesh': `
          radial-gradient(at 40% 20%, rgba(245,158,11,0.12) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(249,115,22,0.10) 0px, transparent 50%),
          radial-gradient(at 10% 80%, rgba(217,119,6,0.08) 0px, transparent 50%)
        `,
        'gradient-mesh-subtle': `
          radial-gradient(at 40% 20%, rgba(245,158,11,0.06) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(249,115,22,0.05) 0px, transparent 50%)
        `,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // Large display headings for hero sections
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        // Section spacing
        'section-sm': '3rem',
        'section': '5rem',
        'section-lg': '8rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.4)',
        'glow-primary': '0 0 40px rgba(245, 158, 11, 0.15)',
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.15)',
        'glow-primary-lg': '0 0 60px rgba(245, 158, 11, 0.25)',
        'glow-orange-lg': '0 0 60px rgba(249, 115, 22, 0.25)',
        // Legacy aliases
        'glow-cyan': '0 0 40px rgba(245, 158, 11, 0.15)',
        'glow-purple': '0 0 40px rgba(249, 115, 22, 0.15)',
        'glow-cyan-lg': '0 0 60px rgba(245, 158, 11, 0.25)',
        'glow-purple-lg': '0 0 60px rgba(249, 115, 22, 0.25)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // Custom plugin for glass effect and gradient text utilities
    plugin(function({ addUtilities, addComponents }) {
      addUtilities({
        // Glass morphism effect
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-strong': {
          'background': 'rgba(255, 255, 255, 0.08)',
          'backdrop-filter': 'blur(24px)',
          '-webkit-backdrop-filter': 'blur(24px)',
          'border': '1px solid rgba(255, 255, 255, 0.15)',
        },
        // Gradient text - Gold/Amber
        '.text-gradient': {
          'background': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-gradient-reverse': {
          'background': 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        // Border gradient (for cards)
        '.border-gradient': {
          'position': 'relative',
          '&::before': {
            'content': '""',
            'position': 'absolute',
            'inset': '0',
            'padding': '1px',
            'border-radius': 'inherit',
            'background': 'linear-gradient(135deg, rgba(245,158,11,0.5), rgba(249,115,22,0.5))',
            '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            '-webkit-mask-composite': 'xor',
            'mask-composite': 'exclude',
            'pointer-events': 'none',
          },
        },
      });

      addComponents({
        // Glass card with hover
        '.glass-card': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '1rem',
          'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.08)',
            'border-color': 'rgba(255, 255, 255, 0.2)',
            'transform': 'translateY(-2px)',
            'box-shadow': '0 12px 48px rgba(0, 0, 0, 0.4)',
          },
        },
        '.glass-card-static': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(20px)',
          '-webkit-backdrop-filter': 'blur(20px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '1rem',
        },
        // Primary button with gradient - Gold/Amber
        '.btn-primary': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'padding': '0.75rem 1.5rem',
          'font-weight': '500',
          'color': '#0a0a0a',
          'background': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
          'border-radius': '0.5rem',
          'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 0 30px rgba(245, 158, 11, 0.4)',
          },
        },
        // Secondary button (ghost/outline)
        '.btn-secondary': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'padding': '0.75rem 1.5rem',
          'font-weight': '500',
          'color': '#fafafa',
          'background': 'transparent',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
          'border-radius': '0.5rem',
          'transition': 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            'background': 'rgba(255, 255, 255, 0.05)',
            'border-color': 'rgba(255, 255, 255, 0.4)',
            'transform': 'translateY(-2px)',
          },
        },
      });
    }),
  ],
};
