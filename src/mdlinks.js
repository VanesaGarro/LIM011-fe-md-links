const validateLinks = require('./validate.js');
const index = require('./index.js');

const mdLinks = (path, options) => new Promise((resolve) => {
  const absRoute = index.convertToAbsolute(path);
  console.log(absRoute);
  if (options.validate === true) {
    resolve(validateLinks.validateLinks(absRoute));
    // console.log('pusiste true');
  } else if (options.validate === false) {
    resolve(index.getLinks(path));
    // console.log('nadaa');
  }
});

// eslint-disable-next-line max-len
// (mdLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba',{validate:true}).then((res) => console.log(res)));

module.exports = { mdLinks };
