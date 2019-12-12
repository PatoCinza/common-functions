const { validateCpf } = require('../index.js')

describe('Validate cpf tests', () => {
  it('Should return true if a CPF is valid', () => {
    expect(validateCpf('723.401.510-82')).toBe(true)
  })

  it('Should return false if a CPF\'s first digit is invalid', () => {
    expect(validateCpf('723.401.510-12')).toBe(false)
  })

  it('Should return false if a CPF\'s second digit is invalid', () => {
    expect(validateCpf('723.401.510-83')).toBe(false)
  })

  it('Should test a case where calculate digit returns 0 because it\'s an untested branch of ours', () => {
    expect(validateCpf('097.565.920-01')).toBe(true)
  })

  it('Should return false if a CPF is all just one number', () => {
    expect(validateCpf('111.111.111-11')).toBe(false)
  })
})
