const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot: true,
    open: true,
    port: 3677,
  },
});
