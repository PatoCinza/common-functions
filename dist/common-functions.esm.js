var compose = require('./src/compose.js');

var getUniqueValues = require('./src/get-unique-values.js');

var reverseArray = require('./src/reverse-array.js');

var validateCpf = require('./src/validate-cpf.js');

var formatMoney = require('./src/format-money');

module.exports = {
  compose: compose,
  getUniqueValues: getUniqueValues,
  reverseArray: reverseArray,
  validateCpf: validateCpf,
  formatMoney: formatMoney
};
