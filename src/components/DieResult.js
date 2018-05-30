import React from 'react'

import d4 from '../img/d4.png'
import d6 from '../img/d6.png'
import d8 from '../img/d8.png'
import d10 from '../img/d10.png'
import d12 from '../img/d12.png'
import d20 from '../img/d20.png'
import dice from '../img/dice.png'

function dieImg (size) {
  if (size === 4) {
    return d4
  } else if (size === 6) {
    return d6
  } else if (size === 8) {
    return d8
  } else if (size === 10) {
    return d10
  } else if (size === 12) {
    return d12
  } else if (size === 20) {
    return d20
  } else {
    return dice
  }
}

function DieResult (props) {
  const {sides, roll} = props
  return (
    <div className='DieResult'>
      <img src={dieImg(sides)} style={{width: '100%'}} />
      <div>{roll}</div>
    </div>
  )
}

export default DieResult
