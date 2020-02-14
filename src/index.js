/* eslint-disable object-shorthand */
const path = require('path');
const fs = require('fs');
const marked = require('marked');

const isAbsolute = (ruta) => (path.isAbsolute(ruta));
const convertToAbsolute = (ruta) => path.resolve(ruta);
const getPaths = (ruta) => fs.readdirSync(ruta).map((file) => path.resolve(ruta, file));
const isMd = (fileMd) => path.extname(fileMd) === '.md';
const isFile = (file) => fs.statSync(file).isFile();
const readFile = (file) => fs.readFileSync(file, 'utf8');
const searchMdFiles = (ruta) => {
  let arrayMd = [];
  if (isFile(ruta)) {
    if (isMd(ruta)) {
      arrayMd = arrayMd.concat(ruta);
      return arrayMd;
    }
    return [];
  }
  getPaths(ruta).forEach((elemento) => {
    arrayMd = arrayMd.concat(searchMdFiles(elemento));
  });
  return arrayMd;
};
const getLinks = (ruta) => {
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

// eslint-disable-next-line max-len

// console.log(readFile('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
// console.log(readDirectory('prueba'));
// console.log(isMd('README.md'));
// console.log(convertToAbsolute('readme2.md'));
// console.log(isFile('holi.html'));
// console.log(searchMdFiles('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
// console.log(getLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
// console.log(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
module.exports = {
  isAbsolute, readFile, isFile, getLinks, convertToAbsolute, searchMdFiles,
};
