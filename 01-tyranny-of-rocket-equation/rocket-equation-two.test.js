const findTotalFuel = require('./rocket-equation-two').findTotalFuel

test('should return 2 when input is 14', () => {
  const input = 14
  expect(findTotalFuel(input)).toBe(2)
})

test('should return 966 when input is 1969', () => {
  const input = 1969
  expect(findTotalFuel(input)).toBe(966)
})

test('should return 50346 when input is 100756', () => {
  const input = 100756
  expect(findTotalFuel(input)).toBe(50346)
})
