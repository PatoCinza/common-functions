const { identity } = require('../index.js')

describe('Identity testing', () => {
  it('Should return passed param', () => {
    const param = 'test'
    expect(identity(param)).toEqual(param)
  })
})
