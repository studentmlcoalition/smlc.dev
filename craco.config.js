module.exports = {
  babel: {
    plugins: [
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator",
    ],
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: [">0.2%", "not dead", "not op_mini all"],
          },
        },
      ],
    ],
  },
  webpack: {
    configure: (webpackConfig) => {
      // Ensure that node_modules are transpiled when they contain modern syntax
      webpackConfig.module.rules[1].oneOf[2].exclude =
        /node_modules\/(?!(@tanstack)\/).*/;
      return webpackConfig;
    },
  },
  style: {
    postcss: {
      plugins: [
        require("tailwindcss")("./src/css/tailwind.config.js"),
        require("autoprefixer"),
      ],
    },
  },
};
