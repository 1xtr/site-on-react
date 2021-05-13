import React, {useEffect, useState} from 'react'
import Dice from '../components/Dice'
import {getRandomNumberFromRange} from '../components/Tools'

const SoapDishes = () => {
    function getDices() {
        let arr = []
        for (let i = 0; i < 12; i++) {
            arr.push({
                dice: getRandomNumberFromRange(1, 6),
                show: false
            })
        }
        return arr
    }

    const [SD, setSD] = useState(getDices())
    const [gameRun, setGameRun] = useState(true)
    const [userScore, setUserScore] = useState(0)
    const [userWins, setUserWins] = useState(0)
    const [compScore, setCompScore] = useState(0)
    const [compWins, setCompWins] = useState(0)

    function clickHandler(event) {
        setGameRun(false)
        const target = +event.target.id
        setUserScore(SD[target].dice)
        showDice(target)
        showDice(compSelect(target))
    }

    function showDice(dishId) {
        setSD(SD.map((dice, index) => {
                if (index === dishId) {
                    dice.show = true
                }
                return dice
            })
        )
    }

    function compSelect(userSDId) {
        let compSDiD = null
        do {
            compSDiD = getRandomNumberFromRange(0, 11)
        } while (userSDId === compSDiD)
        setCompScore(SD[compSDiD].dice)
        return compSDiD
    }

    function newGameHandler() {
        setGameRun(true)
        setSD(getDices())
    }

    function resetScore() {
        setUserWins(0)
        setCompWins(0)
    }

    function showAll() {
        setGameRun(false)
        setSD(SD.map(dish => {
            dish.show = true
            return dish
        }))
    }

    function renderDices() {
        return SD.map((item, index) => (
                <Dice
                    dice={item.dice}
                    index={index}
                    key={index}
                    show={item.show}
                    onClick={
                        gameRun
                            ? clickHandler
                            : newGameHandler
                    }
                />
            )
        )
    }

    useEffect(() => {
        if (userScore > compScore) {
            setUserWins(prev => prev + 1)
        } else if (userScore < compScore) {
            setCompWins(prev => prev + 1)
        }
        setUserScore(0)
        setCompScore(0)
        // eslint-disable-next-line
    }, [compScore])


    return (
        <div className="container-sm mx-auto form-control pb-4" style={{width: 700}}>
            <div className="text-center">
                <h1>Soap dishes</h1>
                <p>Кликаем на квадрат, откроется игровая кость, следом откроется выбор компьютера</p>
            </div>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary m-2" onClick={newGameHandler}>New game</button>
                    <button className="btn btn-secondary m-2" onClick={resetScore}>Reset score</button>
                    <button className="btn btn-warning m-2" disabled={false} onClick={showAll}>Show all</button>
                </div>
            </div>
            <div className="row m-2">
                <div className="w-25 col text-center">User win: {userWins}</div>
                <div className="w-25 col text-center">Comp win: {compWins}</div>
            </div>
            <div className="d-flex row justify-content-center align-content-center">
                {
                    renderDices()
                }

            </div>
            <div className='font-monospace fs-6 mt-4 text-center'>
                <a className={'text-decoration-none'}
                    href='https://github.com/1xtr/site-on-react'
                   target={'_blank'}
                   rel={'noreferrer'}>Sources on Github</a>
            </div>
        </div>
    )
}

export default SoapDishes