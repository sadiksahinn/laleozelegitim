import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./data/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { cream: "#fbf7ef", sage: "#7e9b76", lilac: "#8a6fa8", gold: "#c8a85a", ink: "#253026" }, boxShadow: { soft: "0 24px 80px rgba(37,48,38,.12)" } } }, plugins: [] };
export default config;
