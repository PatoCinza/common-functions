/**
 * Given an array, return it inverted without changing it
 * @global
 * @param { Array } array array to be reversed
 * @returns { Array } yarra
 */
const reverseArray = array => array.map((x, idx) => array[array.length - 1 - idx])

export default reverseArray
