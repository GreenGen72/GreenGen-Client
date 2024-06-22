const path = require("path");

module.exports = {
  entry: "./src/PaginaDoProduto.tsx", // Ponto de entrada do seu aplicativo TypeScript
  output: {
    filename: "bundle.js", // Nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // Caminho onde o bundle será gerado
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
