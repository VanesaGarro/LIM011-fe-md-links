/* eslint-disable object-shorthand */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const isAbsolute = (ruta) => (path.isAbsolute(ruta));
const getPaths = (ruta) => fs.readdirSync(ruta).map((file) => path.resolve(ruta, file));
console.log(getPaths('C:/Users/Vanesa/Desktop/LIM011-fe-md-links/prueba'));
const isMd = (fileMd) => path.extname(fileMd) === '.md';
const isFile = (file) => fs.statSync(file).isFile();
const isDirectory = (directory) => fs.statSync(directory).isDirectory();
const readFile = (file) => fs.readFileSync(file, 'utf8');
const searchMdFiles = (ruta) => {
  let arrayMd = [];
  if (isFile(ruta)) {
    if (isMd(ruta)) {
      const routeAbsolute = path.resolve(ruta);
      arrayMd = arrayMd.concat(routeAbsolute);
      return arrayMd;
    }
    return [];
  }
  getPaths(ruta).forEach((elemento) => {
    arrayMd = arrayMd.concat(searchMdFiles(elemento));
  });
  return arrayMd;
};
const extraerLinks = (ruta) => {
  const renderer = new marked.Renderer();
  const links = [];
  searchMdFiles(ruta).forEach((file) => {
    renderer.link = (href, title, text) => {
      links.push({ href, text, file });
    };
    marked(readFile(file), { renderer });
  });
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
// console.log(searchMdFiles('C:/Users/Vanesa/Desktop/LIM011-fe-md-links/README.md'));
// console.log(extraerLinks('C:/Users/Vanesa/Desktop/LIM011-fe-md-links/prueba'));
// console.log(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
module.exports = {
  isAbsolute, readFile, isFile, isDirectory, extraerLinks, validateLinks,
};
