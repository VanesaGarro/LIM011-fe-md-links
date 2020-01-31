const path = require('path');
const fs = require('fs');
const marked = require('marked');

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
const markdownLinkExtractor = (markdown) => {
  const links = [];
  const renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    links.push(href, text);
  };
  marked(markdown, { renderer });

  return links;
};
const searchMdFiles = (ruta) => {
  let arrayMdFiles = [];
  if (isFile(ruta) === true) {
    if (isMd(ruta) === true) {
      const read = readFile(ruta);
      const linkmd = markdownLinkExtractor(read);
      arrayMdFiles.push(linkmd);
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

// console.log(readFile('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
// console.log(readDirectory('prueba'));
// console.log(isMd('README.md'));
// console.log(convertToAbsolute('readme2.md'));
// console.log(isFile('holi.html'));
// console.log(isDirectory('prueba'));
console.log(searchMdFiles('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md'));
module.exports = {
  isAbsolute, convertToAbsolute, readFile, readDirectory, isFile, isDirectory,
};
