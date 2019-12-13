const getUniqueValues = require('./get-unique-values.js')

/**
 * Sums CPF digits based on specification rules
 * @private
 * @param { Array<Number> } digits CPF digits
 * @returns { Number } Sum of all it's digits multiplied by the right weight
 */
const sumCpfDigits = digits => digits.map((digit, index, { length }) => digit * (length + 1 - index)).reduce((acc, curr) => acc + curr)

/**
 * Based on a given number, returns the next CPF digit
 * Rules are: (11 - `sum` ) module eleven
 * @private
 * @param { Number } sum Previous digits sum
 * @returns { Number } next digit
 */
const calculateCpfDigit = sum => sum % 11 < 2 ? 0 : 11 - sum % 11

/**
 * gets the next CPF digits based on specification rules
 * @private
 * @param { Array<Number> } cpfNumbers Array of numbers to sum
 * @returns { Number } next digit
 */
const getDigit = cpfNumbers => calculateCpfDigit(sumCpfDigits(cpfNumbers))

/**
 * Validates a cpf passed through here
 * @global
 * @param { String } cpf CPF string
 * @returns { Boolean } wheter it's valid or not
 */
const validateCpf = cpf => {
  const cpfArray = cpf.replace(/\D/g, '').split('').map(Number)
  if (cpfArray.length !== 11 || getUniqueValues(cpfArray).length === 1) {
    return false
  }
  const cpfNumbers = cpfArray.filter((_, i) => i < 9)
  const firstDigit = getDigit(cpfNumbers)
  const secondDigit = getDigit([...cpfNumbers, firstDigit])

  return [firstDigit, secondDigit].join('') === cpfArray.filter((_, i) => i >= 9).join('')
}

module.exports = validateCpf
