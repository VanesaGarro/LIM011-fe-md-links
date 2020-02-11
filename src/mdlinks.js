const validateLinks = require('./validate');
const index = require('./index');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absRoute = index.convertToAbsolute(path);
  if (options.validate === true) {
    resolve(validateLinks.validateLinks(absRoute));
    console.log('pusiste true');
  } if (options.validate === undefined) {
    resolve(index.getLinks(absRoute));
    console.log('nadaa');
  }
});

// eslint-disable-next-line max-len
// console.log(mdLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba', { validate: undefined }));

module.exports = { mdLinks };
