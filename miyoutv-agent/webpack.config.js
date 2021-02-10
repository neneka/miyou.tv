const path = require('path');

const agentConfig = {
  entry: {
    'miyoutv-agent': path.join(__dirname, 'src/miyoutv-agent.js'),
    'tools/servicelist': path.join(__dirname, 'src/servicelist.js'),
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].js',
  },
  target: 'node',
  node: false,
};

module.exports = agentConfig;
