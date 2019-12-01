const R = require('ramda')

const formatData = R.compose(R.map(Number), R.split('\n'), R.trim)

module.exports = {
  formatData,
}
