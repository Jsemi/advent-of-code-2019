const R = require('ramda')

const gravityAssist = (stack, idx = 0) => {
  const op = stack[idx]
  const first = stack[stack[idx + 1]]
  const second = stack[stack[idx + 2]]
  const dest = stack[idx + 3]
  const next = idx + 4

  switch (op) {
    case 1:
      return gravityAssist(R.update(dest, first + second)(stack), next)
    case 2:
      return gravityAssist(R.update(dest, first * second)(stack), next)
    case 99:
      return stack
  }
}

const formatData = R.compose(R.map(Number), R.split(','), R.trim)

const calculate = (noun, verb) =>
  R.compose(
    R.head,
    gravityAssist,
    R.update(2, verb),
    R.update(1, noun),
    formatData
  )

module.exports = calculate
