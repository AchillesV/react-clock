const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override() {
  config = injectBabelPlugin(['style-jsx/babel', config]);
  return config;
};