const stats = require('./stats');
const mdlinks = require('./mdlinks');

const cli = (path, options) => {
  if (options.stats === '--stats' && options.validate === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let sValidate = '';
      sValidate += `Total: ${stats.totalStats(data)}\nUniques: ${stats.uniqueStats(data)}\nBroken: ${stats.brokenStats(data)}`;
      return sValidate;
    });
  }
  if (options.stats === '--stats') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let stat = '';
      stat += `Total: ${stats.totalStats(data)}\nUniques: ${stats.uniqueStats(data)}`;
      return stat;
    });
  }
  if (options.stats === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += `${element.file} ${element.href} ${element.statusText} ${element.status} ${element.text} \n`;
      });
      return validate;
    });
  }

  return mdlinks.mdLinks(path, { validate: false }).then((data) => {
    let links = '';
    data.forEach((element) => {
      links += `${element.file} ${element.href} ${element.text} \n`;
    });
    return links;
  });
};
module.exports = { cli };
