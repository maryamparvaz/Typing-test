/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
                "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
                // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
                extend: {
                        backgroundImage: {
                                "gradient-radial":
                                        "radial-gradient(var(--tw-gradient-stops))",
                                "gradient-conic":
                                        "linear - gradient(to right, #2980b9, #6dd5fa, #ffffff)",
                                hero: "url('imgs/2.jpg')",
                                hero1: "url('imgs/1.jpg')",
                        },
                        fontFamily: {
                                all: "allbody",
                        },
                        colors: {
                                white1: "rgba(255, 255, 255, 0.594)",
                                black1: "rgba(0, 0, 0, 0.469)",
                                blue1: "rgb(37, 65, 81)",
                        },
                },
        },

        plugins: [],
};
