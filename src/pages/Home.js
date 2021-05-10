import React from 'react'
import whoami from '../assets/whoami.jpg'

const Home = () => {
    return (
        <div className="container mb-4">
            <div className="row">
                <div className="col">
                    <img src={whoami} alt="Iam" className="img-fluid float-end" />
                </div>
                <div className="col">
                    <p>
                        <b>Добрый день</b>. Меня зовут <i>Алексей</i>. Я совсем недавно начал
                        программировать, однако уже кое-чему научился.
                        На сегодня уже успел изучить HTML, CSS, JS, Vue и сейчас изучаю React,
                        на котором и хочу остановиться и сделать ключевым направлением.
                    </p>

                    <p>
                        В этом мне помог IT-портал GeekBrains.
                    </p>
                    <p>
                        На этом сайте вы сможете сыграть в несколько игр, которые я написал во
                        время учебы. Это конечно не квака третья и не контра. Но, это как
                        научиться ходить. Ты что-то делаешь, у тебя получается, и тебя это еще
                        больше затягивает.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home