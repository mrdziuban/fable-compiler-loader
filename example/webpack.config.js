module.exports = {
  entry: './src/HelloWorld.fsx',
  output: { filename: 'bundle.js' },
  module: {
    rules: [
      { test: /\.fsx$/, loader: 'fable-compiler-loader' }
    ]
  }
}
