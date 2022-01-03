const preprocess = require("svelte-preprocess");

const config = {
  preprocess: [
    preprocess({
      scss: {},
    }),
  ],
};

module.exports = config;
