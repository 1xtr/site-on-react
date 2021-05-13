import React from 'react'
import diceImages from './diceImages'
import guessSVG from '../assets/question-solid.svg'

const Dice = (props) => {
    const styleGuess = {
        width: 100,
        height: 100,
        background: `url(${guessSVG}) center/40% no-repeat`
    }
    const styleDice = {
        width: 100,
        height: 100,
        background: `url(${diceImages[props.dice]}) center/35% no-repeat`
    }
    const toggleDice = (event) => {
        props.onClick(event)
    }
    return (
        <div
            id={props.index}
            className="d-flex col col-2 border border-danger border-2 justify-content-center align-items-center"
            style={
                props.show
                    ? styleDice
                    : styleGuess
            }
            onClick={toggleDice}

        >

        </div>

    )
}

export default Dice