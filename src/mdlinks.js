/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
const isAbsolute = (input) => {
  const path = require('path');
  return (path.isAbsolute(input));
};

module.exports = isAbsolute;
