const totalStats = (array) => array.length;
// console.log(totalStats(arrayp));
const brokenStats = (array) => array.filter((link) => link.statusText === 'FAIL').length;
// console.log(brokenStats(arrayp));
const uniqueStats = (array) => {
  const set = new Set(array);
  return Array.from(set);
};
// console.log(uniqueStats(arrayp));

// const uniqueStats = (array) => {
// const set = new Set(array);
// return console.log(Array.from(set).length);
// };

// console.log(uniqueStats(arrayp));

module.exports = { totalStats, brokenStats, uniqueStats };
