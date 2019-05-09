const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
   'bundle.js': [
     path.resolve(__dirname, 'src/project.js'),
     path.resolve(__dirname, 'src/task.js'),
     path.resolve(__dirname, 'src/hideButtons.js'),
     path.resolve(__dirname, 'src/index.js'),
   ]
 },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
