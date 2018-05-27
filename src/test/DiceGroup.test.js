/* globals test, expect */

import Die from '../Die'
import DiceGroup from '../DiceGroup'

const NUM_ITERATIONS = 50

test('2d6 is parsed into 2 6-sided dice', () => {
  let diceGroup = new DiceGroup('2d6')
  expect(diceGroup.dice).toEqual(
    [new Die(6), new Die(6)]
  )
})

test('2d6 returns results between 2 and 12', () => {
  let dice = new DiceGroup('2d6')
  for (let i = 0; i < NUM_ITERATIONS; i++) {
    let result = dice.roll()
    expect(result.sum).toBeGreaterThanOrEqual(2)
    expect(result.sum).toBeLessThanOrEqual(12)
  }
})

test('2d6+1d12 is parsed into 2 6-sided dice and 1 12-sided die', () => {
  let diceGroup = new DiceGroup('2d6+1d12')
  expect(diceGroup.dice).toEqual(
    [new Die(6), new Die(6), new Die(12)]
  )
})

test('2d6+1d12 returns results between 3 and 24', () => {
  let dice = new DiceGroup('2d6+1d12')
  for (let i = 0; i < NUM_ITERATIONS; i++) {
    let result = dice.roll()
    expect(result.sum).toBeGreaterThanOrEqual(3)
    expect(result.sum).toBeLessThanOrEqual(24)
  }
})
