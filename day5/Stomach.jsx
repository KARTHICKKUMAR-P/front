

import React, { useState, useContext } from "react";
import { nameContext } from './App.jsx'

const Stomach = () => {
    let value = useContext(nameContext);
    let [color, setColor] = useState('white')

    let changeColor = () => {
        setColor(color === 'black' ? 'white' : 'black')
    }

    return (
        <>
        <button onClick={changeColor}>BUTTON</button>
        <h1 style={{ background: color, color: color=='white'?'black':'white' }}>Cat: {value}</h1>
        </>
    )
}

export default Stomach;

