/* eslint-disable max-len */

const fetch = require('node-fetch');
const index = require('../src/index');

const validateLinks = (ruta) => {
  const arrayValidate = [];
  const arraylinks = index.getLinks(ruta);
  arraylinks.forEach((el) => {
    const obj = { ...el };
    arrayValidate.push(fetch(el.href)
      .then((res) => {
        if ((res.status >= 200) && (res.status <= 399)) {
          obj.status = res.status;
          obj.statusText = 'OK';
          return obj;
        }
        obj.status = res.status;
        obj.statusText = 'FAIL';
        return obj;
      })
      .catch(() => {
        obj.status = 'No tiene Status';
        obj.statusText = 'FAIL';
        return obj;
      }));
  });
  return Promise.all(arrayValidate);
};
// Promise.all(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba')).then((res) => console.log(res));
(validateLinks('C:/Users/Vanesa/Desktop/LIM011-fe-md-links/prueba')).then((res) => console.log(res));
module.exports = { validateLinks };
