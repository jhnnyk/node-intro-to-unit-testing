const should = require('chai').should()

const fizzBuzzer = require('../fizzBuzzer')

// unit tests for fizzBuzzer function
describe('fizzBuzzer', () => {
  it('should return `fizz-buzz` for multiples of 15', () => {
    const fizzBuzzCases = [15, 30, 45]

    fizzBuzzCases.forEach(input => {
      const fizzBuzzOutput = fizzBuzzer(input)
      fizzBuzzOutput.should.equal('fizz-buzz')
    })
  })

  it('should return `buzz` for multiples of 5', () => {
    const fizzBuzzCases = [5, 10, 25]

    fizzBuzzCases.forEach(input => {
      const fizzBuzzOutput = fizzBuzzer(input)
      fizzBuzzOutput.should.equal('buzz')
    })
  })

  it('should return `fizz` for multiples of 3', () => {
    const fizzBuzzCases = [3, 12, 36]

    fizzBuzzCases.forEach(input => {
      const fizzBuzzOutput = fizzBuzzer(input)
      fizzBuzzOutput.should.equal('fizz')
    })
  })

  it('should return itself if it\'s not a multiple of 15, 5, or 3', () => {
    const fizzBuzzCases = [2, 7, 13, 43]

    fizzBuzzCases.forEach(input => {
      const fizzBuzzOutput = fizzBuzzer(input)
      fizzBuzzOutput.should.equal(input)
    })
  })

  it('should raise an error if arg is not a number', () => {
    const badInputs = ['1', true, {obj: 'data'}]

    badInputs.forEach(input => {
      (function () {
        fizzBuzzer(input)
      }).should.throw(Error)
    })
  })
})
