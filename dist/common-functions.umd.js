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

  var commonFunctions = {
    compose: compose_1,
    getUniqueValues: getUniqueValues_1,
    reverseArray: reverseArray_1,
    validateCpf: validateCpf_1
  };
  var commonFunctions_1 = commonFunctions.compose;
  var commonFunctions_2 = commonFunctions.getUniqueValues;
  var commonFunctions_3 = commonFunctions.reverseArray;
  var commonFunctions_4 = commonFunctions.validateCpf;

  exports.compose = commonFunctions_1;
  exports.default = commonFunctions;
  exports.getUniqueValues = commonFunctions_2;
  exports.reverseArray = commonFunctions_3;
  exports.validateCpf = commonFunctions_4;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
