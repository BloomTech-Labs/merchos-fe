const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    config.node = { fs: 'empty' };
    config.plugins = config.plugins || [];

    config.plugins = [...config.plugins];

    return config;
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  }
};
