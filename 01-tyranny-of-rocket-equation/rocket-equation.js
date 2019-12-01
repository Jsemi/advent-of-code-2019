const R = require('ramda')

const findFuel = R.compose(
  R.flip(R.subtract)(2),
  Math.floor,
  R.flip(R.divide)(3)
)

const formatData = R.compose(R.map(Number), R.split('\n'), R.trim)

const sumFuel = R.compose(R.sum, R.map(findFuel), formatData)

module.exports = {
  findFuel,
  sumFuel,
}
