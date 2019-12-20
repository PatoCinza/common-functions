const { formatMoney } = require('../index.js')

describe('Compose testing', () => {
  it('Should format little numbers', () => {
    expect(formatMoney(100)).toEqual('R$ 100,00')
  })

  it('Should format mid-sized numbers', () => {
    expect(formatMoney(1234)).toEqual('R$ 1.234,00')
  })

  it('Should format large numbers', () => {
    expect(formatMoney(1234567)).toEqual('R$ 1.234.567,00')
  })

  it('Should accept cents if we say so', () => {
    expect(formatMoney(123456752, false)).toEqual('R$ 1.234.567,52')
  })
})
