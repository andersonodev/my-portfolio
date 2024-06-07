/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  // Define os caminhos onde o Tailwind CSS procurará por arquivos para analisar classes.
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}",
  ],

  // Ativa o modo Just-in-Time (JIT) para compilar somente o CSS necessário, melhorando o desempenho.
  mode: "jit",

  // Define uma sombra de caixa personalizada para uso em elementos específicos, proporcionando uma estética refinada.
  boxShadow: {
    card: "0px 35px 120px -15px #211e35",
  },

  // Define tamanhos de tela personalizados para atender às necessidades de layout responsivo.
  screens: {
    xs: "450px",
  },

  // Estende o tema com definições adicionais, como gradientes de fundo radial e cônico, para um design mais elaborado.
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    // Personaliza a paleta de cores para refletir a identidade visual do projeto, incluindo tons primários, secundários e outros.
    colors: {
      ...colors,
      primary: colors.blue,
      primaryOne: "#050816",
      secondary: colors.purple,
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      sky: require('tailwindcss/colors').sky, // Substitui lightBlue
      stone: require('tailwindcss/colors').stone, // Substitui warmGray
      neutral: require('tailwindcss/colors').neutral, // Substitui trueGray
      gray: require('tailwindcss/colors').gray, // Substitui coolGray
      slate: require('tailwindcss/colors').slate,  // Substitui blueGray
    },
  }, 

  // Especifica qualquer plugin adicional do Tailwind CSS a ser usado, permitindo a expansão de funcionalidades conforme necessário.
  plugins: [],
};
