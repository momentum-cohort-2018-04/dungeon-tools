import React, { Component } from 'react'
import DiceGroup from './DiceGroup'
import DiceResult from './components/DiceResult'

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
      <div className='container'>
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
        {this.state.results.map((result, i) =>
          // Why did I subtract here?
          <DiceResult key={this.state.results.length - i} dice={result.dice} roll={result.roll} />
        )}
      </div>
    )
  }
}

export default App
