const R = require('ramda')
const formatData = require('../helpers').formatData
const findFuel = require('./rocket-equation').findFuel

const findTotalFuel = (current, totalFuel = 0) => {
  const fuelNeeded = findFuel(current)
  if (fuelNeeded > 0) return findTotalFuel(fuelNeeded, totalFuel + fuelNeeded)
  return totalFuel
}

const sumTotalFuel = R.compose(R.sum, R.map(findTotalFuel), formatData)

module.exports = {
  findTotalFuel,
  sumTotalFuel,
}
