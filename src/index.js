/* eslint-disable object-shorthand */
const marked = require('marked');
const fs = require('fs');

const extraerLinks = ([arrayMd]) => {
  const readfile = fs.readFileSync(arrayMd, 'utf8');
  const arrayLinks = [];
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    arrayLinks.push({ href: href, text: text, file: arrayMd });
  };
  marked(readfile, { renderer });

  return arrayLinks;
};
module.exports = { extraerLinks };
console.log(extraerLinks(['/home/vanesa/Escritorio/LIM011-fe-md-links/README.md']));
