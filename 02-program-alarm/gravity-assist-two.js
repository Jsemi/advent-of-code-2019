const R = require('ramda')
const calculate = require('./gravity-assist')

const finalOutput = 19690720

const findInputs = input => {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const output = calculate(noun, verb)(input)
      if (output === finalOutput) {
        return 100 * noun + verb
      }
    }
  }
}

module.exports = findInputs
