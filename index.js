const fs = require('fs');
const fable = require('fable-compiler');
const path = require('path');

module.exports = function(source) {
  const callback = this.async();
  const fname = path.basename(this.resourcePath, '.fsx');
  fable.compile({ projFile: this.resourcePath, sourceMap: 'inline' }).then(() => {
    callback(null, fs.readFileSync(path.join(this.context, `${fname}.js`), 'utf8').toString());
  }).catch(e => callback(e, null));
};
