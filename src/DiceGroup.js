import Die from './Die'

class DiceGroup {
  constructor (desc) {
    this.dice = []
    if (desc.includes('+')) {
      this.dice = desc.split('+')
        .map(groupDesc => new DiceGroup(groupDesc).dice)
        .reduce((acc, die) => acc.concat(die))
    } else {
      let [numDice, dieSize] = desc.split('d').map(n => parseInt(n, 10))
      for (var i = 0; i < numDice; i++) {
        this.dice.push(new Die(dieSize))
      }
    }
  }

  roll () {
    const results = {}
    results.dice = []
    for (let die of this.dice) {
      results.dice.push({die: die, roll: die.roll()})
    }
    results.sum = results.dice
      .reduce((total, d) => total + d.roll, 0)

    return results
  }
}

export default DiceGroup
