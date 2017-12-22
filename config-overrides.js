const {injectBabelPlugin} = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    actions: path.join(process.cwd(), './src/actions'),
    components: path.join(process.cwd(), './src/components'),
  };

  return config;
};