import React, { Component } from 'react'
import DiceGroup from './DiceGroup'

class App extends Component {
  constructor () {
    super()
    this.state = {
      results: [],
      dice: ''
    }
  }

  rollDice () {
    const dice = new DiceGroup(this.state.dice)
    const result = dice.roll()

    this.setState(prevState => ({
      results: [{dice: prevState.dice, roll: result}].concat(prevState.results)
    }))
  }

  render () {
    return (
      <div>
        <h1>Roll some dice</h1>
        <div className='input-field'>
          <input type='text' placeholder='Enter dice to roll'
            value={this.state.dice}
            onChange={event => this.setState({dice: event.target.value, result: null})}
          />
        </div>
        <div className='input-field'>
          <button onClick={event => this.rollDice()}>
            Roll those dice
          </button>
        </div>
        {this.state.results.map(result => (
          <p>{result.dice} -> {result.roll.sum}</p>
        ))}
      </div>
    )
  }
}

export default App
