const R = require('ramda')
const formatData = require('../helpers').formatData

const findFuel = R.compose(
  R.flip(R.subtract)(2),
  Math.floor,
  R.flip(R.divide)(3)
)

const sumFuel = R.compose(R.sum, R.map(findFuel), formatData)

module.exports = {
  findFuel,
  sumFuel,
}
