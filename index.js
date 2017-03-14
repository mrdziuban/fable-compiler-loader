const fs = require('fs');
const fable = require('fable-compiler');
const loaderUtils = require('loader-utils');
const path = require('path');

module.exports = function(source) {
  const callback = this.async();
  const fname = path.basename(this.resourcePath, '.fsx');

  // Load options and delete some that shouldn't be specified
  const opts = loaderUtils.getOptions(this) || {};
  delete opts.outDir;
  delete opts.watch;

  fable.compile(Object.assign({}, opts, { projFile: this.resourcePath })).then(() => {
    callback(null, fs.readFileSync(path.join(this.context, `${fname}.js`), 'utf8').toString());
  }).catch(e => callback(e, null));
};
