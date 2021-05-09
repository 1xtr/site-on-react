import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-light navbar-">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to={'/'} className="nav-link">Главная</NavLink></li>
                <li className="nav-item">
                    <NavLink exact to={'/guess'} className="nav-link">Угадай число</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to={'/password-generator'} className="nav-link">Генератор паролей</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to={'/soap-dishes'} className="nav-link">Игра мыльницы</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar