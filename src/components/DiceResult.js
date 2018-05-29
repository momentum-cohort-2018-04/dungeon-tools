import React from 'react'
import moment from 'moment'

import DieResult from './DieResult'
import './DiceResult.css'

class DiceResult extends React.Component {
  constructor () {
    super()
    this.state = {
      datetime: moment()
    }
  }

  render () {
    const {roll, dice} = this.props
    return <div className='DiceResult'>
      <div className='DiceResult--datetime'>[{this.state.datetime.format('HH:mm:ss')}] {dice}</div>
      <div>
        {roll.dice.map((d, idx) => (
          <DieResult key={roll.dice.length - idx} sides={d.die.sides} roll={d.roll} />
        ))}
        <span> = {roll.sum}</span>
      </div>
    </div>
  }
}

export default DiceResult
