const { reverseArray } = require('../index.js')

describe('Reverse array', () => {
  it('Should return inverted array', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1])
  })
})
