const through = require('through2');

module.exports = options => through.obj( (vinylFile, enconding, callback) => {
    const transformedFile = vinylFile.clone();

    const [previousURL, nextURL] = options.replace;

    const data = transformedFile.contents.toString('utf-8').split('\n');

    const converted = data.map( line => {
        return line.replace(previousURL, nextURL)
    }).join('\n')

    transformedFile.contents = Buffer.from(converted)

    callback(null, transformedFile);
})