const path = require('path');
const fs = require('fs');
const marked = require('marked');

const isAbsolute = (route) => (path.isAbsolute(route));
const convertToAbsolute = (route) => path.resolve(route);
const getPaths = (route) => fs.readdirSync(route).map((file) => path.resolve(route, file));
const isMd = (fileMd) => path.extname(fileMd) === '.md';
const isFile = (file) => fs.statSync(file).isFile();
const readFile = (file) => fs.readFileSync(file, 'utf8');
const searchMdFiles = (route) => {
  let arrayMd = [];
  if (isFile(route)) {
    if (isMd(route)) {
      arrayMd = arrayMd.concat(route);
      return arrayMd;
    }
    return [];
  }
  getPaths(route).forEach((elemento) => {
    arrayMd = arrayMd.concat(searchMdFiles(elemento));
  });
  return arrayMd;
};
const getLinks = (route) => {
  const renderer = new marked.Renderer();
  const links = [];
  searchMdFiles(route).forEach((file) => {
    renderer.link = (href, title, text) => {
      links.push({ href, text, file });
    };
    marked(readFile(file), { renderer });
  });
  return links;
};
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
