/* eslint-disable object-shorthand */
const marked = require('marked');
const fs = require('fs');

const extraerLinks = (arrayMd) => {
  arrayMd.forEach((element) => {
    const readfile = fs.readFileSync(element, 'utf8');
    arrayMd.push(readfile);
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      arrayMd.push({ href: href, text: text, path: element });
    };
    marked(readfile, { renderer });
  });
  return arrayMd;
};


module.exports = { extraerLinks };
console.log(extraerLinks(['/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/carpeta2/read.md',
  '/home/vanesa/Escritorio/LIM011-fe-md-links/prueba/probando.md']));
// console.log(probar(['a', 'b', 'c']));
