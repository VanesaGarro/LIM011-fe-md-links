const validateLinks = require('./validate');
const index = require('./index');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absRoute = index.convertToAbsolute(path);
  if (options.validate === true) {
    resolve(validateLinks.validateLinks(absRoute));
    console.log('pusiste true');
  } else if (!options.validate) {
    resolve(index.getLinks(absRoute));
    console.log('nadaa');
  }
});

module.exports = { mdLinks };
