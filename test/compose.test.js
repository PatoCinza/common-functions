const { compose } = require('../index.js')

describe('Compose testing', () => {
  it('Should return 42', () => {
    expect(compose(x => x - 8, x => x + 10, x => x * 4)(10)).toEqual(42)
  })

  it('Should compose just one function', () => {
    expect(compose(x => true)(false)).toBe(true)
  })

  it('Should be able to not receive params', () => {
    expect(compose(() => true, () => false)(false)).toBe(true)
  })
})
