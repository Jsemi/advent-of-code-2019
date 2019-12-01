const findFuel = require('./rocket-equation').findFuel

test('should return 2 when input is 12', () => {
  const input = 12
  expect(findFuel(input)).toBe(2)
})

test('should return 2 when input is 14', () => {
  const input = 14
  expect(findFuel(input)).toBe(2)
})

test('For a mass of 1969, the fuel required is 654.', () => {
  const input = 1969
  expect(findFuel(input)).toBe(654)
})

test('For a mass of 100756, the fuel required is 33583.', () => {
  const input = 100756
  expect(findFuel(input)).toBe(33583)
})
