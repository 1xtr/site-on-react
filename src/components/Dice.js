import React from 'react'
import diceImages from './diceImages'
import guessSVG from '../assets/question-solid.svg'

const Dice = props => {
    const style = {
        width: 100,
        height: 100,
        background: `url(${guessSVG}) no-repeat center`,
        backgroundSize: '35%',
    }
    return (
        <div
            id={props.index}
            className="d-flex p-4 col col-2 border border-danger border-2 justify-content-center align-items-center"
            style={style}
            onClick={props.onClick}

        >
            <img
                src={diceImages[props.dice]} alt={props.dice} style={{width: 50, zIndex: 1}}
                 className="visually-hidden"
            />
        </div>

    )
}

export default Dice