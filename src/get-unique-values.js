/**
 * Given an array, remove all of it's duplicate values without changing the original
 * @global
 * @param { Array } array Original array
 * @returns { Array } array without duplicate values
 */
const getUniqueValues = array => array.filter((item, index, array) => array.indexOf(item) === index)

module.exports = getUniqueValues
