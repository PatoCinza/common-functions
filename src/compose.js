
/**
 * Compose functions as any functional stuff f: x -> y
 * @global
 * @param { ...Function } fns functions to compose
 * @returns { function(any): any } anything the function wants to receive and return
 */
const compose = (...fns) => fns.reduce((f, g) => (...x) => f(g(...x)))

module.exports = compose
