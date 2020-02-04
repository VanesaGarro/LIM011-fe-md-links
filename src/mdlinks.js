/* eslint-disable object-shorthand */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const isAbsolute = (ruta) => (path.isAbsolute(ruta));
const readDirectory = (directory) => fs.readdirSync(directory);
const isMd = (fileMd) => path.extname(fileMd) === '.md';
const isFile = (file) => fs.statSync(file).isFile();
const isDirectory = (directory) => fs.statSync(directory).isDirectory();
const convertToAbsolute = (ruta) => {
  if (isAbsolute(ruta) === true) {
    return ruta;
  }
  return path.resolve(ruta);
};
const readFile = (file) => fs.readFileSync(file, 'utf8');
const searchMdFiles = (ruta) => {
  let arrayMdFiles = [];
  if (isFile(ruta) === true) {
    if (isMd(ruta) === true) {
      arrayMdFiles.push(ruta);
    }
  } else {
    readDirectory(ruta).forEach((element) => {
      const rutaAbsoluta = path.join(ruta, element);
      const rutaMds = (searchMdFiles(rutaAbsoluta));
      arrayMdFiles = arrayMdFiles.concat(rutaMds);
    });
  }
  return arrayMdFiles;
};
const extraerLinks = (ruta) => {
  const links = [];
  const rutaleida = readFile(ruta);
  const r = (searchMdFiles(ruta));
  r.forEach((element) => {
    console.log(element);
  });
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    links.push({ href: href, text: text, file: ruta });
  };
  marked(rutaleida, { renderer: renderer });
  return links;
};
const validateLinks = (ruta) => {
  const array = [];
  extraerLinks(ruta).forEach((element) => {
    fetch(element.href)
      .then((response) => {
        if ((response.status >= 200) && (response.status <= 399)) {
          array.push({
            status: response.status,
            message: 'OK',
          });
        } else {
          array.push({
            status: response.status,
            message: 'FAIL',
          });
        }
        console.log(array);

        return array;
      });
  });
};
// console.log(readFile('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
// console.log(readDirectory('prueba'));
// console.log(isMd('README.md'));
// console.log(convertToAbsolute('readme2.md'));
// console.log(isFile('holi.html'));
// console.log(isDirectory('prueba'));
// console.log(searchMdFiles('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
console.log(extraerLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
console.log(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
module.exports = {
  isAbsolute, convertToAbsolute, readFile, readDirectory, isFile, isDirectory,
};
