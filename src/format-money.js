const thousandDelimiter = new RegExp(/([\w]+)(?<!\.)(\d{3})(?:$)?(\.?[\w]*)/g)

/**
 * Given a amount, fills the thousands delimiters
 * @private
 * @param { String } amount amount to separate
 * @param { String } separator character to append
 * @returns { String } amount with thousands separated
 */
const fillThousands = (amount, separator) =>
  thousandDelimiter.test(amount) ? fillThousands(amount.replace(thousandDelimiter, `$1${separator}$2$3`), separator) : amount

/**
 * Given an amount of money as a `Number`, formats it and returns as a `String`
 * @param { Number } amount money to format with no punctuation
 * @param { Boolean } fillDecimal If the function should fill the cents
 * @param { String } currencySymbol currencySymbol
 * @param { String } thousandSeparator thousandSeparator
 * @param { String } decimalSeparator decimalSeparator
 * @returns { String } money formatted
 */
const formatMoney = function (amount, fillDecimal = true, currencySymbol = 'R$', thousandSeparator = '.', decimalSeparator = ',') {
  const decimalValue = fillDecimal ? '00' : String(amount).slice(-2)
  const integerAmount = String(amount).slice(-2) === '00' && fillDecimal
    ? String(amount)
    : String(amount).replace(new RegExp(decimalValue + '$'), '')
  const separatedAmount = fillThousands(integerAmount, thousandSeparator)
  return `${currencySymbol} ${separatedAmount}${decimalSeparator}${decimalValue}`
}

module.exports = formatMoney
