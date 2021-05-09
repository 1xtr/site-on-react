import React, {useState} from 'react'

const Guess = () => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
    const [guess, setGuess] = useState(getRandomNumber(1,100))
    const [gameFinish, setGameFinish] = useState(false)
    const [tryCount, setTryCount] = useState(0)
    const messages = {
        small: 'Вы ввели слишком маленькое число',
        big: 'Вы ввели слишком большое число',
        victory: 'Поздравляю, Вы угадали!',
        info: 'Введите число от 1 до 100',
        blank: '',
    }
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [prompt1, setPrompt1] = useState('')
    const [prompt2, setPrompt2] = useState('')
    const compareNumbers = (num, func) => {
        if (num > guess) {
            func(messages.big)
        }
        if (num < guess) {
            func(messages.small)
        }
        if (num === guess) {
            func(messages.victory)
            setGameFinish(true)
        }
    }
    const check = (event) => {
        event.preventDefault()
        compareNumbers(num1, setPrompt1)
        compareNumbers(num2, setPrompt2)
        setTryCount(prevState => prevState + 1)
    }
    const newGame = () => {
        setPrompt1(messages.blank)
        setPrompt2(messages.blank)
        setGameFinish(false)
        setTryCount(0)
        setGuess(getRandomNumber(1,100))
    }



    return (
        <div className="container mt-4 text-center" style={{width: 360}}>
            <div className="row p-3">
                <h3 className="col">Игра угадайка</h3>
            </div>
            <div className="row p-2">
                {!gameFinish
                    ? <p className="col">Угадайте число от 0 до 100.</p>
                    : <p>Guess: {guess}</p>
                }

            </div>
            <div className="row p-2">
                <div className="col">Игрок 1</div>
                <div className="col">Игрок 2</div>
            </div>
            <div className="row p-2">
                <div className="col">
                    <input
                        defaultValue="0"
                        name="user1"
                        className="form-control-sm"
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        onChange={event => setNum1(+event.target.value)}
                    />
                </div>
                <div className="col">
                    <input
                        defaultValue="0"
                        name="user2"
                        className="form-control-sm"
                        type="number"
                        min="0"
                        max="100"
                        step="1"
                        onChange={event => setNum2(+event.target.value)}

                    />
                </div>
            </div>
            <div className="row p-2">
                <div className="col">{prompt1}</div>
                <div className="col">{prompt2}</div>
            </div>
            <div className="row p-2">
                <div className="col">
                    {
                        gameFinish
                            ? <button className="btn btn-secondary" onClick={newGame}>Новая игра</button>
                            : <button className="btn btn-secondary" onClick={check}>Проверить</button>
                    }

                </div>
            </div>
            <div className="row p-2">
                <div className="col">Step: {tryCount}</div>
            </div>
        </div>
    )
}

export default Guess