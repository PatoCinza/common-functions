const { getUniqueValues } = require('../index.js')

describe('get unique values', () => {
  it('Should return only non repeated values', () => {
    expect(getUniqueValues([1, 2, 3, 2, 5, 5, 7, 1])).toEqual([1, 2, 3, 5, 7])
  })

  it('Should return an array with the right length', () => {
    expect(getUniqueValues([1, 1, 1, 1, 1, 1, 1, 1]).length).toBe(1)
  })
})
