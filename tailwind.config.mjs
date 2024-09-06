/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  screens: {
		sm: '480px',
		md: '768px',
		lg: '976px',
		xl: '1440px',
	  },
	  colors: {
		"dark": "hsla(0,0%,5%,1)",
		"white": "hsla(0, 100%, 100%)",
		"accent-dark": "hsl(173, 100%, 50%)",
		"accent-light": "hsl(173, 100%, 75%)",
		"accent-alternative": "hsl(36, 100%, 52%)",
		"translucent-white-005": "rgba(255, 255, 255, .05)",
		"translucent-white-020": "rgba(255, 255, 255, .2)",
		"translucent-white-050": "rgba(255, 255, 255, .5)",
		"dark-gray": "rgba(255, 255, 255, .1)",
		"transparent": "transparent",
	  },
	  fontFamily: {
		sans: ['Satoshi-Variable', 'sans-serif'],
	  },
	  extend: {
		spacing: {
		  '128': '32rem',
		  '144': '36rem',
		},
		borderRadius: {
		  '4xl': '2rem',
		},
		backgroundImage: {
		  'gradient-linear-accent': "linear-gradient(0deg, hsla(173, 100%, 50%, .7) 0%, hsla(173, 100%, 50%, 1) 100%)",
		  'gradient-radial-accent': "radial-gradient(circle, hsl(0, 0%, 5%) 83%, hsl(274, 100%, 50%) 100%)",
		  'gradient-linear-white': "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .8) 100%)",
		  'gradient-linear-translucent': "linear-gradient(0deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .1) 100%)",
		},
		fontSize: {
		  'claim-xl': 'clamp(4rem, 13vw, 10rem)',
		  'claim-l': 'clamp(2rem, 6vw, 6rem)',
		  'claim': 'clamp(1.5rem, 3vw, 2rem)',
		},
		boxShadow: {
			'glow': '0px 0px 25px 0px rgba(0,255,213,0.8)',
			'glow-invisible': '0px 0px 25px 0px rgba(0,255,213,0)'
		}
	  }
	}
  }
