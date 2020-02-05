/* eslint-disable object-shorthand */
const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const isAbsolute = (ruta) => (path.isAbsolute(ruta));
const getPaths = (ruta) => fs.readdirSync(ruta).map((file) => path.resolve(ruta, file));
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
  const arr = [];
  extraerLinks(ruta).forEach((el) => {
    const obj = el;
    arr.push(fetch(el.href)
      .then((res) => {
        obj.status = res.status;
        obj.statusText = res.statusText;
        return obj;
      }));
  });
  return arr;
};
Promise.all(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba')).then((res) => console.log(res)).catch((error) => console.log(`Error in promises ${error}`));
// console.log(readFile('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
// console.log(readDirectory('prueba'));
// console.log(isMd('README.md'));
// console.log(convertToAbsolute('readme2.md'));
// console.log(isFile('holi.html'));
// console.log(isDirectory('prueba'));
// console.log(searchMdFiles('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
// console.log(extraerLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
// console.log(validateLinks('/home/vanesa/Escritorio/LIM011-fe-md-links/prueba'));
module.exports = {
  isAbsolute, readFile, isFile, isDirectory, extraerLinks, validateLinks,
};
