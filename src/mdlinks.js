const validateLinks = require('./validate.js');
const index = require('./index.js');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absRoute = index.convertToAbsolute(path);
  if (options.validate === true) {
    resolve(validateLinks.validateLinks(absRoute));
  } else if (options.validate === false) {
    resolve(index.getLinks(absRoute));
  }
});

// eslint-disable-next-line max-len
// (mdLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba',{validate:true}).then((res) => console.log(res)));

module.exports = { mdLinks };
