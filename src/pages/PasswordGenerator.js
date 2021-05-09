import React, {useState} from 'react'
import {copyToClipboard, getRandomNumber} from '../components/Tools'

const PasswordGenerator = () => {
    const [passLen, setPassLen] = useState(12)
    const [password, setPassword] = useState('')

    const createPassword = (event) => {
        let str, newPassword = ''
        event.preventDefault()
        const fields = event.target.form
        Object.keys(fields).forEach(key => {
            if (fields[key].type === 'checkbox' && fields[key].checked) {
                str += (fields[key].value)
            }
        })
        const shuffled = str.split('').sort(function () {
            return 0.5 - Math.random()
        }).join('')
        for (let i = 0; i < passLen; i++) {
            const randomSymbol = shuffled[getRandomNumber(shuffled.length)]
            newPassword += randomSymbol
        }
        setPassword(newPassword)
        // console.log('password', password)
    }
    return (
        <form className="form-control text-start mt-4 mx-auto" style={{width: 360}}>
            <fieldset className="">
                <legend className="text-center">Рецепт пароля</legend>
                <p className="form-check">
                    <label className="form-label">Заглавные буквы A-Z
                        <input
                            value={'ZYXWVUTSRQPONMLKJIHGFEDCBA'}
                            name="LettersUp"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked={true}
                        />
                    </label>

                </p>
                <p className="form-check">
                    <label className="form-label">Строчные буквы a-z
                        <input
                            value={'zyxwvutsrqponmlkjihgfedcba'}
                            name="LettersLow"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked={true}
                        />
                    </label>

                </p>
                <p className="form-check">
                    <label className="form-label">Цифры 0-9
                        <input
                            value={'0123456789'}
                            name="Numbers"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked={true}
                        />
                    </label>
                </p>
                <p className="form-check">
                    <label className="form-label">Спецсимволы {'@#{]/;'}
                        <input
                            value={'!@#$%^&*()_+=-'}
                            name="Symbols"
                            className="form-check-input"
                            type="checkbox"
                        />
                    </label>

                </p>
                <p>
                    <label className="form-label">Длина пароля:
                        <input
                            defaultValue={passLen}
                            maxLength={2}
                            type="number"
                            size="1"
                            min="6"
                            max="50"
                            onChange={(event) => setPassLen(+event.target.value)}
                        />
                    </label>
                </p>
            </fieldset>

            <p>
                <input
                    className="btn btn-secondary"
                    type="submit"
                    value="Содать пароль!"
                    onClick={createPassword}
                />
            </p>
            <p id="password">
                <label className="form-label">
                    <input className="form-control"
                           value={password}
                           type="text"
                           readOnly={true}
                           style={{width: 300}}
                    />
                </label>
            </p>
            <p id="copyButton">
                <input
                    className="btn btn-info"
                    type="button"
                    value="Скопировать пароль в буфер обмена"
                    onClick={() => copyToClipboard(password)}
                />
            </p>
        </form>
    )
}

export default PasswordGenerator