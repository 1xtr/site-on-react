import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PasswordGenerator from './pages/PasswordGenerator'
import SoapDishes from './pages/SoapDishes'
import Guess from './pages/Guess'


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Navbar/>
                <Switch>
                    <Route path="/guess" component={Guess}/>
                    <Route path="/password-generator" component={PasswordGenerator}/>
                    <Route path="/soap-dishes" component={SoapDishes}/>
                    <Route path="/" component={Home}/>

                </Switch>

            </div>
        </BrowserRouter>

    )
}

export default App
