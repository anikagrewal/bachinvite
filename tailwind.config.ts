import { color } from "framer-motion";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lora': ['lora', 'sans-serif'],
      },
     colors: {
        'light' : '#940505',
      background: {
        DEFAULT: '#ffffff',
        dark: '#000000',
        'light-cream' : '#940505',
      },
      text: {
        DEFAULT: '#000000',
        dark: '#ffffff',
      },
     },
     fontSize: {
      base: '16px',
      'lbase': '18px',
      'h1': '36px',
      'h2':'28px',
        'h4':'20px',
        'th1': '58px',
        'tbase': '24px',
        'wh1': '48px',
        'wh2': '32px',
     },
     height: {
      header: '40rem',
      head: '45rem',
      imgH: '70rem',
      siteH: '50rem',
      vidH: '30rem',
      pageH: '30rem',
      headerH: "50rem",
      phH: '32rem',
      whl: '20rem',
      logo:'55rem',

     },
     width: {
      imgW: '40rem',
      textW: '25rem',
      siteW: '65rem',
      pW: '90rem',
      vidW: '45rem',
      pageW: '55rem',
      phW: '110rem',
      logoW: '10rem',
       logo:'55rem',
     },
     padding: {
      headP: '80rem'
     }
    },
  },
  plugins: [],
};
export default config;
