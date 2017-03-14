# Fable Webpack loader

[![npm](https://img.shields.io/npm/v/fable-compiler-loader.svg)](https://www.npmjs.com/package/fable-compiler-loader)

### Usage

This is a simple Webpack loader that compiles F# code to JavaScript using [Fable](http://fable.io/).

To use it, first install the package:

```bash
$ npm install --save fable-compiler-loader
```

then configure the loader in your Webpack config:

```js
module.exports = {
  // ...
  module: {
    rules: [
      { test: /\.fsx$/, loader: 'babel-loader!fable-compiler-loader' },
      // or to skip the babel-loader requirement
      // { test : /\.fsx$/, loader: 'fable-compiler-loader?ecma=es5&module=commonjs' }
    ]
  }
}
```

### Configuration

Options passed in the loader query will be passed directly to the Fable compiler, with the exception of `outDir` and
`watch`. The available options are [listed here](http://fable.io/docs/compiling.html).

### Example

Check out the [example](example) directory for a simple Hello World example.
