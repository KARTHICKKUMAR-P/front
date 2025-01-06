

import React, { useState, useContext } from 'react'
import { nameContext } from './App.jsx'
import Stomach from './Stomach.jsx'


const Hen = () => {
  let value = useContext(nameContext)
  let [background, setBackground] = useState('black')
  let [color, setColor] = useState('white')

  let changeColor = () => {
   setColor(color === 'black' ? 'white' : 'black')
  }

  return (
    <>
      <button onClick={changeColor}>BUTTON</button>
      <h1 style={{ background: color, color: color=='white'?'black':'white' }}>Dog: {value}</h1>
      <Stomach />
    </>
  )
}

export default Hen
