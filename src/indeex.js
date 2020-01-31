
const marked = require('marked');

const markdownLinkExtractor = (markdown) => {
  const links = [];
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {
    links.push({ href, text });
  };
  marked(markdown, { renderer });

  return links;
};
const fs = require('fs');

const markdown = fs.readFileSync('/home/vanesa/Escritorio/LIM011-fe-md-links/README.md').toString();

const links = markdownLinkExtractor(markdown);

links.forEach((link) => {
  console.log(link);
});
module.exports = { markdownLinkExtractor };
