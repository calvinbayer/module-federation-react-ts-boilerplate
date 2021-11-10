import * as HtmlWebPackPlugin from "html-webpack-plugin";
import { container } from "webpack";
import { dependencies } from "./package.json";

const { ModuleFederationPlugin } = container;

export default {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8081,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
