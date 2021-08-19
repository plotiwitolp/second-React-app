import s from './Header.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={"/"}> <img className={s.logo}
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                                    alt=''/>
            </NavLink>
        </header>
    )
}

export default Header