import React, {useState} from 'react'
import Dice from '../components/Dice'
import {getRandomNumberFromRange} from '../components/Tools'

const SoapDishes = () => {
    function getDices() {
        let arr = []
        for (let i = 0; i < 12; i++) {
            const randomNum = getRandomNumberFromRange(1, 6)
            arr.push(randomNum)
        }
        return arr
    }
    const [SD, setSD] = useState(getDices())
    let [userScore, setUserScore] = useState(0)
    let [userWins, setUserWins] = useState(0)
    let [compScore, setCompScore] = useState(0)
    let [compWins, setCompWins] = useState(0)

    function clickHandler(event) {
        const target = +event.target.id
        stylesHandler(event.target)
        setUserScore(userScore = SD[target])
        compSelect(target)
        compareScores()
    }
    function compSelect(userSDId) {
        let compSDiD = null
        do {
            compSDiD = getRandomNumberFromRange(0, 11)
        } while (userSDId === compSDiD)
        setCompScore(compScore = SD[compSDiD])
    }

    function compareScores() {
        if (userScore > compScore) {
            setUserWins(prev => prev + 1)
        } else if (userScore < compScore) {
            setCompWins(prev => prev + 1)
        }
    }

    function startHandler() {
        setSD(getDices())
    }

    function resetScore() {
        setUserWins(0)
        setCompWins(0)
    }

    function stylesHandler(div) {
        div.style.backgroundImage = ''
        const targetImg = div.querySelector('img')
        targetImg.classList.remove('visually-hidden')
    }

    return (
        <div className="container-sm mx-auto form-control pb-4" style={{width: 700}}>
            <h1 className="text-center">Soap dishes</h1>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary m-2" onClick={startHandler}>New game</button>
                    <button className="btn btn-secondary m-2" onClick={resetScore}>Reset score</button>
                    <button className="btn btn-warning m-2" disabled={true}>Show all</button>
                </div>
            </div>
            <div className="row m-2">
                <div className="w-25 col text-center">User win: {userWins}</div>
                <div className="w-25 col text-center">Comp win: {compWins}</div>
            </div>
            <div className="d-flex row justify-content-center align-content-center">
                {
                    SD.map((dice, index) => (
                            <Dice
                                dice={dice}
                                index={index}
                                key={index}
                                onClick={clickHandler}
                            />
                        )
                    )
                }

            </div>
        </div>
    )
}

export default SoapDishes