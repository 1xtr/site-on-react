import React from 'react'

const SoapDishes = () => {

    return (
        <div className="container-sm mx-auto form-control" style={{width: 700}}>
            <h1 className="text-center">Soap dishes</h1>
            <div className="row">
                <div className="col text-center">
                    <button className="btn btn-primary m-2">Start</button>
                    <button className="btn btn-secondary m-2">Reset score</button>
                    <button className="btn btn-warning m-2" disabled={true}>Show all</button>
                </div>
            </div>
            <div className="row m-2">
                <div className="w-25 col text-center">Human win: </div>
                <div className="w-25 col text-center">Random win: </div>
            </div>
            <div className="row">
                <div className="col col-2">1</div>
                <div className="col col-2">2</div>
                <div className="col col-2">3</div>
                <div className="col col-2">4</div>
                <div className="col col-2">5</div>
                <div className="col col-2">6</div>
                <div className="col col-2">7</div>
                <div className="col col-2">8</div>
                <div className="col col-2">9</div>
                <div className="col col-2">10</div>
                <div className="col col-2">11</div>
                <div className="col col-2">12</div>
            </div>
        </div>
    )
}

export default SoapDishes