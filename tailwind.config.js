/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "brand-black":"#101928",
        "brand-orange":"#F56630",
        "brand-gray":"#475367",
        "brand-brown":"#292424"
      },
      backgroundImage: {
        "bg-top":"url('/assets/images/bg-top.png')",
        "bg-left":"url('/assets/images/left.png')",
        "bg-delivery":"url('/assets/images/delivery.png')",
        "experience-left":"url('/assets/images/korean.png')",
        "experience-right-top":"url('/assets/images/children.png')",
        "experience-right-bot":"url('/assets/images/boot.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
