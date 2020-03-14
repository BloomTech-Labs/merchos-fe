const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withImages = require('next-images')

module.exports = withImages({
  
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
})
