(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global['common-functions'] = {}));
}(this, (function (exports) { 'use strict';

  /**
   * Compose functions as any functional stuff f: x -> y
   * @global
   * @param { ...Function } fns functions to compose
   * @returns { function(any): any } anything the function wants to receive and return
   */
  var compose = function compose() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
      return function () {
        return f(g.apply(void 0, arguments));
      };
    });
  };

  var compose_1 = compose;

  /**
   * Given an array, remove all of it's duplicate values without changing the original
   * @global
   * @param { Array } array Original array
   * @returns { Array } array without duplicate values
   */
  var getUniqueValues = function getUniqueValues(array) {
    return array.filter(function (item, index, array) {
      return array.indexOf(item) === index;
    });
  };

  var getUniqueValues_1 = getUniqueValues;

  /**
   * Given an array, return it inverted without changing it
   * @global
   * @param { Array } array array to be reversed
   * @returns { Array } yarra
   */
  var reverseArray = function reverseArray(array) {
    return array.map(function (x, idx) {
      return array[array.length - 1 - idx];
    });
  };

  var reverseArray_1 = reverseArray;

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /**
   * Sums CPF digits based on specification rules
   * @private
   * @param { Array<Number> } digits CPF digits
   * @returns { Number } Sum of all it's digits multiplied by the right weight
   */

  var sumCpfDigits = function sumCpfDigits(digits) {
    return digits.map(function (digit, index, _ref) {
      var length = _ref.length;
      return digit * (length + 1 - index);
    }).reduce(function (acc, curr) {
      return acc + curr;
    });
  };
  /**
   * Based on a given number, returns the next CPF digit
   * Rules are: (11 - `sum` ) module eleven
   * @private
   * @param { Number } sum Previous digits sum
   * @returns { Number } next digit
   */


  var calculateCpfDigit = function calculateCpfDigit(sum) {
    return sum % 11 < 2 ? 0 : 11 - sum % 11;
  };
  /**
   * gets the next CPF digits based on specification rules
   * @private
   * @param { Array<Number> } cpfNumbers Array of numbers to sum
   * @returns { Number } next digit
   */


  var getDigit = function getDigit(cpfNumbers) {
    return calculateCpfDigit(sumCpfDigits(cpfNumbers));
  };
  /**
   * Validates a cpf passed through here
   * @global
   * @param { String } cpf CPF string
   * @returns { Boolean } wheter it's valid or not
   */


  var validateCpf = function validateCpf(cpf) {
    var cpfArray = cpf.replace(/\D/g, '').split('').map(Number);

    if (cpfArray.length !== 11 || getUniqueValues_1(cpfArray).length === 1) {
      return false;
    }

    var cpfNumbers = cpfArray.filter(function (_, i) {
      return i < 9;
    });
    var firstDigit = getDigit(cpfNumbers);
    var secondDigit = getDigit([].concat(_toConsumableArray(cpfNumbers), [firstDigit]));
    return [firstDigit, secondDigit].join('') === cpfArray.filter(function (_, i) {
      return i >= 9;
    }).join('');
  };

  var validateCpf_1 = validateCpf;

  var thousandDelimiter = new RegExp(/([\w]+)(?<!\.)(\d{3})(?:$)?(\.?[\w]*)/g);
  /**
   * Given a amount, fills the thousands delimiters
   * @private
   * @param { String } amount amount to separate
   * @param { String } separator character to append
   * @returns { String } amount with thousands separated
   */

  var fillThousands = function fillThousands(amount, separator) {
    return thousandDelimiter.test(amount) ? fillThousands(amount.replace(thousandDelimiter, "$1".concat(separator, "$2$3")), separator) : amount;
  };
  /**
   * Given an amount of money as a `Number`, formats it and returns as a `String`
   * @param { Number } amount money to format with no punctuation
   * @param { Boolean } fillDecimal If the function should fill the cents
   * @param { String } currencySymbol currencySymbol
   * @param { String } thousandSeparator thousandSeparator
   * @param { String } decimalSeparator decimalSeparator
   * @returns { String } money formatted
   */


  var formatMoney = function formatMoney(amount) {
    var fillDecimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var currencySymbol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'R$';
    var thousandSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
    var decimalSeparator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ',';
    var decimalValue = fillDecimal ? '00' : String(amount).slice(-2);
    var separatedAmount = fillThousands(String(amount).replace(new RegExp(decimalValue + '$'), ''), thousandSeparator);
    return "".concat(currencySymbol, " ").concat(separatedAmount).concat(decimalSeparator).concat(decimalValue);
  };

  var formatMoney_1 = formatMoney;

  var commonFunctions = {
    compose: compose_1,
    getUniqueValues: getUniqueValues_1,
    reverseArray: reverseArray_1,
    validateCpf: validateCpf_1,
    formatMoney: formatMoney_1
  };
  var commonFunctions_1 = commonFunctions.compose;
  var commonFunctions_2 = commonFunctions.getUniqueValues;
  var commonFunctions_3 = commonFunctions.reverseArray;
  var commonFunctions_4 = commonFunctions.validateCpf;
  var commonFunctions_5 = commonFunctions.formatMoney;

  exports.compose = commonFunctions_1;
  exports.default = commonFunctions;
  exports.formatMoney = commonFunctions_5;
  exports.getUniqueValues = commonFunctions_2;
  exports.reverseArray = commonFunctions_3;
  exports.validateCpf = commonFunctions_4;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
