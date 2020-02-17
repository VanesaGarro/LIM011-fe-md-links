const stats = require('./stats');
const mdlinks = require('./mdlinks');

const cli = (path, options) => {
  if (options.validate === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let validate = '';
      data.forEach((element) => {
        validate += `${element.file} ${element.href} ${element.statusText} ${element.status} ${element.text} \n`;
      });
      return validate;
    });
  } if (options.validate === '--stats') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let stat = '';
      stat += `Total: ${stats.totalStats(data)}\n Uniques: ${stats.uniqueStats(data)} \n`;
      return stat;
    });
  }
  if (options.stats === '--stats' && options.validate === '--validate') {
    return mdlinks.mdLinks(path, { validate: true }).then((data) => {
      let sValidate = '';
      sValidate += `Total: ${stats.totalStats(data)}\n Uniques: ${stats.uniqueStats(data)}\n Broken: ${stats.brokenStats(data)}`;
      return sValidate;
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
