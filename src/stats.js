const totalStats = (array) => array.length;
const brokenStats = (array) => array.filter((link) => link.statusText === 'FAIL').length;
const uniqueStats = (array) => {
  const links = [];
  array.forEach((element) => links.push(element.href));
  const uniques = new Set(links);
  return uniques.size;
};
module.exports = { totalStats, brokenStats, uniqueStats };
