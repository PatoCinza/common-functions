const { compose } = require('../index.js')

describe('Compose testing', () => {
  it('Should return 42', () => {
    expect(compose(x => x - 8, x => x + 10, x => x * 4)(10)).toEqual(42)
  })
})
