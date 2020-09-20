const through = require('through2');

module.exports = function (sourceDir = "") {

  return through.obj(function (vinylFile, encoding, callback) {
    var transformedFile = vinylFile.clone();

    const folder = sourceDir ? `${sourceDir}/` : "";

    const splitted = transformedFile.contents.toString('utf-8').split('\n')

    const pattern = /(\.\.?\/)+/;

    transformedFile.contents = Buffer.from(splitted.map( element => element.replace(pattern, folder)).join('\n'))

    callback(null, transformedFile);
  });
}